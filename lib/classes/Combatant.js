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
        key: "setArchetype",
        value: function setArchetype(archetype) {}
        /// override to support archetype
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db21iYXRhbnQudHMiXSwibmFtZXMiOlsiQ29tYmF0YW50IiwiQ29tYmF0YW50LmNvbnN0cnVjdG9yIiwiQ29tYmF0YW50LnNldFJhY2UiLCJDb21iYXRhbnQuc2V0QXJjaGV0eXBlIiwiQ29tYmF0YW50LnNldE5hbWUiLCJDb21iYXRhbnQuc2V0SGVhbHRoIiwiQ29tYmF0YW50LnNldFN0YW1pbmEiLCJDb21iYXRhbnQuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFTQSxTQUFBO0FBUUVBLGFBUkYsU0FBQSxHQVF1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBUnZDLFNBQUE7O0FBU0lDLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2pDQSxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUM3Q0E7O2lCQWRILFNBQUE7O2VBZ0JTRCxpQkFBQ0EsSUFBVUEsRUFBQUEsRUFBS0U7Ozs7ZUFDWEYsc0JBQUNBLFNBQW9CQSxFQUFBQSxFQUFNRzs7OztlQUVoQ0gsaUJBQUNBLElBQVlBLEVBQUFBO0FBQ2xCSSxnQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7U0FDbEJBOzs7ZUFFUUosbUJBQUNBLE1BQWNBLEVBQUVBLFNBQWlCQSxFQUFBQTtBQUN6Q0ssZ0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO0FBQ3JCQSxnQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7U0FDNUJBOzs7ZUFFU0wsb0JBQUNBLE9BQWVBLEVBQUVBLFVBQWtCQSxFQUFBQTtBQUM1Q00sZ0JBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0FBQ3ZCQSxnQkFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7U0FDOUJBOzs7ZUFFWU4sa0JBQUFBO0FBQ1hPLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FwQ0gsU0FBQTs7O3FCQXdDZSxTQUFTIiwiZmlsZSI6InRzL2NsYXNzZXMvQ29tYmF0YW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCByYWNlIGZyb20gJy4uL2NvbnN0YW50cy9yYWNlJztcbmltcG9ydCBhcmNoZXR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2FyY2hldHlwZSc7XG5cbmNsYXNzIENvbWJhdGFudCB7XG5cbiAgbmFtZTogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgbWF4SGVhbHRoOiBudW1iZXI7XG4gIHN0YW1pbmE6IG51bWJlcjtcbiAgbWF4U3RhbWluYTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbWJhdGFudCA9IDxDb21iYXRhbnQ+e30pIHtcbiAgICB0aGlzLm5hbWUgPSBjb21iYXRhbnQubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuaGVhbHRoID0gY29tYmF0YW50LmhlYWx0aCB8fCAwO1xuICAgIHRoaXMubWF4SGVhbHRoID0gY29tYmF0YW50Lm1heEhlYWx0aCB8fCAwO1xuICAgIHRoaXMuc3RhbWluYSA9IGNvbWJhdGFudC5zdGFtaW5hIHx8IDA7XG4gICAgdGhpcy5tYXhTdGFtaW5hID0gY29tYmF0YW50Lm1heFN0YW1pbmEgfHwgMDtcbiAgfVxuXG4gIHNldFJhY2UocmFjZTogcmFjZSkgeyB9IC8vIG92ZXJyaWRlIHRvIHN1cHBvcnQgcmFjZVxuICBzZXRBcmNoZXR5cGUoYXJjaGV0eXBlOiBhcmNoZXR5cGUpICB7IH0gLy8vIG92ZXJyaWRlIHRvIHN1cHBvcnQgYXJjaGV0eXBlXG5cbiAgc2V0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SGVhbHRoKGhlYWx0aDogbnVtYmVyLCBtYXhIZWFsdGg6IG51bWJlcikge1xuICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgIHRoaXMubWF4SGVhbHRoID0gbWF4SGVhbHRoO1xuICB9XG5cbiAgc2V0U3RhbWluYShzdGFtaW5hOiBudW1iZXIsIG1heFN0YW1pbmE6IG51bWJlcikge1xuICAgIHRoaXMuc3RhbWluYSA9IHN0YW1pbmE7XG4gICAgdGhpcy5tYXhTdGFtaW5hID0gbWF4U3RhbWluYTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ29tYmF0YW50KCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21iYXRhbnQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9