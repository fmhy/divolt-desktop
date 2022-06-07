import type { ConfigData } from "../app";

import { autoLaunch } from "./autoLaunch";
import { connectRPC } from "./discordRPC";
import Store from "electron-store";
import { app } from "electron";

export const store = new Store<{ config: Partial<ConfigData> }>();

export async function firstRun() {
    if (store.get("firstrun", false)) return;

    // Enable auto start by default on Windows / Mac OS.
    if (process.platform === "win32" || process.platform === "darwin") {
        const enabled = await autoLaunch.isEnabled();
        if (!enabled) {
            await autoLaunch.enable();
        }
    }

    store.set("firstrun", true);
    store.set("config", {
        "minimiseToTray": "false"
    });
}

export function getConfig(): ConfigData {
    const defaults: ConfigData = {
        build: "stable",
        frame: process.platform !== "win32",
        discordRPC: false,
        minimiseToTray: false,
        hardwareAcceleration: true,
    };

    return Object.assign({} as any, defaults, store.get("config"));
}

export function onStart() {
    const config = getConfig();

    if (!config.hardwareAcceleration) {
        app.disableHardwareAcceleration();
    }

    if (config.discordRPC) {
        connectRPC();
    }
}

export function getBuildURL() {
    return "https://divolt.xyz";
}
