'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Player2 = require('./Player');

var _Player3 = _interopRequireDefault(_Player2);

var _Inventory = require('./Inventory');

var _Inventory2 = _interopRequireDefault(_Inventory);

var _EquippedItems = require('./EquippedItems');

var _EquippedItems2 = _interopRequireDefault(_EquippedItems);

var _SpellBook = require('./SpellBook');

var _SpellBook2 = _interopRequireDefault(_SpellBook);

;
;
;

var Character = (function (_Player) {
    _inherits(Character, _Player);

    function Character() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Character);

        _get(Object.getPrototypeOf(Character.prototype), 'constructor', this).call(this, character);
        this.inventory = character.inventory || new _Inventory2['default']();
        this.equippedItems = character.equippedItems || new _EquippedItems2['default']();
        this.spellBook = character.spellBook || new _SpellBook2['default']();
        this.banes = character.banes || [];
        this.banes = character.boons || [];
        this.group = character.group || null;
        /*
        this.primaryStats = character.primaryStats ||  <PrimaryStats>{};
        this.secondaryStats = character.secondaryStats ||  <SecondaryStats>{};
        this.derivedStats = character.derivedStats ||  <DerivedStats>{};
        */
        this.primaryStats.strength = character.primaryStats.strength || 0;
        this.primaryStats.agility = character.primaryStats.agility || 0;
        this.primaryStats.endurance = character.primaryStats.endurance || 0;
        this.primaryStats.will = character.primaryStats.will || 0;
        this.primaryStats.resonance = character.primaryStats.resonance || 0;
        this.primaryStats.dexterity = character.primaryStats.dexterity || 0;
        this.primaryStats.vitality = character.primaryStats.vitality || 0;
        this.primaryStats.attunement = character.primaryStats.attunement || 0;
        this.primaryStats.faith = character.primaryStats.faith || 0;
        this.primaryStats.eyesight = character.primaryStats.eyesight || 0;
        this.secondaryStats.hearing = character.secondaryStats.hearing || 0;
        this.secondaryStats.clarity = character.secondaryStats.clarity || 0;
        this.secondaryStats.mass = character.secondaryStats.mass || 0;
        this.secondaryStats.presence = character.secondaryStats.presence || 0;
        this.secondaryStats.affinity = character.secondaryStats.affinity || 0;
        this.derivedStats.maxMoveSpeed = character.derivedStats.maxMoveSpeed || 0;
        this.derivedStats.vision = character.derivedStats.vision || 0;
        this.derivedStats.detection = character.derivedStats.detection || 0;
        this.derivedStats.carryCapacity = character.derivedStats.carryCapacity || 0;
        this.derivedStats.maxPanic = character.derivedStats.maxPanic || 0;
        this.derivedStats.panixDecay = character.derivedStats.panixDecay || 0;
        this.derivedStats.maxHp = character.derivedStats.maxHp || 0;
        this.derivedStats.healthRegeneration = character.derivedStats.healthRegeneration || 0;
        this.derivedStats.maxStamina = character.derivedStats.maxStamina || 0;
        this.derivedStats.staminaRegeneration = character.derivedStats.staminaRegeneration || 0;
    }

    _createClass(Character, null, [{
        key: 'create',
        value: function create() {
            var a = new Character();
            return a;
        }
    }]);

    return Character;
})(_Player3['default']);

