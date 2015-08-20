/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * These are the tags needed by the C++ Layer to know which build variables
 * to send to the window.
 */
var tags;
(function (tags) {
    tags[tags["KEYBIND"] = 2] = "KEYBIND";
    tags[tags["INPUT"] = 6] = "INPUT";
    tags[tags["AUDIO"] = 8] = "AUDIO";
})(tags || (tags = {}));
;
exports.__esModule = true;
exports["default"] = tags;
