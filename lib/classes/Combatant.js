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
        key: "setAarchetype",
        value: function setAarchetype(archetype) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db21iYXRhbnQudHMiXSwibmFtZXMiOlsiQ29tYmF0YW50IiwiQ29tYmF0YW50LmNvbnN0cnVjdG9yIiwiQ29tYmF0YW50LnNldFJhY2UiLCJDb21iYXRhbnQuc2V0QWFyY2hldHlwZSIsIkNvbWJhdGFudC5zZXROYW1lIiwiQ29tYmF0YW50LnNldEhlYWx0aCIsIkNvbWJhdGFudC5zZXRTdGFtaW5hIiwiQ29tYmF0YW50LmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBU0EsU0FBQTtBQU9FQSxhQVBGLFNBQUEsR0FPdUNBO1lBQXpCQSxTQUFTQSx5REFBY0EsRUFBRUE7OzhCQVB2QyxTQUFBOztBQVFJQyxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNqQ0EsWUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FDN0NBOztpQkFiSCxTQUFBOztlQWVTRCxpQkFBQ0EsSUFBVUEsRUFBQUEsRUFBS0U7Ozs7ZUFDVkYsdUJBQUNBLFNBQW9CQSxFQUFBQSxFQUFNRzs7OztlQUVqQ0gsaUJBQUNBLElBQVlBLEVBQUFBO0FBQ2xCSSxnQkFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7U0FDbEJBOzs7ZUFFUUosbUJBQUNBLE1BQWNBLEVBQUVBLFNBQWlCQSxFQUFBQTtBQUN6Q0ssZ0JBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO0FBQ3JCQSxnQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7U0FDNUJBOzs7ZUFFU0wsb0JBQUNBLE9BQWVBLEVBQUVBLFVBQWtCQSxFQUFBQTtBQUM1Q00sZ0JBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0FBQ3ZCQSxnQkFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7U0FDOUJBOzs7ZUFFWU4sa0JBQUFBO0FBQ1hPLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FuQ0gsU0FBQTs7O3FCQXVDZSxTQUFTIiwiZmlsZSI6InRzL2NsYXNzZXMvQ29tYmF0YW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCByYWNlIGZyb20gJy4uL2NvbnN0YW50cy9yYWNlJztcbmltcG9ydCBhcmNoZXR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2FyY2hldHlwZSc7XG5cbmNsYXNzIENvbWJhdGFudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGVhbHRoOiBudW1iZXI7XG4gIG1heEhlYWx0aDogbnVtYmVyO1xuICBzdGFtaW5hOiBudW1iZXI7XG4gIG1heFN0YW1pbmE6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihjb21iYXRhbnQgPSA8Q29tYmF0YW50Pnt9KSB7XG4gICAgdGhpcy5uYW1lID0gY29tYmF0YW50Lm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmhlYWx0aCA9IGNvbWJhdGFudC5oZWFsdGggfHwgMDtcbiAgICB0aGlzLm1heEhlYWx0aCA9IGNvbWJhdGFudC5tYXhIZWFsdGggfHwgMDtcbiAgICB0aGlzLnN0YW1pbmEgPSBjb21iYXRhbnQuc3RhbWluYSB8fCAwO1xuICAgIHRoaXMubWF4U3RhbWluYSA9IGNvbWJhdGFudC5tYXhTdGFtaW5hIHx8IDA7XG4gIH1cblxuICBzZXRSYWNlKHJhY2U6IHJhY2UpIHsgfSAvLyBvdmVycmlkZSB0byBzdXBwb3J0IHJhY2VcbiAgc2V0QWFyY2hldHlwZShhcmNoZXR5cGU6IGFyY2hldHlwZSkgIHsgfSAvLy8gb3ZlcnJpZGUgdG8gc3VwcG9ydCBhcmNoZXR5cGVcblxuICBzZXROYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIsIG1heEhlYWx0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gIH1cblxuICBzZXRTdGFtaW5hKHN0YW1pbmE6IG51bWJlciwgbWF4U3RhbWluYTogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGFtaW5hID0gc3RhbWluYTtcbiAgICB0aGlzLm1heFN0YW1pbmEgPSBtYXhTdGFtaW5hO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDb21iYXRhbnQoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJhdGFudDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=