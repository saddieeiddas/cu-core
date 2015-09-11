// Generated by dts-bundle v0.3.0

declare module 'cu-core' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import CoreSettings from '__cu-core/CoreSettings';
    import clientInterface from '__cu-core/clientInterface';
    import client from '__cu-core/client';
    import abilityTags from '__cu-core/constants/abilityTags';
    import archetype from '__cu-core/constants/archetype';
    import buildUIMode from '__cu-core/constants/buildUIMode';
    import channelId from '__cu-core/constants/channelId';
    import dxKeyCodes from '__cu-core/constants/dxKeyCodes';
    import emotes from '__cu-core/constants/emotes';
    import jsKeyCodes from '__cu-core/constants/jsKeyCodes';
    import jsToDXKeyCodeMap from '__cu-core/constants/jsToDXKeyCodeMap';
    import race from '__cu-core/constants/race';
    import soundEvents from '__cu-core/constants/soundEvents';
    import tagConstraintType from '__cu-core/constants/tagConstraintType';
    import tags from '__cu-core/constants/tags';
    import Ability from '__cu-core/classes/Ability';
    import Combatant from '__cu-core/classes/Combatant';
    import Player from '__cu-core/classes/Player';
    import Character from '__cu-core/classes/Character';
    import Inventory from '__cu-core/classes/Inventory';
    import Equip from '__cu-core/classes/Equip';
    import Item from '__cu-core/classes/Item';
    import BanesBoons from '__cu-core/classes/BanesBoons';
    export { CoreSettings, clientInterface, client, abilityTags, archetype, buildUIMode, channelId, dxKeyCodes, emotes, jsKeyCodes, jsToDXKeyCodeMap, race, soundEvents, tagConstraintType, tags, Ability, Combatant, Player, Character, Inventory, Equip, Item, BanesBoons };
}

declare module '__cu-core/CoreSettings' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import channelId from '__cu-core/constants/channelId';
    class CoreSettings {
        cseApiUrl: string;
        cseApiPort: number;
        hatcheryApiUrl: string;
        hatcheryApiPort: number;
        wyrmlingApiUrl: string;
        wyrmlingApiPort: number;
        apiToken: string;
        channelId: channelId;
        constructor(settings?: CoreSettings);
    }
    export default CoreSettings;
}

