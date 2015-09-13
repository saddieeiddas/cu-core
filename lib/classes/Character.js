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
        this.banes = character.banes || [];
        this.banes = character.boons || [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7OztBQWMxQyxDQUFDO0FBUUQsQ0FBQztBQWFELENBQUM7O0lBSUYsU0FBQTtjQUFBLFNBQUE7O0FBYUVBLGFBYkYsU0FBQSxHQWF1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBYnZDLFNBQUE7O0FBY0lDLG1DQWRKLFNBQUEsNkNBY1VBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQWlCQSxFQUFFQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBaUJBLEVBQUVBLENBQUNBOzs7Ozs7QUFRaERBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoRUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQzFEQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwRUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0RUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNURBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRWxFQSxZQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwRUEsWUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQzlEQSxZQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0RUEsWUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFdEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFlBQVlBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO0FBQzFFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM5REEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLGFBQWFBLElBQUlBLENBQUNBLENBQUNBO0FBQzVFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsRUEsWUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdEVBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO0FBQzVEQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxrQkFBa0JBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLGtCQUFrQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdEZBLFlBQUlBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RFQSxZQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FFekZBOztpQkF0REgsU0FBQTs7ZUF3RGVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBM0RILFNBQUE7OztxQkErRGUsU0FBUyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vSW52ZW50b3J5JztcbmltcG9ydCBFcXVpcHBlZEl0ZW1zIGZyb20gJy4vRXF1aXBwZWRJdGVtcyc7XG5pbXBvcnQgQmFuZUJvb24gZnJvbSAnLi9CYW5lQm9vbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbWFyeVN0YXRzIHtcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgYWdpbGl0eTogbnVtYmVyO1xuICBlbmR1cmFuY2U6IG51bWJlcjtcbiAgd2lsbDogbnVtYmVyO1xuICByZXNvbmFuY2U6IG51bWJlcjtcbiAgZGV4dGVyaXR5OiBudW1iZXI7XG4gIHZpdGFsaXR5OiBudW1iZXI7XG4gIGF0dHVuZW1lbnQ6IG51bWJlcjtcbiAgZmFpdGg6IG51bWJlcjtcbiAgZXllc2lnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vjb25kYXJ5U3RhdHMge1xuICBoZWFyaW5nOiBudW1iZXI7XG4gIGNsYXJpdHk6IG51bWJlcjtcbiAgbWFzczogbnVtYmVyO1xuICBwcmVzZW5jZTogbnVtYmVyO1xuICBhZmZpbml0eTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZXJpdmVkU3RhdHMge1xuICBtYXhNb3ZlU3BlZWQ6IG51bWJlcjtcbiAgdmlzaW9uOiBudW1iZXI7XG4gIGRldGVjdGlvbjogbnVtYmVyO1xuICBjYXJyeUNhcGFjaXR5OiBudW1iZXI7XG4gIG1heFBhbmljOiBudW1iZXI7XG4gIHBhbml4RGVjYXk6IG51bWJlcjtcbiAgbWF4SHA6IG51bWJlcjtcbiAgaGVhbHRoUmVnZW5lcmF0aW9uOiBudW1iZXI7XG4gIG1heFN0YW1pbmE6IG51bWJlcjtcbiAgc3RhbWluYVJlZ2VuZXJhdGlvbjogbnVtYmVyO1xufTtcblxuXG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIFBsYXllcntcblxuICBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgYmFuZXM6IEJhbmVCb29uW107XG4gIGJvb25zOiBCYW5lQm9vbltdO1xuICBlcXVpcHBlZEl0ZW1zOiBFcXVpcHBlZEl0ZW1zO1xuXG4gIHByaW1hcnlTdGF0czogUHJpbWFyeVN0YXRzO1xuICBzZWNvbmRhcnlTdGF0czogU2Vjb25kYXJ5U3RhdHM7XG4gIGRlcml2ZWRTdGF0czogRGVyaXZlZFN0YXRzO1xuXG5cblxuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIgPSA8Q2hhcmFjdGVyPnt9KSB7XG4gICAgc3VwZXIoY2hhcmFjdGVyKVxuICAgIHRoaXMuaW52ZW50b3J5ID0gY2hhcmFjdGVyLmludmVudG9yeSB8fCBuZXcgSW52ZW50b3J5KCk7XG4gICAgdGhpcy5lcXVpcHBlZEl0ZW1zID0gY2hhcmFjdGVyLmVxdWlwcGVkSXRlbXMgfHwgbmV3IEVxdWlwcGVkSXRlbXMoKTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJhbmVzIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJvb25zIHx8ICA8QmFuZUJvb25bXT5bXTtcblxuICAgIC8qXG4gICAgdGhpcy5wcmltYXJ5U3RhdHMgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzIHx8ICA8UHJpbWFyeVN0YXRzPnt9O1xuICAgIHRoaXMuc2Vjb25kYXJ5U3RhdHMgPSBjaGFyYWN0ZXIuc2Vjb25kYXJ5U3RhdHMgfHwgIDxTZWNvbmRhcnlTdGF0cz57fTtcbiAgICB0aGlzLmRlcml2ZWRTdGF0cyA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMgfHwgIDxEZXJpdmVkU3RhdHM+e307XG4gICAgKi9cblxuICAgIHRoaXMucHJpbWFyeVN0YXRzLnN0cmVuZ3RoID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy5zdHJlbmd0aCB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLmFnaWxpdHkgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLmFnaWxpdHkgfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy5lbmR1cmFuY2UgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLmVuZHVyYW5jZSB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLndpbGwgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLndpbGwgfHwgMDtcbiAgICB0aGlzLnByaW1hcnlTdGF0cy5yZXNvbmFuY2UgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLnJlc29uYW5jZSB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLmRleHRlcml0eSA9IGNoYXJhY3Rlci5wcmltYXJ5U3RhdHMuZGV4dGVyaXR5IHx8IDA7XG4gICAgdGhpcy5wcmltYXJ5U3RhdHMudml0YWxpdHkgPSBjaGFyYWN0ZXIucHJpbWFyeVN0YXRzLnZpdGFsaXR5IHx8IDA7XG4gICAgdGhpcy5wcmltYXJ5U3RhdHMuYXR0dW5lbWVudCA9IGNoYXJhY3Rlci5wcmltYXJ5U3RhdHMuYXR0dW5lbWVudCB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLmZhaXRoID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy5mYWl0aCB8fCAwO1xuICAgIHRoaXMucHJpbWFyeVN0YXRzLmV5ZXNpZ2h0ID0gY2hhcmFjdGVyLnByaW1hcnlTdGF0cy5leWVzaWdodCB8fCAwO1xuXG4gICAgdGhpcy5zZWNvbmRhcnlTdGF0cy5oZWFyaW5nID0gY2hhcmFjdGVyLnNlY29uZGFyeVN0YXRzLmhlYXJpbmcgfHwgMDtcbiAgICB0aGlzLnNlY29uZGFyeVN0YXRzLmNsYXJpdHkgPSBjaGFyYWN0ZXIuc2Vjb25kYXJ5U3RhdHMuY2xhcml0eSB8fCAwO1xuICAgIHRoaXMuc2Vjb25kYXJ5U3RhdHMubWFzcyA9IGNoYXJhY3Rlci5zZWNvbmRhcnlTdGF0cy5tYXNzIHx8IDA7XG4gICAgdGhpcy5zZWNvbmRhcnlTdGF0cy5wcmVzZW5jZSA9IGNoYXJhY3Rlci5zZWNvbmRhcnlTdGF0cy5wcmVzZW5jZSB8fCAwO1xuICAgIHRoaXMuc2Vjb25kYXJ5U3RhdHMuYWZmaW5pdHkgPSBjaGFyYWN0ZXIuc2Vjb25kYXJ5U3RhdHMuYWZmaW5pdHkgfHwgMDtcblxuICAgIHRoaXMuZGVyaXZlZFN0YXRzLm1heE1vdmVTcGVlZCA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMubWF4TW92ZVNwZWVkIHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMudmlzaW9uID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy52aXNpb24gfHwgMDtcbiAgICB0aGlzLmRlcml2ZWRTdGF0cy5kZXRlY3Rpb24gPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzLmRldGVjdGlvbiB8fCAwO1xuICAgIHRoaXMuZGVyaXZlZFN0YXRzLmNhcnJ5Q2FwYWNpdHkgPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzLmNhcnJ5Q2FwYWNpdHkgfHwgMDtcbiAgICB0aGlzLmRlcml2ZWRTdGF0cy5tYXhQYW5pYyA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMubWF4UGFuaWMgfHwgMDtcbiAgICB0aGlzLmRlcml2ZWRTdGF0cy5wYW5peERlY2F5ID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy5wYW5peERlY2F5IHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMubWF4SHAgPSBjaGFyYWN0ZXIuZGVyaXZlZFN0YXRzLm1heEhwIHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMuaGVhbHRoUmVnZW5lcmF0aW9uID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy5oZWFsdGhSZWdlbmVyYXRpb24gfHwgMDtcbiAgICB0aGlzLmRlcml2ZWRTdGF0cy5tYXhTdGFtaW5hID0gY2hhcmFjdGVyLmRlcml2ZWRTdGF0cy5tYXhTdGFtaW5hIHx8IDA7XG4gICAgdGhpcy5kZXJpdmVkU3RhdHMuc3RhbWluYVJlZ2VuZXJhdGlvbiA9IGNoYXJhY3Rlci5kZXJpdmVkU3RhdHMuc3RhbWluYVJlZ2VuZXJhdGlvbiB8fCAwO1xuICAgIFxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDaGFyYWN0ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=