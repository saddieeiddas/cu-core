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

var _BanesBoons = require('./BanesBoons');

var _BanesBoons2 = _interopRequireDefault(_BanesBoons);

var Character = (function (_Player) {
    _inherits(Character, _Player);

    function Character() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Character);

        _get(Object.getPrototypeOf(Character.prototype), 'constructor', this).call(this, character);
        this.inventory = character.inventory || new _Inventory2['default']();
        this.equippeditems = character.equippeditems || new _EquippedItems2['default']();
        this.banesboons = character.banesboons || new _BanesBoons2['default']();
        this.strength = character.strength || 0;
        this.agility = character.agility || 0;
        this.endurance = character.endurance || 0;
        this.will = character.will || 0;
        this.resonance = character.resonance || 0;
        this.dexterity = character.dexterity || 0;
        this.vitality = character.vitality || 0;
        this.attunement = character.attunement || 0;
        this.faith = character.faith || 0;
        this.eyesight = character.eyesight || 0;
        this.hearing = character.hearing || 0;
        this.clarity = character.clarity || 0;
        this.mass = character.mass || 0;
        this.presence = character.presence || 0;
        this.affinity = character.affinity || 0;
        this.maxMoveSpeed = character.maxMoveSpeed || 0;
        this.vision = character.vision || 0;
        this.detection = character.detection || 0;
        this.carryCapacity = character.carryCapacity || 0;
        this.maxPanic = character.maxPanic || 0;
        this.panixDecay = character.panixDecay || 0;
        this.maxHp = character.maxHp || 0;
        this.healthRegeneration = character.healthRegeneration || 0;
        this.maxStamina = character.maxStamina || 0;
        this.staminaRegeneration = character.staminaRegeneration || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7OzswQkFDcEIsY0FBYzs7OztJQUVyQyxTQUFBO2NBQUEsU0FBQTs7QUFzQ0VBLGFBdENGLFNBQUEsR0FzQ3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkF0Q3ZDLFNBQUE7O0FBdUNJQyxtQ0F2Q0osU0FBQSw2Q0F1Q1VBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLDZCQUFnQkEsQ0FBQ0E7QUFFM0RBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRXhDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFeENBLFlBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNwQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xEQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxZQUFJQSxDQUFDQSxrQkFBa0JBLEdBQUdBLFNBQVNBLENBQUNBLGtCQUFrQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNURBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFNBQVNBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FFL0RBOztpQkF4RUgsU0FBQTs7ZUEwRWVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBN0VILFNBQUE7OztxQkFpRmUsU0FBUyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vSW52ZW50b3J5JztcbmltcG9ydCBFcXVpcHBlZEl0ZW1zIGZyb20gJy4vRXF1aXBwZWRJdGVtcyc7XG5pbXBvcnQgQmFuZXNCb29ucyBmcm9tICcuL0JhbmVzQm9vbnMnO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIFxuICBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgYmFuZXNib29uczogQmFuZXNCb29ucztcbiAgZXF1aXBwZWRpdGVtczogRXF1aXBwZWRJdGVtcztcbiAgICBcbiAgLy9QcmltYXJ5XG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGFnaWxpdHk6IG51bWJlcjtcbiAgZW5kdXJhbmNlOiBudW1iZXI7XG4gIHdpbGw6IG51bWJlcjtcbiAgcmVzb25hbmNlOiBudW1iZXI7XG4gIGRleHRlcml0eTogbnVtYmVyO1xuICB2aXRhbGl0eTogbnVtYmVyO1xuICBhdHR1bmVtZW50OiBudW1iZXI7XG4gIGZhaXRoOiBudW1iZXI7XG4gIGV5ZXNpZ2h0OiBudW1iZXI7XG4gICAgXG4gIC8vU2Vjb25kYXJ5XG4gIGhlYXJpbmc6IG51bWJlcjtcbiAgY2xhcml0eTogbnVtYmVyO1xuICBtYXNzOiBudW1iZXI7XG4gIHByZXNlbmNlOiBudW1iZXI7XG4gIGFmZmluaXR5OiBudW1iZXI7XG4gICAgXG4gIC8vRGVyaXZlZFxuICBtYXhNb3ZlU3BlZWQ6IG51bWJlcjtcbiAgdmlzaW9uOiBudW1iZXI7XG4gIGRldGVjdGlvbjogbnVtYmVyO1xuICBjYXJyeUNhcGFjaXR5OiBudW1iZXI7XG4gIG1heFBhbmljOiBudW1iZXI7XG4gIHBhbml4RGVjYXk6IG51bWJlcjtcbiAgbWF4SHA6IG51bWJlcjtcbiAgaGVhbHRoUmVnZW5lcmF0aW9uOiBudW1iZXI7XG4gIG1heFN0YW1pbmE6IG51bWJlcjtcbiAgc3RhbWluYVJlZ2VuZXJhdGlvbjogbnVtYmVyO1xuICBcblxuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIgPSA8Q2hhcmFjdGVyPnt9KSB7XG4gICAgc3VwZXIoY2hhcmFjdGVyKVxuICAgIHRoaXMuaW52ZW50b3J5ID0gY2hhcmFjdGVyLmludmVudG9yeSB8fCBuZXcgSW52ZW50b3J5KCk7XG4gICAgdGhpcy5lcXVpcHBlZGl0ZW1zID0gY2hhcmFjdGVyLmVxdWlwcGVkaXRlbXMgfHwgbmV3IEVxdWlwcGVkSXRlbXMoKTtcbiAgICB0aGlzLmJhbmVzYm9vbnMgPSBjaGFyYWN0ZXIuYmFuZXNib29ucyB8fCBuZXcgQmFuZXNCb29ucygpO1xuICAgICAgIFxuICAgIHRoaXMuc3RyZW5ndGggPSBjaGFyYWN0ZXIuc3RyZW5ndGggfHwgMDtcbiAgICB0aGlzLmFnaWxpdHkgPSBjaGFyYWN0ZXIuYWdpbGl0eSB8fCAwO1xuICAgIHRoaXMuZW5kdXJhbmNlID0gY2hhcmFjdGVyLmVuZHVyYW5jZSB8fCAwO1xuICAgIHRoaXMud2lsbCA9IGNoYXJhY3Rlci53aWxsIHx8IDA7XG4gICAgdGhpcy5yZXNvbmFuY2UgPSBjaGFyYWN0ZXIucmVzb25hbmNlIHx8IDA7XG4gICAgdGhpcy5kZXh0ZXJpdHkgPSBjaGFyYWN0ZXIuZGV4dGVyaXR5IHx8IDA7XG4gICAgdGhpcy52aXRhbGl0eSA9IGNoYXJhY3Rlci52aXRhbGl0eSB8fCAwO1xuICAgIHRoaXMuYXR0dW5lbWVudCA9IGNoYXJhY3Rlci5hdHR1bmVtZW50IHx8IDA7XG4gICAgdGhpcy5mYWl0aCA9IGNoYXJhY3Rlci5mYWl0aCB8fCAwO1xuICAgIHRoaXMuZXllc2lnaHQgPSBjaGFyYWN0ZXIuZXllc2lnaHQgfHwgMDtcbiAgICBcbiAgICB0aGlzLmhlYXJpbmcgPSBjaGFyYWN0ZXIuaGVhcmluZyB8fCAwO1xuICAgIHRoaXMuY2xhcml0eSA9IGNoYXJhY3Rlci5jbGFyaXR5IHx8IDA7XG4gICAgdGhpcy5tYXNzID0gY2hhcmFjdGVyLm1hc3MgfHwgMDtcbiAgICB0aGlzLnByZXNlbmNlID0gY2hhcmFjdGVyLnByZXNlbmNlIHx8IDA7XG4gICAgdGhpcy5hZmZpbml0eSA9IGNoYXJhY3Rlci5hZmZpbml0eSB8fCAwO1xuICAgIFxuICAgIHRoaXMubWF4TW92ZVNwZWVkID0gY2hhcmFjdGVyLm1heE1vdmVTcGVlZCB8fCAwO1xuICAgIHRoaXMudmlzaW9uID0gY2hhcmFjdGVyLnZpc2lvbiB8fCAwO1xuICAgIHRoaXMuZGV0ZWN0aW9uID0gY2hhcmFjdGVyLmRldGVjdGlvbiB8fCAwO1xuICAgIHRoaXMuY2FycnlDYXBhY2l0eSA9IGNoYXJhY3Rlci5jYXJyeUNhcGFjaXR5IHx8IDA7XG4gICAgdGhpcy5tYXhQYW5pYyA9IGNoYXJhY3Rlci5tYXhQYW5pYyB8fCAwO1xuICAgIHRoaXMucGFuaXhEZWNheSA9IGNoYXJhY3Rlci5wYW5peERlY2F5IHx8IDA7XG4gICAgdGhpcy5tYXhIcCA9IGNoYXJhY3Rlci5tYXhIcCB8fCAwO1xuICAgIHRoaXMuaGVhbHRoUmVnZW5lcmF0aW9uID0gY2hhcmFjdGVyLmhlYWx0aFJlZ2VuZXJhdGlvbiB8fCAwO1xuICAgIHRoaXMubWF4U3RhbWluYSA9IGNoYXJhY3Rlci5tYXhTdGFtaW5hIHx8IDA7XG4gICAgdGhpcy5zdGFtaW5hUmVnZW5lcmF0aW9uID0gY2hhcmFjdGVyLnN0YW1pbmFSZWdlbmVyYXRpb24gfHwgMDtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDaGFyYWN0ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=