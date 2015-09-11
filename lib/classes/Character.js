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

var _Equip = require('./Equip');

var _Equip2 = _interopRequireDefault(_Equip);

var _BanesBoons = require('./BanesBoons');

var _BanesBoons2 = _interopRequireDefault(_BanesBoons);

var Character = (function (_Player) {
    _inherits(Character, _Player);

    function Character() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Character);

        _get(Object.getPrototypeOf(Character.prototype), 'constructor', this).call(this, character);
        this.inventory = character.inventory || new _Inventory2['default']();
        this.equip = character.equip || new _Equip2['default']();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7O3FCQUNqQixTQUFTOzs7OzBCQUNKLGNBQWM7Ozs7SUFFckMsU0FBQTtjQUFBLFNBQUE7O0FBc0NFQSxhQXRDRixTQUFBLEdBc0N1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBdEN2QyxTQUFBOztBQXVDSUMsbUNBdkNKLFNBQUEsNkNBdUNVQSxTQUFTQSxFQUFDQTtBQUNkQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBYUEsQ0FBQ0E7QUFDdERBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLHdCQUFTQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsNkJBQWNBLENBQUNBO0FBR3pEQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUV4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRXhDQSxZQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxTQUFTQSxDQUFDQSxhQUFhQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxTQUFTQSxDQUFDQSxrQkFBa0JBLElBQUlBLENBQUNBLENBQUNBO0FBQzVEQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxTQUFTQSxDQUFDQSxtQkFBbUJBLElBQUlBLENBQUNBLENBQUNBO0tBRWpFQTs7aUJBekVILFNBQUE7O2VBMkVlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTlFSCxTQUFBOzs7cUJBa0ZlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9DaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL0ludmVudG9yeSc7XG5pbXBvcnQgRXF1aXAgZnJvbSAnLi9FcXVpcCc7XG5pbXBvcnQgQmFuZXNCb29ucyBmcm9tICcuL0JhbmVzQm9vbnMnO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIFxuICBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgYmFuZXNib29uczogQmFuZXNCb29ucztcbiAgZXF1aXA6IEVxdWlwO1xuICAgIFxuICAvL1ByaW1hcnlcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgYWdpbGl0eTogbnVtYmVyO1xuICBlbmR1cmFuY2U6IG51bWJlcjtcbiAgd2lsbDogbnVtYmVyO1xuICByZXNvbmFuY2U6IG51bWJlcjtcbiAgZGV4dGVyaXR5OiBudW1iZXI7XG4gIHZpdGFsaXR5OiBudW1iZXI7XG4gIGF0dHVuZW1lbnQ6IG51bWJlcjtcbiAgZmFpdGg6IG51bWJlcjtcbiAgZXllc2lnaHQ6IG51bWJlcjtcbiAgICBcbiAgLy9TZWNvbmRhcnlcbiAgaGVhcmluZzogbnVtYmVyO1xuICBjbGFyaXR5OiBudW1iZXI7XG4gIG1hc3M6IG51bWJlcjtcbiAgcHJlc2VuY2U6IG51bWJlcjtcbiAgYWZmaW5pdHk6IG51bWJlcjtcbiAgICBcbiAgLy9EZXJpdmVkXG4gIG1heE1vdmVTcGVlZDogbnVtYmVyO1xuICB2aXNpb246IG51bWJlcjtcbiAgZGV0ZWN0aW9uOiBudW1iZXI7XG4gIGNhcnJ5Q2FwYWNpdHk6IG51bWJlcjtcbiAgbWF4UGFuaWM6IG51bWJlcjtcbiAgcGFuaXhEZWNheTogbnVtYmVyO1xuICBtYXhIcDogbnVtYmVyO1xuICBoZWFsdGhSZWdlbmVyYXRpb246IG51bWJlcjtcbiAgbWF4U3RhbWluYTogbnVtYmVyO1xuICBzdGFtaW5hUmVnZW5lcmF0aW9uOiBudW1iZXI7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKGNoYXJhY3RlciA9IDxDaGFyYWN0ZXI+e30pIHtcbiAgICBzdXBlcihjaGFyYWN0ZXIpXG4gICAgICB0aGlzLmludmVudG9yeSA9IGNoYXJhY3Rlci5pbnZlbnRvcnkgfHwgbmV3IEludmVudG9yeTtcbiAgICAgIHRoaXMuZXF1aXAgPSBjaGFyYWN0ZXIuZXF1aXAgfHwgbmV3IEVxdWlwO1xuICAgICAgdGhpcy5iYW5lc2Jvb25zID0gY2hhcmFjdGVyLmJhbmVzYm9vbnMgfHwgbmV3IEJhbmVzQm9vbnM7XG4gICAgICBcbiAgICAgXG4gICAgICB0aGlzLnN0cmVuZ3RoID0gY2hhcmFjdGVyLnN0cmVuZ3RoIHx8IDA7XG4gICAgICB0aGlzLmFnaWxpdHkgPSBjaGFyYWN0ZXIuYWdpbGl0eSB8fCAwO1xuICAgICAgdGhpcy5lbmR1cmFuY2UgPSBjaGFyYWN0ZXIuZW5kdXJhbmNlIHx8IDA7XG4gICAgICB0aGlzLndpbGwgPSBjaGFyYWN0ZXIud2lsbCB8fCAwO1xuICAgICAgdGhpcy5yZXNvbmFuY2UgPSBjaGFyYWN0ZXIucmVzb25hbmNlIHx8IDA7XG4gICAgICB0aGlzLmRleHRlcml0eSA9IGNoYXJhY3Rlci5kZXh0ZXJpdHkgfHwgMDtcbiAgICAgIHRoaXMudml0YWxpdHkgPSBjaGFyYWN0ZXIudml0YWxpdHkgfHwgMDtcbiAgICAgIHRoaXMuYXR0dW5lbWVudCA9IGNoYXJhY3Rlci5hdHR1bmVtZW50IHx8IDA7XG4gICAgICB0aGlzLmZhaXRoID0gY2hhcmFjdGVyLmZhaXRoIHx8IDA7XG4gICAgICB0aGlzLmV5ZXNpZ2h0ID0gY2hhcmFjdGVyLmV5ZXNpZ2h0IHx8IDA7XG4gICAgICBcbiAgICAgIHRoaXMuaGVhcmluZyA9IGNoYXJhY3Rlci5oZWFyaW5nIHx8IDA7XG4gICAgICB0aGlzLmNsYXJpdHkgPSBjaGFyYWN0ZXIuY2xhcml0eSB8fCAwO1xuICAgICAgdGhpcy5tYXNzID0gY2hhcmFjdGVyLm1hc3MgfHwgMDtcbiAgICAgIHRoaXMucHJlc2VuY2UgPSBjaGFyYWN0ZXIucHJlc2VuY2UgfHwgMDtcbiAgICAgIHRoaXMuYWZmaW5pdHkgPSBjaGFyYWN0ZXIuYWZmaW5pdHkgfHwgMDtcbiAgICAgIFxuICAgICAgdGhpcy5tYXhNb3ZlU3BlZWQgPSBjaGFyYWN0ZXIubWF4TW92ZVNwZWVkIHx8IDA7XG4gICAgICB0aGlzLnZpc2lvbiA9IGNoYXJhY3Rlci52aXNpb24gfHwgMDtcbiAgICAgIHRoaXMuZGV0ZWN0aW9uID0gY2hhcmFjdGVyLmRldGVjdGlvbiB8fCAwO1xuICAgICAgdGhpcy5jYXJyeUNhcGFjaXR5ID0gY2hhcmFjdGVyLmNhcnJ5Q2FwYWNpdHkgfHwgMDtcbiAgICAgIHRoaXMubWF4UGFuaWMgPSBjaGFyYWN0ZXIubWF4UGFuaWMgfHwgMDtcbiAgICAgIHRoaXMucGFuaXhEZWNheSA9IGNoYXJhY3Rlci5wYW5peERlY2F5IHx8IDA7XG4gICAgICB0aGlzLm1heEhwID0gY2hhcmFjdGVyLm1heEhwIHx8IDA7XG4gICAgICB0aGlzLmhlYWx0aFJlZ2VuZXJhdGlvbiA9IGNoYXJhY3Rlci5oZWFsdGhSZWdlbmVyYXRpb24gfHwgMDtcbiAgICAgIHRoaXMubWF4U3RhbWluYSA9IGNoYXJhY3Rlci5tYXhTdGFtaW5hIHx8IDA7XG4gICAgICB0aGlzLnN0YW1pbmFSZWdlbmVyYXRpb24gPSBjaGFyYWN0ZXIuc3RhbWluYVJlZ2VuZXJhdGlvbiB8fCAwO1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IENoYXJhY3RlcigpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==