declare module '__cu-core/clientInterface' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import tags from '__cu-core/constants/tags';
    import race from '__cu-core/constants/race';
    interface clientInterface {
        initialized: boolean;
        OnInitialized(c: () => void): number;
        CancelOnInitialized(c: number): void;
        muteVolume: boolean;
        mainVolume: number;
        patchResourceChannel: number;
        loginToken: string;
        pktHash: string;
        webAPIHost: string;
        serverURL: string;
        serverTime: number;
        vsync: number;
        FOV(degrees: number): void;
        DropLight(intensity: number, radius: number, red: number, green: number, blue: number): void;
        ResetLights(): void;
        OnServerConnected(c: (isConnected: boolean) => void): number;
        CancelOnServerConnected(c: number): void;
        PlaySoundEvent(id: number): void;
        ToggleCamera(): void;
        OpenUI(name: string): void;
        CloseUI(name: string): void;
        HideUI(name: string): void;
        ShowUI(name: string): void;
        ToggleUIVisibility(name: string): void;
        FocusUI(name: string): void;
        RequestInputOwnership(): void;
        ReleaseInputOwnership(): void;
        Quit(): void;
        CrashTheGame(): void;
        OnUpdateNameplate(c: (cell: number, colorMod: number, name: string, gtag: string, title: string) => void): void;
        OnOpenUI(callback: (name: string) => void): void;
        OnCloseUI(callback: (name: string) => void): void;
        OnShowUI(callback: (name: string) => void): void;
        OnHideUI(callback: (name: string) => void): void;
        Listen(event: string): void;
        Ignore(event: string): void;
        Fire(event: string, ...args: any[]): void;
        OnEvent(callback: (event: string, ...args: any[]) => void): void;
        Respawn(id: string): void;
        OnAbilityNumbersChanged(callback: (abilityNumbers: string[]) => void): void;
        Attack(abilityID: string): void;
        OnAbilityCooldown(c: (cooldownID: number, timeStarted: number, duration: number) => void): number;
        CancelOnAbilityCooldown(c: number): void;
        OnAbilityActive(c: (currentAbility: string, timeStarted: number, timeTriggered: number, queuedAbility: string) => any): number;
        CancelOnAbilityActive(c: number): void;
        OnAbilityError(c: (message: string) => void): void;
        GetItem(itemID: string): void;
        OnGetItem(callback: (itemID: string, data: string) => void): void;
        OnItemEquipped(callback: (itemID: string) => void): void;
        OnItemUnequipped(callback: (itemID: string) => void): void;
        OnEquippedGearItemIDsChanged(callback: (gearItemIDs: string[]) => void): void;
        UnequipItem(itemID: string): void;
        OnInventoryItemIDsChanged(callback: (inventoryItemIDs: string[]) => void): void;
        EquipItem(itemID: string): void;
        OnReceiveConfigVars(c: (configs: string) => void): void;
        OnReceiveConfigVar(c: (config: any) => void): void;
        OnConfigVarChanged(c: (isChangeSuccessful: boolean) => void): void;
        SaveConfigChanges(): void;
        OnSavedConfigChanges(c: () => void): void;
        RestoreConfigDefaults(tag: tags): void;
        ChangeConfigVar(variable: string, value: string): void;
        CancelChangeConfig(variable: string): void;
        CancelAllConfigChanges(tag: tags): void;
        GetConfigVars(tag: tags): void;
        GetConfigVar(variable: string): void;
        OnBuildingModeChanged(c: (buildingMode: boolean) => void): void;
        OnReceiveBlocks(c: (buildingDict: any) => void): void;
        OnReceiveScreenShot(c: (screenShotString: any) => void): void;
        OnReceiveBlockTags(c: (blockID: number, tagDict: any) => void): void;
        OnCopyBlueprint(c: () => void): void;
        OnNewBlueprint(c: (index: number, name: string) => void): void;
        ToggleBuildingMode(): void;
        SetBuildingMode(c: (newMode: number) => void): void;
        RequestBlocks(): void;
        RequestBlockTags(c: (blockID: number) => void): void;
        ChangeBlockType(c: (newType: number) => void): void;
        SelectBlueprint(c: (index: number) => void): void;
        SaveBlueprint(c: (name: string) => void): void;
        RequestBlueprints(): void;
        CommitBlock(): void;
        CancelBlockPlacement(): void;
        BlockRotateX(): void;
        BlockRotateY(): void;
        BlockRotateZ(): void;
        RemoveIslands(): void;
        ApplyStability(): void;
        BlockFlipX(): void;
        BlockFlipY(): void;
        BlockFlipZ(): void;
        CopyBlueprint(): void;
        PasteBlueprint(): void;
        OpenScreenshotShare(): void;
        TakeScreenshot(): void;
        OnAnnouncement(c: (message: string, type: number) => void): void;
        OnCharacterIDChanged(c: (id: string) => void): void;
        OnCharacterFactionChanged(c: (faction: number) => void): void;
        OnCharacterRaceChanged(c: (race: race) => void): void;
        OnCharacterNameChanged(c: (name: string) => void): void;
        OnCharacterHealthChanged(c: (health: number, maxHealth: number) => void): void;
        OnCharacterStaminaChanged(c: (stamina: number, maxStamina: number) => void): void;
        OnCharacterEffectsChanged(c: (effects: string) => void): void;
        Emote(emote: number): void;
        OnEnemyTargetNameChanged(callback: (name: string) => void): void;
        OnEnemyTargetHealthChanged(callback: (health: number, maxHealth: number) => void): void;
        OnEnemyTargetStaminaChanged(callback: (stamina: number, maxStamina: number) => void): void;
        OnEnemyTargetEffectsChanged(callback: (effects: string) => void): void;
        OnFriendlyTargetNameChanged(callback: (name: string) => void): void;
        OnFriendlyTargetHealthChanged(callback: (health: number, maxHealth: number) => void): void;
        OnFriendlyTargetStaminaChanged(callback: (stamina: number, maxStamina: number) => void): void;
        OnFriendlyTargetEffectsChanged(callback: (effects: string) => void): void;
        OnBeginChat(c: (commandMode: number, text: string) => void): void;
        OnChat(c: (type: number, from: string, body: string, nick: string, iscse: boolean) => void): void;
        SendChat(type: number, to: string, body: string): void;
        JoinMUC(room: string): void;
        LeaveMUC(room: string): void;
        SendSlashCommand(command: string, parameters: string): void;
        Stuck(): void;
        ChangeZone(zoneID: number): void;
        ShowAbility(abilityID: string): void;
        OnShowAbility(callback: (abilityID: string) => void): void;
        EditAbility(abilityID: string): void;
        OnEditAbility(callback: (abilityID: string) => void): void;
        AbilityCreated(abilityID: string, primaryBaseComponentID: string, secondaryBaseComponentID: string, ability: string): void;
        OnAbilityCreated(callback: (abilityID: string, ability: string) => void): void;
        AbilityDeleted(abilityID: string): void;
        OnAbilityDeleted(callback: (abilityID: string) => void): void;
        RegisterAbility(abilityID: string, primaryBaseComponentID: string, secondaryBaseComponentID: string): void;
        OnAbilityRegistered(callback: (abilityID: string, cooldowns: string, duration: number, triggerTime: number) => void): void;
        fps: number;
        frameTime: number;
        netstats_udpPackets: number;
        netstats_udpBytes: number;
        netstats_tcpMessages: number;
        netstats_tcpBytes: number;
        netstats_players_updateBits: number;
        netstats_players_updateCount: number;
        netstats_players_newCount: number;
        netstats_players_newBits: number;
        netstats_lag: number;
        particlesRenderedCount: number;
        characters: number;
        terrain: number;
        perfHUD: string;
        locationX: number;
        locationY: number;
        locationZ: number;
        serverLocationX: number;
        serverLocationY: number;
        serverLocationZ: number;
        facing: number;
        velocityX: number;
        velocityY: number;
        velocityZ: number;
        speed: number;
        horizontalSpeed: number;
        velFacing: number;
        downCollisionAngle: number;
        terrainCollisionAngle: number;
        OnConsoleText(c: (text: string) => void): void;
        ConsoleCommand(body: string): void;
        Connect(host: string, port: string, character: string, webAPIHost: string): void;
        OnLogMessage(c: (category: string, level: number, time: string, process: number, thread: number, message: string) => void): void;
    }
    export default clientInterface;
}

