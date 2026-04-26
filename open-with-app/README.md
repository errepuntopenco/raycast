# Open With App

Raycast extension that lets you choose any installed macOS application to open
the items currently selected in your file manager.

## Supported file managers

The extension auto-detects the frontmost application and reads the selection
from it. If the frontmost app isn't a supported file manager, Finder is used
as the fallback.

| File manager | Bundle id | Notes |
|---|---|---|
| Finder | `com.apple.finder` | Works whether or not Finder is frontmost. |
| [Bloom](https://bloomapp.club) | `com.asiafu.Bloom` | Reads `selection of front window` via AppleScript. |

## Adding a new file manager

Implement the `FileManagerProvider` interface in `src/file-managers/types.ts`
and register it in `src/file-managers/registry.ts`. The rest of the extension
picks it up automatically.
