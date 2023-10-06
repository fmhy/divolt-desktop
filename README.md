# Divolt Desktop

## Description

This is a fork of [Revolt Desktop](https://github.com/revoltchat/desktop) for Divolt, a self-hosted instance of Revolt.

It also has additional features, like an adblocker, [(from revolt-desktop-adblock)](https://github.com/sussycatgirl/revolt-desktop-adblock) and sooner bug fixes than Revolt.

## Quick Start

You can get the latest version in [releases.](https://github.com/fmhy/divolt-desktop/releases) Please note that any release by "github-actions" is automated (generated every time a commit / change is done) and may include bugs.

If you want to build it yourself, you'll need [Node.JS](https://nodejs.org/en/) and [Yarn.](https://yarnpkg.com/getting-started/install) Then do the following:

```
git clone https://github.com/fmhy/divolt-desktop
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

-   `build:linux` `build:mac`, `build:windows`
    -   Builds the application for the specified platform.

## Troubleshooting

If you have issues, please check the following first:
* Does this happen in browser?
* Does this happen in [the original app?](https://github.com/revoltchat/desktop)
* Are you using an outdated version?
* If you have connection problems, do you have a firewall?

If all of the above is false, and it's not listed in the known bugs, please [report an issue.](https://github.com/fmhy/divolt-desktop/issues/new/choose)

## Known bugs

* Unable to preload CSS

This shouldn't happen anymore, but if it does, right click the tray icon and hit "clear cache".

* App auto-updated to normal Revolt

***Please make sure you downloaded the latest version!*** Most people have downloaded the initial release, and the one immediately after that fixed it.

You can check what version you had by looking in your downloads / history. If you downloaded before May 22, 2022, or downloaded 1.0.4 (also known as v1.0.4-d1.0.0, or any of the automated builds before that,) then you were using an outdated version.

If this still occurred on a later version, please report an issue.

## License
Divolt Desktop and Revolt Desktop is licensed under the [GNU Affero General Public License v3.0](https://github.com/fmhy/divolt-desktop/blob/master/LICENSE).
