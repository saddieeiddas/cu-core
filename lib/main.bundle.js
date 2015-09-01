/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _main = require('./main');

var library = _interopRequireWildcard(_main);

// bind library to window
window.CuCore = library;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4uYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztvQkFNeUIsUUFBUTs7SUFBckIsT0FBTzs7O0FBV25CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6InRzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xyXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXHJcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgbGlicmFyeSBmcm9tICcuL21haW4nO1xyXG5cclxuLy8gaW50ZXJmYWNlIHRvIGFsbG93IHVzIHRvIGJpbmQgbGlicmFyeSB0byB3aW5kb3dcclxuaW50ZXJmYWNlIFdpbmRvd0ludGVyZmFjZSBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBDdUNvcmU6IGFueTtcclxufVxyXG5cclxuLy8gZGVjbGFyZSB3aW5kb3cgaW1wbGVtZW50cyBXaW5kb3dJbnRlcmZhY2VcclxuZGVjbGFyZSB2YXIgd2luZG93OiBXaW5kb3dJbnRlcmZhY2U7XHJcblxyXG4vLyBiaW5kIGxpYnJhcnkgdG8gd2luZG93XHJcbndpbmRvdy5DdUNvcmUgPSBsaWJyYXJ5O1xyXG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9