#!/usr/bin/env bash

create-dmg \
  --volname "Divolt Installer" \
  --volicon "DivoltDMG.icns" \
  --background "background.png" \
  --window-pos 200 120 \
  --window-size 512 384 \
  --icon-size 80 \
  --icon "Divolt" 125 185 \
  --hide-extension "Divolt" \
  --app-drop-link 375 185 \
  "Divolt-Installer.dmg" \
  "source_folder/"