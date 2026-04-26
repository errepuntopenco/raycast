# Open With App Changelog

## [Multi-file-manager support] - 2026-04-26

- Added support for reading the selection from Bloom in addition to Finder
- The active file manager is detected from the frontmost application; Finder is used as the fallback
- Introduced a pluggable file-manager provider interface so additional managers can be added later

## [Fix Recommended Applications section position] - 2024-11-26

- Fix: keep the Recommended Applications section always on top of the Other Applications section

## [Usability improvements] - 2023-12-05

- works even if Finder is not the frontmost app
- display which items will be open in the search placeholder
- show apps that are recommended for these files on top, other apps on the bottom
- sort by frecency (namespaced to file types)
- indicate if nothing is selected at start of workflow (empty list) instead of at the end (error toast)