declare module '__cu-core/client' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import clientInterface from '__cu-core/clientInterface';
    let client: clientInterface;
    export default client;
}

declare module '__cu-core/constants/abilityTags' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http//mozilla.org/MPL/2.0/.
      */
    enum abilityTags {
        SYSTEM = 0,
        NONAGGRESSIVE = 1,
        NONINTERACTABLE = 2,
        NOMAGIC = 3,
        WEAPON = 4,
        STYLE = 5,
        SPEED = 6,
        POTENTIAL = 7,
        TARGETING = 8,
        VOICE = 9,
        SHOUT = 10,
        INFLECTION = 11,
        AIR = 12,
        EARTH = 13,
        FIRE = 14,
        WATER = 15,
        BLAST = 16,
        LAVA = 17,
        MUD = 18,
        SAND = 19,
        STEAM = 20,
        SPRAY = 21,
        HEALING = 22,
        RESTORATION = 23,
        LIFEDRAIN = 24,
        SWIFTNESS = 25,
        DISPLACEMENT = 26,
        SELF = 27,
        DIRECT = 28,
        TOUCH = 29,
        DART = 30,
        BALL = 31,
        CLOUD = 32,
        FOUNTAIN = 33,
        WALL = 34,
        FIELD = 35,
        WAVE = 36,
        POOL = 37,
        CONE = 38,
        RUNE = 39,
        SHAPE = 40,
        RANGE = 41,
        SIZE = 42,
        INFUSION = 43,
        FOCUS = 44,
        BLOCKING = 45,
        COUNTERATTACK = 46,
        UNBLOCKABLE = 47,
        TESTTAGA = 48,
        TESTTAGB = 49,
        TESTTAGC = 50,
        TESTTAGD = 51,
        TESTTAGE = 52,
        COUNT = 53,
    }
    export default abilityTags;
}

declare module '__cu-core/constants/archetype' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum archetype {
        NONE = -1,
        FIREMAGE = 0,
        EARTHMAGE = 1,
        WATERMAGE = 2,
        FIGHTER = 3,
        HEALER = 4,
        MELEECOMBATTEST = 5,
        ARCHERTEST = 6,
    }
    export default archetype;
}

