import { runAppleScript } from "@raycast/utils";
import type { FileManagerProvider } from "./types";

const PATH_DELIMITER = "\n";

export class BloomProvider implements FileManagerProvider {
  readonly name = "Bloom";
  readonly bundleId = "com.stclairsoft.Bloom";

  async getSelectedPaths(): Promise<string[]> {
    const result = (await runAppleScript(`
      tell application "Bloom"
        if (count of windows) is 0 then return ""
        set selectedPaths to selection of front window
        set AppleScript's text item delimiters to "${PATH_DELIMITER}"
        return selectedPaths as text
      end tell
    `)) as string;
    if (!result) return [];
    return result.split(PATH_DELIMITER).filter((path) => path.length > 0);
  }
}
