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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9BYmlsaXR5LnRzIl0sIm5hbWVzIjpbIkFiaWxpdHkiLCJBYmlsaXR5LmNvbnN0cnVjdG9yIiwiQWJpbGl0eS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQU1BLE9BQUE7QUFZRUEsYUFaRixPQUFBLEdBWW1DQTtZQUFyQkEsT0FBT0EseURBQVlBLEVBQUVBOzs4QkFabkMsT0FBQTs7QUFHRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7QUFNdEJBLFlBQUFBLENBQUFBLE9BQU9BLEdBQVVBLEVBQUVBLENBQUNBO0FBQ3BCQSxZQUFBQSxDQUFBQSxjQUFjQSxHQUE0QkEsSUFBSUEsQ0FBQ0E7QUFHN0NBLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE9BQU9BLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO0FBQzNCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUMvQkEsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDekNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxpQkFBaUJBLEdBQUdBLE9BQU9BLENBQUNBLGlCQUFpQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQy9CQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNyQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDckNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLE9BQU9BLENBQUNBLGNBQWNBLElBQUlBLElBQUlBLENBQUNBO0tBQ3REQTs7aUJBdEJILE9BQUE7O2VBd0JlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBO0FBQ3RCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTNCSCxPQUFBOzs7cUJBK0JlLE9BQU8iLCJmaWxlIjoidHMvY2xhc3Nlcy9BYmlsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmNsYXNzIEFiaWxpdHkge1xuICBpZDogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIGNvb2xkb3duczogYW55W10gPSBbXTtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgdHJpZ2dlclRpbWVPZmZzZXQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICB0b29sdGlwOiBzdHJpbmc7XG5cbiAgYnV0dG9uczogYW55W10gPSBbXTtcbiAgYXdhaXRpbmdVcGRhdGU6IHsgKGE6IEFiaWxpdHkpOiBhbnkgfVtdID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhYmlsaXR5ID0gPEFiaWxpdHk+e30pIHtcbiAgICB0aGlzLmlkID0gYWJpbGl0eS5pZCB8fCBcIlwiO1xuICAgIHRoaXMuaWNvbiA9IGFiaWxpdHkuaWNvbiB8fCBcIlwiO1xuICAgIHRoaXMuY29vbGRvd25zID0gYWJpbGl0eS5jb29sZG93bnMgfHwgW107XG4gICAgdGhpcy5kdXJhdGlvbiA9IGFiaWxpdHkuZHVyYXRpb24gfHwgMDtcbiAgICB0aGlzLnRyaWdnZXJUaW1lT2Zmc2V0ID0gYWJpbGl0eS50cmlnZ2VyVGltZU9mZnNldCB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGFiaWxpdHkubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMudG9vbHRpcCA9IGFiaWxpdHkudG9vbHRpcCB8fCBcIlwiO1xuICAgIHRoaXMuYnV0dG9ucyA9IGFiaWxpdHkuYnV0dG9ucyB8fCBbXTtcbiAgICB0aGlzLmF3YWl0aW5nVXBkYXRlID0gYWJpbGl0eS5hd2FpdGluZ1VwZGF0ZSB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBBYmlsaXR5KCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYmlsaXR5O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==