# Divolt Desktop

## Description

This is a fork of [Revolt Desktop](https://github.com/revoltchat/desktop) for Divolt, a self-hosted instance of Revolt.

## Quick Start

You can get the latest version in [releases.](https://github.com/ggtylerr/divolt-desktop/releases) Please note that any release by "github-actions" is automated (generated every time a commit / change is done) and may include bugs.

If you want to build it yourself, you'll need [Node.JS](https://nodejs.org/en/) and [Yarn.](https://yarnpkg.com/getting-started/install) Then do the following:

```
git clone https://github.com/ggtylerr/divolt-desktop
cd divolt-desktop
yarn
yarn build:bundle
yarn start
```

CLI Commands:

| Command             | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| `yarn build:bundle` | Builds the application bundle from TypeScript files.                                |
| `yarn watch:bundle` | Watches TypeScript files for changes and rebuilds the application bundle on change. |
| `yarn start`        | Starts the application.                                                             |
| `yarn eb`           | Runs electron-builder.                                                              |
| `yarn release`      | Prepares a release. Requires a valid .env file.                                     |
| `yarn clean`        | Cleans the application bundle.                                                      |

There are also numerous OS-specific commands related to building and testing, all prefixed with `yarn`:
 - `build:linux:tar`, `build:linux:unpacked`, `build:linux:appimage`, `build:mac`, `build:windows:nsis`, `build:windows:appx`
    - Builds the application for the specified platform and packaging format.
 - `test:linux:appimage`
    - Runs the newest build of the Linux AppImage.

## Troubleshooting

If you have issues, please check the following first:
* Does this happen in browser?
* Are you using an outdated version?
* If you have connection problems, do you have a firewall?
If all of the above is false, and it's not listed in the known bugs, please [create an issue.](https://github.com/ggtylerr/divolt-desktop/issues/new/choose)

## Known bugs

* Minimising to tray crashes
This is a bug in the normal client. Once it's fixed there, their changes will be reflected here.

## License

Divolt Desktop and Revolt Desktop is licensed under the [GNU Affero General Public License v3.0](https://github.com/ggtylerr/divolt-desktop/blob/master/LICENSE).
