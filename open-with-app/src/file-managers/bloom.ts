import { runAppleScript } from "@raycast/utils";
import type { FileManagerProvider } from "./types";

export class BloomProvider implements FileManagerProvider {
  readonly name = "Bloom";
  readonly bundleId = "com.stclairsoft.Bloom";

  async getSelectedPaths(): Promise<string[]> {
    const result = (await runAppleScript(`
      tell application "Bloom"
        if (count of windows) is 0 then return ""
        set selectedItems to selection of front window
        if selectedItems is missing value then return ""

        set posixPaths to {}
        repeat with anItem in selectedItems
          try
            set end of posixPaths to POSIX path of anItem
          on error
            try
              set end of posixPaths to (anItem as text)
            end try
          end try
        end repeat

        set AppleScript's text item delimiters to linefeed
        return posixPaths as text
      end tell
    `)) as string;
    if (!result) return [];
    return result
      .split(/\r?\n/)
      .map((path) => path.trim())
      .filter((path) => path.length > 0);
  }
}
