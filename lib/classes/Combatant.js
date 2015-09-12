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

var Combatant = (function () {
    function Combatant() {
        var combatant = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Combatant);

        this.name = combatant.name || "";
        this.health = combatant.health || 0;
        this.maxHealth = combatant.maxHealth || 0;
        this.stamina = combatant.stamina || 0;
        this.maxStamina = combatant.maxStamina || 0;
    }

    _createClass(Combatant, [{
        key: "setRace",
        value: function setRace(race) {}
        // override to support race
    }, {
        key: "setName",
        value: function setName(name) {
            this.name = name;
        }
    }, {
        key: "setHealth",
        value: function setHealth(health, maxHealth) {
            this.health = health;
            this.maxHealth = maxHealth;
        }
    }, {
        key: "setStamina",
        value: function setStamina(stamina, maxStamina) {
            this.stamina = stamina;
            this.maxStamina = maxStamina;
        }
    }], [{
        key: "create",
        value: function create() {
            var a = new Combatant();
            return a;
        }
    }]);

    return Combatant;
})();

exports["default"] = Combatant;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db21iYXRhbnQudHMiXSwibmFtZXMiOlsiQ29tYmF0YW50IiwiQ29tYmF0YW50LmNvbnN0cnVjdG9yIiwiQ29tYmF0YW50LnNldFJhY2UiLCJDb21iYXRhbnQuc2V0TmFtZSIsIkNvbWJhdGFudC5zZXRIZWFsdGgiLCJDb21iYXRhbnQuc2V0U3RhbWluYSIsIkNvbWJhdGFudC5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQVFBLFNBQUE7QUFPRUEsYUFQRixTQUFBLEdBT3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkFQdkMsU0FBQTs7QUFRSUMsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDakNBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0tBQzdDQTs7aUJBYkgsU0FBQTs7ZUFlU0QsaUJBQUNBLElBQVVBLEVBQUFBLEVBQUtFOzs7O2VBRWhCRixpQkFBQ0EsSUFBWUEsRUFBQUE7QUFDbEJHLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtTQUNsQkE7OztlQUVRSCxtQkFBQ0EsTUFBY0EsRUFBRUEsU0FBaUJBLEVBQUFBO0FBQ3pDSSxnQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDckJBLGdCQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtTQUM1QkE7OztlQUVTSixvQkFBQ0EsT0FBZUEsRUFBRUEsVUFBa0JBLEVBQUFBO0FBQzVDSyxnQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7QUFDdkJBLGdCQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtTQUM5QkE7OztlQUVZTCxrQkFBQUE7QUFDWE0sZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQWxDSCxTQUFBOzs7cUJBc0NlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9Db21iYXRhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xyXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXHJcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXHJcbiAqL1xyXG5cclxuaW1wb3J0IHJhY2UgZnJvbSAnLi4vY29uc3RhbnRzL3JhY2UnO1xyXG5cclxuY2xhc3MgQ29tYmF0YW50IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaGVhbHRoOiBudW1iZXI7XHJcbiAgbWF4SGVhbHRoOiBudW1iZXI7XHJcbiAgc3RhbWluYTogbnVtYmVyO1xyXG4gIG1heFN0YW1pbmE6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29tYmF0YW50ID0gPENvbWJhdGFudD57fSkge1xyXG4gICAgdGhpcy5uYW1lID0gY29tYmF0YW50Lm5hbWUgfHwgXCJcIjtcclxuICAgIHRoaXMuaGVhbHRoID0gY29tYmF0YW50LmhlYWx0aCB8fCAwO1xyXG4gICAgdGhpcy5tYXhIZWFsdGggPSBjb21iYXRhbnQubWF4SGVhbHRoIHx8IDA7XHJcbiAgICB0aGlzLnN0YW1pbmEgPSBjb21iYXRhbnQuc3RhbWluYSB8fCAwO1xyXG4gICAgdGhpcy5tYXhTdGFtaW5hID0gY29tYmF0YW50Lm1heFN0YW1pbmEgfHwgMDtcclxuICB9XHJcblxyXG4gIHNldFJhY2UocmFjZTogcmFjZSkgeyB9IC8vIG92ZXJyaWRlIHRvIHN1cHBvcnQgcmFjZVxyXG5cclxuICBzZXROYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHNldEhlYWx0aChoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xyXG4gICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XHJcbiAgfVxyXG5cclxuICBzZXRTdGFtaW5hKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YW1pbmEgPSBzdGFtaW5hO1xyXG4gICAgdGhpcy5tYXhTdGFtaW5hID0gbWF4U3RhbWluYTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUoKSB7XHJcbiAgICBsZXQgYSA9IG5ldyBDb21iYXRhbnQoKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbWJhdGFudDtcclxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==