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

var Ability = (function () {
    function Ability() {
        var ability = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Ability);

        this.cooldowns = [];
        this.buttons = [];
        this.awaitingUpdate = null;
        this.id = ability.id || "";
        this.icon = ability.icon || "";
        this.cooldowns = ability.cooldowns || [];
        this.duration = ability.duration || 0;
        this.triggerTimeOffset = ability.triggerTimeOffset || 0;
        this.name = ability.name || "";
        this.tooltip = ability.tooltip || "";
        this.buttons = ability.buttons || [];
        this.awaitingUpdate = ability.awaitingUpdate || null;
    }

    _createClass(Ability, null, [{
        key: "create",
        value: function create() {
            var a = new Ability();
            return a;
        }
    }]);

    return Ability;
})();

exports["default"] = Ability;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9BYmlsaXR5LnRzIl0sIm5hbWVzIjpbIkFiaWxpdHkiLCJBYmlsaXR5LmNvbnN0cnVjdG9yIiwiQWJpbGl0eS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQU1BLE9BQUE7QUFZRUEsYUFaRixPQUFBLEdBWW1DQTtZQUFyQkEsT0FBT0EseURBQVlBLEVBQUVBOzs4QkFabkMsT0FBQTs7QUFHRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFNdEJBLFlBQUFBLENBQUFBLE9BQU9BLEdBQVVBLEVBQUVBLENBQUNBO0FBQ3BCQSxZQUFBQSxDQUFBQSxjQUFjQSxHQUE0QkEsSUFBSUEsQ0FBQ0E7QUFHN0NBLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE9BQU9BLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO0FBQzNCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUMvQkEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDekNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxpQkFBaUJBLEdBQUdBLE9BQU9BLENBQUNBLGlCQUFpQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNyQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDckNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLE9BQU9BLENBQUNBLGNBQWNBLElBQUlBLElBQUlBLENBQUNBO0tBQ3REQTs7aUJBdEJILE9BQUE7O2VBd0JlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBO0FBQ3RCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTNCSCxPQUFBOzs7cUJBK0JlLE9BQU8iLCJmaWxlIjoidHMvY2xhc3Nlcy9BYmlsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcclxuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xyXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxyXG4gKi9cclxuXHJcbmNsYXNzIEFiaWxpdHkge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIGNvb2xkb3duczogYW55W10gPSBbXTtcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIHRyaWdnZXJUaW1lT2Zmc2V0OiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvb2x0aXA6IHN0cmluZztcclxuXHJcbiAgYnV0dG9uczogYW55W10gPSBbXTtcclxuICBhd2FpdGluZ1VwZGF0ZTogeyAoYTogQWJpbGl0eSk6IGFueSB9W10gPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhYmlsaXR5ID0gPEFiaWxpdHk+e30pIHtcclxuICAgIHRoaXMuaWQgPSBhYmlsaXR5LmlkIHx8IFwiXCI7XHJcbiAgICB0aGlzLmljb24gPSBhYmlsaXR5Lmljb24gfHwgXCJcIjtcclxuICAgIHRoaXMuY29vbGRvd25zID0gYWJpbGl0eS5jb29sZG93bnMgfHwgW107XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gYWJpbGl0eS5kdXJhdGlvbiB8fCAwO1xyXG4gICAgdGhpcy50cmlnZ2VyVGltZU9mZnNldCA9IGFiaWxpdHkudHJpZ2dlclRpbWVPZmZzZXQgfHwgMDtcclxuICAgIHRoaXMubmFtZSA9IGFiaWxpdHkubmFtZSB8fCBcIlwiO1xyXG4gICAgdGhpcy50b29sdGlwID0gYWJpbGl0eS50b29sdGlwIHx8IFwiXCI7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBhYmlsaXR5LmJ1dHRvbnMgfHwgW107XHJcbiAgICB0aGlzLmF3YWl0aW5nVXBkYXRlID0gYWJpbGl0eS5hd2FpdGluZ1VwZGF0ZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZSgpIHtcclxuICAgIGxldCBhID0gbmV3IEFiaWxpdHkoKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFiaWxpdHk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=