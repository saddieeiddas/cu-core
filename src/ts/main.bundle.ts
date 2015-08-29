/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as library from './main';

// interface to allow us to bind library to window
interface WindowInterface extends Window {
    CuCore: any;
}

// declare window implements WindowInterface
declare var window: WindowInterface;

// bind library to window
window.CuCore = library;
