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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7OztJQUczQyxTQUFBO2NBQUEsU0FBQTs7QUF1Q0VBLGFBdkNGLFNBQUEsR0F1Q3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkF2Q3ZDLFNBQUE7O0FBd0NJQyxtQ0F4Q0osU0FBQSw2Q0F3Q1VBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLEVBQUVBLENBQUNBO0FBQ25DQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUVuQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFeENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUV4Q0EsWUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsU0FBU0EsQ0FBQ0EsWUFBWUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsU0FBU0EsQ0FBQ0EsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbERBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbENBLFlBQUlBLENBQUNBLGtCQUFrQkEsR0FBR0EsU0FBU0EsQ0FBQ0Esa0JBQWtCQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1REEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLG1CQUFtQkEsR0FBR0EsU0FBU0EsQ0FBQ0EsbUJBQW1CQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUUvREE7O2lCQTFFSCxTQUFBOztlQTRFZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0EvRUgsU0FBQTs7O3FCQW1GZSxTQUFTIiwiZmlsZSI6InRzL2NsYXNzZXMvQ2hhcmFjdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9JbnZlbnRvcnknO1xuaW1wb3J0IEVxdWlwcGVkSXRlbXMgZnJvbSAnLi9FcXVpcHBlZEl0ZW1zJztcbmltcG9ydCBCYW5lQm9vbiBmcm9tICcuL0JhbmVCb29uJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUGxheWVyIHtcblxuICBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgYmFuZXM6IGFueVtdO1xuICBib29uczogYW55W107XG4gIGVxdWlwcGVkSXRlbXM6IEVxdWlwcGVkSXRlbXM7XG5cbiAgLy9QcmltYXJ5XG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGFnaWxpdHk6IG51bWJlcjtcbiAgZW5kdXJhbmNlOiBudW1iZXI7XG4gIHdpbGw6IG51bWJlcjtcbiAgcmVzb25hbmNlOiBudW1iZXI7XG4gIGRleHRlcml0eTogbnVtYmVyO1xuICB2aXRhbGl0eTogbnVtYmVyO1xuICBhdHR1bmVtZW50OiBudW1iZXI7XG4gIGZhaXRoOiBudW1iZXI7XG4gIGV5ZXNpZ2h0OiBudW1iZXI7XG5cbiAgLy9TZWNvbmRhcnlcbiAgaGVhcmluZzogbnVtYmVyO1xuICBjbGFyaXR5OiBudW1iZXI7XG4gIG1hc3M6IG51bWJlcjtcbiAgcHJlc2VuY2U6IG51bWJlcjtcbiAgYWZmaW5pdHk6IG51bWJlcjtcblxuICAvL0Rlcml2ZWRcbiAgbWF4TW92ZVNwZWVkOiBudW1iZXI7XG4gIHZpc2lvbjogbnVtYmVyO1xuICBkZXRlY3Rpb246IG51bWJlcjtcbiAgY2FycnlDYXBhY2l0eTogbnVtYmVyO1xuICBtYXhQYW5pYzogbnVtYmVyO1xuICBwYW5peERlY2F5OiBudW1iZXI7XG4gIG1heEhwOiBudW1iZXI7XG4gIGhlYWx0aFJlZ2VuZXJhdGlvbjogbnVtYmVyO1xuICBtYXhTdGFtaW5hOiBudW1iZXI7XG4gIHN0YW1pbmFSZWdlbmVyYXRpb246IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKGNoYXJhY3RlciA9IDxDaGFyYWN0ZXI+e30pIHtcbiAgICBzdXBlcihjaGFyYWN0ZXIpXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBjaGFyYWN0ZXIuaW52ZW50b3J5IHx8IG5ldyBJbnZlbnRvcnkoKTtcbiAgICB0aGlzLmVxdWlwcGVkSXRlbXMgPSBjaGFyYWN0ZXIuZXF1aXBwZWRJdGVtcyB8fCBuZXcgRXF1aXBwZWRJdGVtcygpO1xuICAgIHRoaXMuYmFuZXMgPSBjaGFyYWN0ZXIuYmFuZXMgfHwgW107XG4gICAgdGhpcy5iYW5lcyA9IGNoYXJhY3Rlci5ib29ucyB8fCBbXTtcblxuICAgIHRoaXMuc3RyZW5ndGggPSBjaGFyYWN0ZXIuc3RyZW5ndGggfHwgMDtcbiAgICB0aGlzLmFnaWxpdHkgPSBjaGFyYWN0ZXIuYWdpbGl0eSB8fCAwO1xuICAgIHRoaXMuZW5kdXJhbmNlID0gY2hhcmFjdGVyLmVuZHVyYW5jZSB8fCAwO1xuICAgIHRoaXMud2lsbCA9IGNoYXJhY3Rlci53aWxsIHx8IDA7XG4gICAgdGhpcy5yZXNvbmFuY2UgPSBjaGFyYWN0ZXIucmVzb25hbmNlIHx8IDA7XG4gICAgdGhpcy5kZXh0ZXJpdHkgPSBjaGFyYWN0ZXIuZGV4dGVyaXR5IHx8IDA7XG4gICAgdGhpcy52aXRhbGl0eSA9IGNoYXJhY3Rlci52aXRhbGl0eSB8fCAwO1xuICAgIHRoaXMuYXR0dW5lbWVudCA9IGNoYXJhY3Rlci5hdHR1bmVtZW50IHx8IDA7XG4gICAgdGhpcy5mYWl0aCA9IGNoYXJhY3Rlci5mYWl0aCB8fCAwO1xuICAgIHRoaXMuZXllc2lnaHQgPSBjaGFyYWN0ZXIuZXllc2lnaHQgfHwgMDtcblxuICAgIHRoaXMuaGVhcmluZyA9IGNoYXJhY3Rlci5oZWFyaW5nIHx8IDA7XG4gICAgdGhpcy5jbGFyaXR5ID0gY2hhcmFjdGVyLmNsYXJpdHkgfHwgMDtcbiAgICB0aGlzLm1hc3MgPSBjaGFyYWN0ZXIubWFzcyB8fCAwO1xuICAgIHRoaXMucHJlc2VuY2UgPSBjaGFyYWN0ZXIucHJlc2VuY2UgfHwgMDtcbiAgICB0aGlzLmFmZmluaXR5ID0gY2hhcmFjdGVyLmFmZmluaXR5IHx8IDA7XG5cbiAgICB0aGlzLm1heE1vdmVTcGVlZCA9IGNoYXJhY3Rlci5tYXhNb3ZlU3BlZWQgfHwgMDtcbiAgICB0aGlzLnZpc2lvbiA9IGNoYXJhY3Rlci52aXNpb24gfHwgMDtcbiAgICB0aGlzLmRldGVjdGlvbiA9IGNoYXJhY3Rlci5kZXRlY3Rpb24gfHwgMDtcbiAgICB0aGlzLmNhcnJ5Q2FwYWNpdHkgPSBjaGFyYWN0ZXIuY2FycnlDYXBhY2l0eSB8fCAwO1xuICAgIHRoaXMubWF4UGFuaWMgPSBjaGFyYWN0ZXIubWF4UGFuaWMgfHwgMDtcbiAgICB0aGlzLnBhbml4RGVjYXkgPSBjaGFyYWN0ZXIucGFuaXhEZWNheSB8fCAwO1xuICAgIHRoaXMubWF4SHAgPSBjaGFyYWN0ZXIubWF4SHAgfHwgMDtcbiAgICB0aGlzLmhlYWx0aFJlZ2VuZXJhdGlvbiA9IGNoYXJhY3Rlci5oZWFsdGhSZWdlbmVyYXRpb24gfHwgMDtcbiAgICB0aGlzLm1heFN0YW1pbmEgPSBjaGFyYWN0ZXIubWF4U3RhbWluYSB8fCAwO1xuICAgIHRoaXMuc3RhbWluYVJlZ2VuZXJhdGlvbiA9IGNoYXJhY3Rlci5zdGFtaW5hUmVnZW5lcmF0aW9uIHx8IDA7XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQ2hhcmFjdGVyKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9