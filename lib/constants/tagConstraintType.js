/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tagContstraintType;
(function (tagContstraintType) {
  tagContstraintType[tagContstraintType["ALLOF"] = 0] = "ALLOF";
  tagContstraintType[tagContstraintType["ANYOF"] = 1] = "ANYOF";
  tagContstraintType[tagContstraintType["NONEOF"] = 2] = "NONEOF";
})(tagContstraintType || (tagContstraintType = {}));
;
exports["default"] = tagContstraintType;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NvbnN0YW50cy90cy9jb25zdGFudHMvdGFnQ29uc3RyYWludFR5cGUudHMiXSwibmFtZXMiOlsidGFnQ29udHN0cmFpbnRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsSUFBSyxrQkFJSixDQUFBO0FBSkQsQ0FBQSxVQUFLLGtCQUFrQixFQUFBO0FBQ3JCQSxvQkFBQUEsQ0FBQUEsa0JBQUFBLENBQUFBLE9BQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLE9BQVNBLENBQUFBO0FBQ1RBLG9CQUFBQSxDQUFBQSxrQkFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsT0FBU0EsQ0FBQUE7QUFDVEEsb0JBQUFBLENBQUFBLGtCQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxRQUFVQSxDQUFBQTtDQUNYQSxDQUFBQSxDQUpJLGtCQUFrQixLQUFsQixrQkFBa0IsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUl0QjtBQUFBLENBQUM7cUJBRWEsa0JBQWtCIiwiZmlsZSI6InRzL2NvbnN0YW50cy90YWdDb25zdHJhaW50VHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cclxuICovXHJcblxyXG5lbnVtIHRhZ0NvbnRzdHJhaW50VHlwZSB7XHJcbiAgQUxMT0YgPSAwLFxyXG4gIEFOWU9GID0gMSxcclxuICBOT05FT0YgPSAyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFnQ29udHN0cmFpbnRUeXBlO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9