/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var channelId_1 = require('./constants/channelId');
var defaults = {
    // CSE API - for servers ect
    cseApiUrl: 'http://api.citystateentertainment.com',
    cseApiPort: 8001,
    // GAME API - for server info, this will be merged into the single
    // api source in the future.
    hatcheryApiUrl: 'https://hatchery.camelotunchained.com',
    hatcheryApiPort: 8000,
    wyrmlingApiUrl: 'https://wyrmling.camelotunchained.com',
    wyrmlingApiPort: 8000,
    // SAMPLE API TOKEN
    // TODO: replace loginToken with API KEY system
    apiToken: '1234567890',
    // Working Channel - defaults to hatchery
    channelId: channelId_1["default"].HATCHERY
};
var CoreSettings = (function () {
    function CoreSettings(settings) {
        if (settings === void 0) { settings = {}; }
        this.cseApiUrl = settings.cseApiUrl || defaults.cseApiUrl;
        this.cseApiPort = settings.cseApiPort || defaults.cseApiPort;
        this.hatcheryApiUrl = settings.hatcheryApiUrl || defaults.hatcheryApiUrl;
        this.hatcheryApiPort = settings.hatcheryApiPort || defaults.hatcheryApiPort;
        this.wyrmlingApiUrl = settings.wyrmlingApiUrl || defaults.wyrmlingApiUrl;
        this.wyrmlingApiPort = settings.wyrmlingApiPort || defaults.wyrmlingApiPort;
        this.apiToken = settings.apiToken || defaults.apiToken;
        this.channelId = settings.channelId || defaults.channelId;
    }
    return CoreSettings;
})();
exports.__esModule = true;
exports["default"] = CoreSettings;