declare module '__cu-core/constants/buildUIMode' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum buildUIMode {
        NOTBUILDING = 0,
        PLACINGPHANTOM = 1,
        PHANTOMPLACED = 2,
        SELECTINGBLOCK = 4,
        BLOCKSELECTED = 8,
    }
    export default buildUIMode;
}

declare module '__cu-core/constants/channelId' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum channelId {
        HATCHERY = 4,
        WYRMLING = 10,
    }
    export default channelId;
}

declare module '__cu-core/constants/dxKeyCodes' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum dxKeyCodes {
        'ESCAPE' = 1,
        'ONE' = 2,
        'TWO' = 3,
        'THREE' = 4,
        'FOUR' = 5,
        'FIVE' = 6,
        'SIX' = 7,
        'SEVEN' = 8,
        'EIGHT' = 9,
        'NINE' = 10,
        'ZERO' = 11,
        '-' = 12,
        '=' = 13,
        'BACKSPACE' = 14,
        'TAB' = 15,
        'Q' = 16,
        'W' = 17,
        'E' = 18,
        'R' = 19,
        'T' = 20,
        'Y' = 21,
        'U' = 22,
        'I' = 23,
        'O' = 24,
        'P' = 25,
        'LBRACKET' = 26,
        'RBRACKET' = 27,
        'RETURN' = 28,
        'LCONTROL' = 29,
        'A' = 30,
        'S' = 31,
        'D' = 32,
        'F' = 33,
        'G' = 34,
        'H' = 35,
        'J' = 36,
        'K' = 37,
        'L' = 38,
        'SEMICOLON' = 39,
        'APOSTROPHE' = 40,
        '`' = 41,
        'LSHIFT' = 42,
        'BACKSLASH' = 43,
        'Z' = 44,
        'X' = 45,
        'C' = 46,
        'V' = 47,
        'B' = 48,
        'N' = 49,
        'M' = 50,
        'COMMA' = 51,
        'PERIOD' = 52,
        'SLASH' = 53,
        'RSHIFT' = 54,
        'MULTIPLY' = 55,
        'LALT' = 56,
        'SPACE' = 57,
        'CAPSLOCK' = 58,
        'F1' = 59,
        'F2' = 60,
        'F3' = 61,
        'F4' = 62,
        'F5' = 63,
        'F6' = 64,
        'F7' = 65,
        'F8' = 66,
        'F9' = 67,
        'F10' = 68,
        'NUMLOCK' = 69,
        'SCROLLLOCK' = 70,
        'NUMPAD7' = 71,
        'NUMPAD8' = 72,
        'NUMPAD9' = 73,
        'NUMPAD-' = 74,
        'NUMPAD4' = 75,
        'NUMPAD5' = 76,
        'NUMPAD6' = 77,
        'NUMPAD+' = 78,
        'NUMPAD1' = 79,
        'NUMPAD2' = 80,
        'NUMPAD3' = 81,
        'NUMPAD0' = 82,
        'NUMPAD.' = 83,
        'OEM_102' = 86,
        'F11' = 87,
        'F12' = 88,
        'F13' = 100,
        'F14' = 101,
        'F15' = 102,
        'KANA' = 112,
        'ABNT_C1' = 115,
        'CONVERT' = 121,
        'NOCONVERT' = 123,
        'YEN' = 125,
        'ABNT_C2' = 126,
        'NUMPADEQUALS' = 141,
        'PREVTRACK' = 144,
        'AT' = 145,
        'COLON' = 146,
        'UNDERLINE' = 147,
        'KANJI' = 148,
        'STOP' = 149,
        'AX' = 150,
        'UNLABELED' = 151,
        'NEXTTRACK' = 153,
        'NUMPADENTER' = 156,
        'RCONTROL' = 157,
        'MUTE' = 160,
        'CALCULATOR' = 161,
        'PLAYPAUSE' = 162,
        'MEDIASTOP' = 164,
        'VOLUMEDOWN' = 174,
        'VOLUMEUP' = 176,
        'WEBHOME' = 178,
        'NUMPAD,' = 179,
        'NUMPAD/' = 181,
        'SYSRQ' = 183,
        'RALT' = 184,
        'PAUSE' = 197,
        'HOME ' = 199,
        'UP' = 200,
        'PAGEUP' = 201,
        'LEFT' = 203,
        'RIGHT' = 205,
        'END' = 207,
        'DOWN' = 208,
        'PAGEDN' = 209,
        'INSERT' = 210,
        'DELETE' = 211,
        'LWIN' = 219,
        'RWIN' = 220,
        'APPS' = 221,
        'POWER' = 222,
        'SLEEP' = 223,
        'WAKE' = 227,
        'WEBSEARCH' = 229,
        'WEBFAVORITES' = 230,
        'WEBREFRESH' = 231,
        'WEBSTOP' = 232,
        'WEBFORWARD' = 233,
        'WEBBACK' = 234,
        'MYCOMPUTER' = 235,
        'MAIL' = 236,
        'MEDIASELECT' = 237,
    }
    export default dxKeyCodes;
}

