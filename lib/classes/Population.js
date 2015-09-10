/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Population = (function () {
    function Population() {
        var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Population);

        // Population limit
        this.max = data.max || 0;
        // Current Population by realm
        this.arthurians = data.arthurians || 0;
        this.tuathaDeDanann = data.tuathaDeDanann || 0;
        this.vikings = data.vikings || 0;
    }

    _createClass(Population, null, [{
        key: "create",
        value: function create() {
            var a = new Population();
            return a;
        }
    }]);

    return Population;
})();

exports["default"] = Population;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Qb3B1bGF0aW9uLnRzIl0sIm5hbWVzIjpbIlBvcHVsYXRpb24iLCJQb3B1bGF0aW9uLmNvbnN0cnVjdG9yIiwiUG9wdWxhdGlvbi5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUtBLFVBQUE7QUFPRUEsYUFQRixVQUFBLEdBT21DQTtZQUFyQkEsSUFBSUEseURBQWVBLEVBQUVBOzs4QkFQbkMsVUFBQTs7O0FBVUlDLFlBQUlBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBOztBQUd6QkEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQy9DQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUNsQ0E7O2lCQWhCSCxVQUFBOztlQWtCZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtBQUN6QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FyQkgsVUFBQTs7O3FCQXlCZSxVQUFVIiwiZmlsZSI6InRzL2NsYXNzZXMvUG9wdWxhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cclxuICovXHJcbmNsYXNzIFBvcHVsYXRpb24ge1xyXG5cclxuICBhcnRodXJpYW5zOiBudW1iZXI7XHJcbiAgdHVhdGhhRGVEYW5hbm46IG51bWJlcjtcclxuICB2aWtpbmdzOiBudW1iZXI7XHJcbiAgbWF4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGEgPSA8UG9wdWxhdGlvbj57fSkge1xyXG5cclxuICAgIC8vIFBvcHVsYXRpb24gbGltaXRcclxuICAgIHRoaXMubWF4ID0gZGF0YS5tYXggfHwgMDtcclxuXHJcbiAgICAvLyBDdXJyZW50IFBvcHVsYXRpb24gYnkgcmVhbG1cclxuICAgIHRoaXMuYXJ0aHVyaWFucyA9IGRhdGEuYXJ0aHVyaWFucyB8fCAwO1xyXG4gICAgdGhpcy50dWF0aGFEZURhbmFubiA9IGRhdGEudHVhdGhhRGVEYW5hbm4gfHwgMDtcclxuICAgIHRoaXMudmlraW5ncyA9IGRhdGEudmlraW5ncyB8fCAwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZSgpIHtcclxuICAgIGxldCBhID0gbmV3IFBvcHVsYXRpb24oKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=