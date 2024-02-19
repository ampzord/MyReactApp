import { createGlobalStore } from "./createGlobalStore";

type SettingsStore = {
    settings: Settings;
    isOpen: boolean;
}

type Settings = {
    isLocal: boolean;
    type: string;
}

const mySettings : SettingsStore = {
    settings: {
        isLocal: false,
        type: 'HelloWorld'
    },
    isOpen: true
}

export const myStore = createGlobalStore(mySettings);