declare module '__cu-core/constants/emotes' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum emotes {
        DANCE1 = 0,
        DANCE2 = 1,
        WAVE1 = 2,
        WAVE2 = 3,
        STOP = 4,
        NONE = 5,
    }
    export default emotes;
}

declare module '__cu-core/constants/jsKeyCodes' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum jsKeyCodes {
        'BACKSPACE' = 8,
        'TAB' = 9,
        'ENTER' = 13,
        'SHIFT' = 16,
        'CTRL' = 17,
        'ALT' = 18,
        'PAUSE/BREAK' = 19,
        'CAPSLOCK' = 20,
        'ESC' = 27,
        'SPACE' = 32,
        'PAGEUP' = 33,
        'PAGEDOWN' = 34,
        'END' = 35,
        'HOME' = 36,
        'LEFT' = 37,
        'UP' = 38,
        'RIGHT' = 39,
        'DOWN' = 40,
        'INSERT' = 45,
        'DELETE' = 46,
        'ZERO' = 48,
        'ONE' = 49,
        'TWO' = 50,
        'THREE' = 51,
        'FOUR' = 52,
        'FIVE' = 53,
        'SIX' = 54,
        'SEVEN' = 55,
        'EIGHT' = 56,
        'NINE' = 57,
        'A' = 65,
        'B' = 66,
        'C' = 67,
        'D' = 68,
        'E' = 69,
        'F' = 70,
        'G' = 71,
        'H' = 72,
        'I' = 73,
        'J' = 74,
        'K' = 75,
        'L' = 76,
        'M' = 77,
        'N' = 78,
        'O' = 79,
        'P' = 80,
        'Q' = 81,
        'R' = 82,
        'S' = 83,
        'T' = 84,
        'U' = 85,
        'V' = 86,
        'W' = 87,
        'X' = 88,
        'Y' = 89,
        'Z' = 90,
        'WINDOWS' = 91,
        'RIGHTCLICK' = 93,
        'NUMPAD0' = 96,
        'NUMPAD1' = 97,
        'NUMPAD2' = 98,
        'NUMPAD3' = 99,
        'NUMPAD4' = 100,
        'NUMPAD5' = 101,
        'NUMPAD6' = 102,
        'NUMPAD7' = 103,
        'NUMPAD8' = 104,
        'NUMPAD9' = 105,
        'NUMPAD*' = 106,
        'NUMPAD+' = 107,
        'NUMPAD-' = 109,
        'NUMPAD.' = 110,
        'NUMPAD/' = 111,
        'F1' = 112,
        'F2' = 113,
        'F3' = 114,
        'F4' = 115,
        'F5' = 116,
        'F6' = 117,
        'F7' = 118,
        'F8' = 119,
        'F9' = 120,
        'F10' = 121,
        'F11' = 122,
        'F12' = 123,
        'NUMLOCK' = 144,
        'SCROLLLOCK' = 145,
        'MYCOMPUTER' = 182,
        'MYCALCULATOR' = 183,
        ';' = 186,
        '=' = 187,
        ',' = 188,
        '-' = 189,
        '.' = 190,
        '/' = 191,
        '`' = 192,
        '[' = 219,
        '\\' = 220,
        ']' = 221,
        '\'' = 222,
    }
    export default jsKeyCodes;
}