exports['default'] = Character;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7Ozt5QkFFckIsYUFBYTs7OztBQWVsQyxDQUFDO0FBUUQsQ0FBQztBQWFELENBQUM7O0lBSUYsU0FBQTtjQUFBLFNBQUE7O0FBZUVBLGFBZkYsU0FBQSxHQWV1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBZnZDLFNBQUE7O0FBZ0JJQyxtQ0FoQkosU0FBQSw2Q0FnQlVBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLDRCQUFlQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBaUJBLEVBQUVBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFpQkEsRUFBRUEsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUtBLElBQUlBLENBQUNBOzs7Ozs7QUFTdENBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoRUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQzFEQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwRUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0RUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNURBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRWxFQSxZQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwRUEsWUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQzlEQSxZQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0RUEsWUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFdEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFlBQVlBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO0FBQzFFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM5REEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLGFBQWFBLElBQUlBLENBQUNBLENBQUNBO0FBQzVFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsRUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO0FBQzVEQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxrQkFBa0JBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLGtCQUFrQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdEZBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FFekZBOztpQkEzREgsU0FBQTs7ZUE2RGVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBaEVILFNBQUE7OztxQkFvRWUsU0FBUyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vSW52ZW50b3J5JztcbmltcG9ydCBFcXVpcHBlZEl0ZW1zIGZyb20gJy4vRXF1aXBwZWRJdGVtcyc7XG5pbXBvcnQgQmFuZUJvb24gZnJvbSAnLi9CYW5lQm9vbic7XG5pbXBvcnQgU3BlbGxCb29rIGZyb20gJy4vU3BlbGxCb29rJztcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW1hcnlTdGF0cyB7XG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGFnaWxpdHk6IG51bWJlcjtcbiAgZW5kdXJhbmNlOiBudW1iZXI7XG4gIHdpbGw6IG51bWJlcjtcbiAgcmVzb25hbmNlOiBudW1iZXI7XG4gIGRleHRlcml0eTogbnVtYmVyO1xuICB2aXRhbGl0eTogbnVtYmVyO1xuICBhdHR1bmVtZW50OiBudW1iZXI7XG4gIGZhaXRoOiBudW1iZXI7XG4gIGV5ZXNpZ2h0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY29uZGFyeVN0YXRzIHtcbiAgaGVhcmluZzogbnVtYmVyO1xuICBjbGFyaXR5OiBudW1iZXI7XG4gIG1hc3M6IG51bWJlcjtcbiAgcHJlc2VuY2U6IG51bWJlcjtcbiAgYWZmaW5pdHk6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVyaXZlZFN0YXRzIHtcbiAgbWF4TW92ZVNwZWVkOiBudW1iZXI7XG4gIHZpc2lvbjogbnVtYmVyO1xuICBkZXRlY3Rpb246IG51bWJlcjtcbiAgY2FycnlDYXBhY2l0eTogbnVtYmVyO1xuICBtYXhQYW5pYzogbnVtYmVyO1xuICBwYW5peERlY2F5OiBudW1iZXI7XG4gIG1heEhwOiBudW1iZXI7XG4gIGhlYWx0aFJlZ2VuZXJhdGlvbjogbnVtYmVyO1xuICBtYXhTdGFtaW5hOiBudW1iZXI7XG4gIHN0YW1pbmFSZWdlbmVyYXRpb246IG51bWJlcjtcbn07XG5cblxuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBQbGF5ZXJ7XG5cbiAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG4gIGJhbmVzOiBCYW5lQm9vbltdO1xuICBib29uczogQmFuZUJvb25bXTtcbiAgZXF1aXBwZWRJdGVtczogRXF1aXBwZWRJdGVtcztcbiAgc3BlbGxCb29rOiBTcGVsbEJvb2s7XG4gIGdyb3VwOiBHcm91cDtcblxuICBwcmltYXJ5U3RhdHM6IFByaW1hcnlTdGF0cztcbiAgc2Vjb25kYXJ5U3RhdHM6IFNlY29uZGFyeVN0YXRzO1xuICBkZXJpdmVkU3RhdHM6IERlcml2ZWRTdGF0cztcblxuXG5cbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyID0gPENoYXJhY3Rlcj57fSkge1xuICAgIHN1cGVyKGNoYXJhY3RlcilcbiAgICB0aGlzLmludmVudG9yeSA9IGNoYXJhY3Rlci5pbnZlbnRvcnkgfHwgbmV3IEludmVudG9yeSgpO1xuICAgIHRoaXMuZXF1aXBwZWRJdGVtcyA9IGNoYXJhY3Rlci5lcXVpcHBlZEl0ZW1zIHx8IG5ldyBFcXVpcHBlZEl0ZW1zKCk7XG4gICAgdGhpcy5zcGVsbEJvb2sgPSBjaGFyYWN0ZXIuc3BlbGxCb29rIHx8IG5ldyBTcGVsbEJvb2soKTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJhbmVzIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJvb25zIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmdyb3VwID0gY2hhcmFjdGVyLmdyb3VwIHx8ICBudWxsO1xuXG5cbiAgICAvKlxuICAgIHRoaXMucHJpbWFyeVN0YXRzID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cyB8fCAgPFByaW1hcnlTdGF0cz57fTtcbiAgICB0aGlzLnNlY29uZGFyeVN0YXRzID0gY2hhcmFjdGVyLnNlY29uZGFyeVN0YXRzIHx8ICA8U2Vjb25kYXJ5U3RhdHM+e307XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMgPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzIHx8ICA8RGVyaXZlZFN0YXRzPnt9O1xuICAgICovXG5cbiAgICB0aGlzLnByaW1hcnlTdGF0cy5zdHJlbmd0aCA9IGNoYXJhY3Rlci5wcmltYXJ5U3RhdHMuc3RyZW5ndGggfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy5hZ2lsaXR5ID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy5hZ2lsaXR5IHx8IDA7XG4gICAgdGhpcy5wcmltYXJ5U3RhdHMuZW5kdXJhbmNlID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy5lbmR1cmFuY2UgfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy53aWxsID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy53aWxsIHx8IDA7XG4gICAgdGhpcy5wcmltYXJ5U3RhdHMucmVzb25hbmNlID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy5yZXNvbmFuY2UgfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy5kZXh0ZXJpdHkgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLmRleHRlcml0eSB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLnZpdGFsaXR5ID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy52aXRhbGl0eSB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLmF0dHVuZW1lbnQgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLmF0dHVuZW1lbnQgfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy5mYWl0aCA9IGNoYXJhY3Rlci5wcmltYXJ5U3RhdHMuZmFpdGggfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy5leWVzaWdodCA9IGNoYXJhY3Rlci5wcmltYXJ5U3RhdHMuZXllc2lnaHQgfHwgMDtcblxuICAgIHRoaXMuc2Vjb25kYXJ5U3RhdHMuaGVhcmluZyA9IGNoYXJhY3Rlci5zZWNvbmRhcnlTdGF0cy5oZWFyaW5nIHx8IDA7XG4gICAgdGhpcy5zZWNvbmRhcnlTdGF0cy5jbGFyaXR5ID0gY2hhcmFjdGVyLnNlY29uZGFyeVN0YXRzLmNsYXJpdHkgfHwgMDtcbiAgICB0aGlzLnNlY29uZGFyeVN0YXRzLm1hc3MgPSBjaGFyYWN0ZXIuc2Vjb25kYXJ5U3RhdHMubWFzcyB8fCAwO1xuICAgIHRoaXMuc2Vjb25kYXJ5U3RhdHMucHJlc2VuY2UgPSBjaGFyYWN0ZXIuc2Vjb25kYXJ5U3RhdHMucHJlc2VuY2UgfHwgMDtcbiAgICB0aGlzLnNlY29uZGFyeVN0YXRzLmFmZmluaXR5ID0gY2hhcmFjdGVyLnNlY29uZGFyeVN0YXRzLmFmZmluaXR5IHx8IDA7XG5cbiAgICB0aGlzLmRlcml2ZWRTdGF0cy5tYXhNb3ZlU3BlZWQgPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzLm1heE1vdmVTcGVlZCB8fCAwO1xuICAgIHRoaXMuZGVyaXZlZFN0YXRzLnZpc2lvbiA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMudmlzaW9uIHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMuZGV0ZWN0aW9uID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy5kZXRlY3Rpb24gfHwgMDtcbiAgICB0aGlzLmRlcml2ZWRTdGF0cy5jYXJyeUNhcGFjaXR5ID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy5jYXJyeUNhcGFjaXR5IHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMubWF4UGFuaWMgPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzLm1heFBhbmljIHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMucGFuaXhEZWNheSA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMucGFuaXhEZWNheSB8fCAwO1xuICAgIHRoaXMuZGVyaXZlZFN0YXRzLm1heEhwID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy5tYXhIcCB8fCAwO1xuICAgIHRoaXMuZGVyaXZlZFN0YXRzLmhlYWx0aFJlZ2VuZXJhdGlvbiA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMuaGVhbHRoUmVnZW5lcmF0aW9uIHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMubWF4U3RhbWluYSA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMubWF4U3RhbWluYSB8fCAwO1xuICAgIHRoaXMuZGVyaXZlZFN0YXRzLnN0YW1pbmFSZWdlbmVyYXRpb24gPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzLnN0YW1pbmFSZWdlbmVyYXRpb24gfHwgMDtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDaGFyYWN0ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=