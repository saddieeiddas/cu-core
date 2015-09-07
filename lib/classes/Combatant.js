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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db21iYXRhbnQudHMiXSwibmFtZXMiOlsiQ29tYmF0YW50IiwiQ29tYmF0YW50LmNvbnN0cnVjdG9yIiwiQ29tYmF0YW50LnNldFJhY2UiLCJDb21iYXRhbnQuc2V0TmFtZSIsIkNvbWJhdGFudC5zZXRIZWFsdGgiLCJDb21iYXRhbnQuc2V0U3RhbWluYSIsIkNvbWJhdGFudC5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQVFBLFNBQUE7QUFPRUEsYUFQRixTQUFBLEdBT3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkFQdkMsU0FBQTs7QUFRSUMsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDakNBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0tBQzdDQTs7aUJBYkgsU0FBQTs7ZUFlU0QsaUJBQUNBLElBQVVBLEVBQUFBLEVBQUtFOzs7O2VBRWhCRixpQkFBQ0EsSUFBWUEsRUFBQUE7QUFDbEJHLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtTQUNsQkE7OztlQUVRSCxtQkFBQ0EsTUFBY0EsRUFBRUEsU0FBaUJBLEVBQUFBO0FBQ3pDSSxnQkFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDckJBLGdCQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtTQUM1QkE7OztlQUVTSixvQkFBQ0EsT0FBZUEsRUFBRUEsVUFBa0JBLEVBQUFBO0FBQzVDSyxnQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7QUFDdkJBLGdCQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtTQUM5QkE7OztlQUVZTCxrQkFBQUE7QUFDWE0sZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQWxDSCxTQUFBOzs7cUJBc0NlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9Db21iYXRhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IHJhY2UgZnJvbSAnLi4vY29uc3RhbnRzL3JhY2UnO1xuXG5jbGFzcyBDb21iYXRhbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBtYXhIZWFsdGg6IG51bWJlcjtcbiAgc3RhbWluYTogbnVtYmVyO1xuICBtYXhTdGFtaW5hOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoY29tYmF0YW50ID0gPENvbWJhdGFudD57fSkge1xuICAgIHRoaXMubmFtZSA9IGNvbWJhdGFudC5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5oZWFsdGggPSBjb21iYXRhbnQuaGVhbHRoIHx8IDA7XG4gICAgdGhpcy5tYXhIZWFsdGggPSBjb21iYXRhbnQubWF4SGVhbHRoIHx8IDA7XG4gICAgdGhpcy5zdGFtaW5hID0gY29tYmF0YW50LnN0YW1pbmEgfHwgMDtcbiAgICB0aGlzLm1heFN0YW1pbmEgPSBjb21iYXRhbnQubWF4U3RhbWluYSB8fCAwO1xuICB9XG5cbiAgc2V0UmFjZShyYWNlOiByYWNlKSB7IH0gLy8gb3ZlcnJpZGUgdG8gc3VwcG9ydCByYWNlXG5cbiAgc2V0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SGVhbHRoKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikge1xuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgIHRoaXMubWF4SGVhbHRoID0gbWF4SGVhbHRoO1xuICB9XG5cbiAgc2V0U3RhbWluYShzdGFtaW5hOiBudW1iZXIsIG1heFN0YW1pbmE6IG51bWJlcikge1xuICAgIHRoaXMuc3RhbWluYSA9IHN0YW1pbmE7XG4gICAgdGhpcy5tYXhTdGFtaW5hID0gbWF4U3RhbWluYTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ29tYmF0YW50KCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21iYXRhbnQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9