declare module '__cu-core/constants/jsToDXKeyCodeMap' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    const jsToDXKeyCodeMap: {
        8: number;
        9: number;
        13: number;
        16: number;
        17: number;
        18: number;
        19: number;
        20: number;
        27: number;
        32: number;
        33: number;
        34: number;
        35: number;
        36: number;
        37: number;
        38: number;
        39: number;
        40: number;
        45: number;
        46: number;
        48: number;
        49: number;
        50: number;
        51: number;
        52: number;
        53: number;
        54: number;
        55: number;
        56: number;
        57: number;
        65: number;
        66: number;
        67: number;
        68: number;
        69: number;
        70: number;
        71: number;
        72: number;
        73: number;
        74: number;
        75: number;
        76: number;
        77: number;
        78: number;
        79: number;
        80: number;
        81: number;
        82: number;
        83: number;
        84: number;
        85: number;
        86: number;
        87: number;
        88: number;
        89: number;
        90: number;
        91: number;
        92: number;
        96: number;
        97: number;
        98: number;
        99: number;
        100: number;
        101: number;
        102: number;
        103: number;
        104: number;
        105: number;
        106: number;
        107: number;
        109: number;
        110: number;
        111: number;
        112: number;
        113: number;
        114: number;
        115: number;
        116: number;
        117: number;
        118: number;
        119: number;
        120: number;
        121: number;
        122: number;
        123: number;
        144: number;
        145: number;
        0xA6: number;
        0xA7: number;
        0xA8: number;
        0xA9: number;
        0xAA: number;
        0xAB: number;
        0xAC: number;
        0xAD: number;
        0xAE: number;
        0xAF: number;
        0xB0: number;
        0xB1: number;
        0xB2: number;
        0xB3: number;
        0xB4: number;
        0xB5: number;
        186: number;
        187: number;
        188: number;
        189: number;
        190: number;
        191: number;
        192: number;
        219: number;
        220: number;
        221: number;
        222: number;
    };
    export default jsToDXKeyCodeMap;
}

declare module '__cu-core/constants/race' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum race {
        NONE = -1,
        HAMADRYAD = 1,
        LUCHORPAN = 2,
        FIRBOG = 3,
        VALKYRIE = 4,
        HELBOUND = 5,
        FROSTGIANT = 6,
        STRM = 8,
        CAITSITH = 9,
        GOLEM = 10,
        STORMRIDERT = 12,
        STORMRIDERA = 13,
        STORMRIDERV = 14,
        HUMANMALEV = 15,
        HUMANMALEA = 16,
        HUMANMALET = 17,
    }
    export default race;
}

declare module '__cu-core/constants/soundEvents' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    const soundEvents: {
        PLAY_LOADINGSCREEN: number;
        PLAY_LOADINGSCREEN_COMPLETE: number;
        PLAY_MAGIC_HEALING_BANDAGE_END: number;
        PLAY_MAGIC_HEALING_BANDAGE_START: number;
        PLAY_MAINMENU: number;
        PLAY_MUSIC_MAINMENU: number;
        PLAY_MUSIC_MAINMENU_NONSTREAMING: number;
        PLAY_UI_ABILITYCRAFTING_ADDSELECTION: number;
        PLAY_UI_ABILITYCRAFTING_BUILD: number;
        PLAY_UI_ABILITYCRAFTING_RESET: number;
        PLAY_UI_ABILITYCRAFTING_SIDEPANEL_OPEN: number;
        PLAY_UI_MENU_BANESELECT: number;
        PLAY_UI_MENU_BOONSELECT: number;
        PLAY_UI_MENU_CHARACTERSELECT_CHANGE: number;
        PLAY_UI_MENU_CREATENEWCHARACTER: number;
        PLAY_UI_MENU_GENERALCONFIRM: number;
        PLAY_UI_MENU_GENERICSELECT: number;
        PLAY_UI_MENU_PREVIEWREALM_ARTHURIAN: number;
        PLAY_UI_MENU_PREVIEWREALM_TDD: number;
        PLAY_UI_MENU_PREVIEWREALM_VIKING: number;
        PLAY_UI_MENU_SELECTREALM: number;
        PLAY_UI_MENU_SERVERSELECT: number;
        PLAY_UI_MENUSTATE_CLOSED: number;
        PLAY_UI_MENUSTATE_OPEN: number;
        PLAY_UI_SPELLBOOK_DELETESPELL: number;
        PLAY_UI_SPELLBOOK_OPEN: number;
        PLAY_UI_SPELLBOOK_PAGEFLIP_BACKWARD: number;
        PLAY_UI_SPELLBOOK_PAGEFLIP_FORWARD: number;
        PLAY_UI_SPELLBOOK_PUTAWAY: number;
        SET_STATE_CHARACTERCREATION_ATTRIBUTES: number;
        SET_STATE_CHARACTERCREATION_BOONSANDBANES: number;
        SET_STATE_CHARACTERCREATION_PREVIEW_ARTHURIAN: number;
        SET_STATE_CHARACTERCREATION_PREVIEW_TDD: number;
        SET_STATE_CHARACTERCREATION_PREVIEW_VIKING: number;
        SET_STATE_CHARACTERCREATION_RACE: number;
        SET_STATE_CHARACTERCREATION_SERVERSELECT: number;
        STOP_UI_MENU_PREVIEWREALM: number;
    };
    export default soundEvents;
}

