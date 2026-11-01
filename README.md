# vendor-shadcn

A trimmed, pinned copy of [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (MIT), maintained by
[vendor-keeper](https://github.com/jbwashington/vendor-keeper) (private) for James Washington's apps. Apps
copy `src/` into `vendor/shadcn/` instead of installing `shadcn` from npm.

**Based on upstream `shadcn@3.8.5`** (`ad25490cf`), reviewed through `shadcn@3.8.5`.
See `UPSTREAM.json` for the exact files tracked.

## What we took

One file: `packages/shadcn/src/tailwind.css` (keyframes + custom variants), verbatim. The npm package is the shadcn CLI, ~35 dependencies, for this 95-line file.

## Layout

| Path | What | Who writes it |
|---|---|---|
| `upstream/` | the tracked upstream files, byte-for-byte at `UPSTREAM.json` `tag` | `vk prepare` only, and `vk` refuses to ship if it doesn't match upstream |
| `src/` | what apps copy in | ports, reviewed by tests and the `vk` guard |
| `test/` | `src/` vs `upstream/` checks | |
| `CHANGES.md` | every upstream range applied, skipped or auto-advanced, and why | `vk` |

`diff -ru upstream src` is the complete list of our changes from upstream.

## How it's kept current

A daily scan checks for new upstream releases (only ones at least 48h old, the same cooldown as package
installs) and OSV advisories for our pinned version. If no tracked file changed, the review marker moves
forward on its own. Otherwise an agent reads the upstream diff, ports only what's worth taking (security and
correctness fixes, not features), runs the tests, and ships through a gate. The gate refuses new imports, network,
eval, process/env access, encoded blobs or big diffs, and requires every app that uses this copy to build.

## License

Upstream's license applies to everything here; see `src/LICENSE`.