declare module '__cu-core/constants/tagConstraintType' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    enum tagContstraintType {
        ALLOF = 0,
        ANYOF = 1,
        NONEOF = 2,
    }
    export default tagContstraintType;
}

declare module '__cu-core/constants/tags' {
    /**
        * These are the tags needed by the C++ Layer to know which build variables
        * to send to the window.
        */
    enum tags {
            KEYBIND = 2,
            INPUT = 6,
            AUDIO = 8,
    }
    export default tags;
}

declare module '__cu-core/classes/Ability' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    class Ability {
        id: string;
        icon: string;
        cooldowns: any[];
        duration: number;
        triggerTimeOffset: number;
        name: string;
        tooltip: string;
        buttons: any[];
        awaitingUpdate: {
            (a: Ability): any;
        }[];
        constructor(ability?: Ability);
        static create(): Ability;
    }
    export default Ability;
}

declare module '__cu-core/classes/Combatant' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import race from '__cu-core/constants/race';
    import archetype from '__cu-core/constants/archetype';
    class Combatant {
        name: string;
        health: number;
        maxHealth: number;
        stamina: number;
        maxStamina: number;
        constructor(combatant?: Combatant);
        setRace(race: race): void;
        setAarchetype(archetype: archetype): void;
        setName(name: string): void;
        setHealth(health: number, maxHealth: number): void;
        setStamina(stamina: number, maxStamina: number): void;
        static create(): Combatant;
    }
    export default Combatant;
}

declare module '__cu-core/classes/Player' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import Combatant from '__cu-core/classes/Combatant';
    import race from '__cu-core/constants/race';
    import archetype from '__cu-core/constants/archetype';
    class Player extends Combatant {
        race: race;
        archetype: archetype;
        constructor(character?: Player);
        setRace(race: race): void;
        setAarchetype(archetype: archetype): void;
        static create(): Player;
    }
    export default Player;
}

declare module '__cu-core/classes/Character' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import Player from '__cu-core/classes/Player';
    import Inventory from '__cu-core/classes/Inventory';
    import BanesBoons from '__cu-core/classes/BanesBoons';
    class Character extends Player {
        inventory: Inventory;
        banesboons: BanesBoons;
        strength: number;
        agility: number;
        endurance: number;
        will: number;
        resonance: number;
        dexterity: number;
        vitality: number;
        attunement: number;
        faith: number;
        eyesight: number;
        hearing: number;
        clarity: number;
        mass: number;
        presence: number;
        affinity: number;
        max_move_speed: number;
        vision: number;
        detection: number;
        carry_capacity: number;
        max_panix: number;
        panix_decay: number;
        max_hp: number;
        health_regeneration: number;
        max_stamina: number;
        stamina_regeneration: number;
        constructor(character?: Character);
        static create(): Character;
    }
    export default Character;
}

declare module '__cu-core/classes/Inventory' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    class Inventory {
        constructor(inventory?: Inventory);
        static create(): Inventory;
    }
    export default Inventory;
}

declare module '__cu-core/classes/Equip' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    import Item from '__cu-core/classes/Item';
    class Equip {
        head: Item;
        shoulder: Item;
        right_hand: Item;
        left_hand: Item;
        right_arm: Item;
        left_arm: Item;
        constructor(equip?: Equip);
        static create(): Equip;
    }
    export default Equip;
}

declare module '__cu-core/classes/Item' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    class Item {
        constructor(item?: Item);
        static create(): Item;
    }
    export default Item;
}

declare module '__cu-core/classes/BanesBoons' {
    /**
      * This Source Code Form is subject to the terms of the Mozilla Public
      * License, v. 2.0. If a copy of the MPL was not distributed with this
      * file, You can obtain one at http://mozilla.org/MPL/2.0/.
      */
    class BanesBoons {
        constructor(boonsbanes?: BanesBoons);
        static create(): BanesBoons;
    }
    export default BanesBoons;
}

