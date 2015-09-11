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

var _BanesBoons = require('./BanesBoons');

var _BanesBoons2 = _interopRequireDefault(_BanesBoons);

var Character = (function (_Player) {
    _inherits(Character, _Player);

    function Character() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Character);

        _get(Object.getPrototypeOf(Character.prototype), 'constructor', this).call(this, character);
        this.inventory = character.inventory || new _Inventory2['default']();
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
        this.max_move_speed = character.max_move_speed || 0;
        this.vision = character.vision || 0;
        this.detection = character.detection || 0;
        this.carry_capacity = character.carry_capacity || 0;
        this.max_panix = character.max_panix || 0;
        this.panix_decay = character.panix_decay || 0;
        this.max_hp = character.max_hp || 0;
        this.health_regeneration = character.health_regeneration || 0;
        this.max_stamina = character.max_stamina || 0;
        this.stamina_regeneration = character.stamina_regeneration || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzBCQUNaLGNBQWM7Ozs7SUFFckMsU0FBQTtjQUFBLFNBQUE7O0FBcUNFQSxhQXJDRixTQUFBLEdBcUN1Q0E7WUFBekJBLFNBQVNBLHlEQUFjQSxFQUFFQTs7OEJBckN2QyxTQUFBOztBQXNDSUMsbUNBdENKLFNBQUEsNkNBc0NVQSxTQUFTQSxFQUFDQTtBQUNkQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBYUEsQ0FBQ0E7QUFDdERBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLDZCQUFjQSxDQUFDQTtBQUd6REEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFFeENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN0Q0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUV4Q0EsWUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsU0FBU0EsQ0FBQ0EsY0FBY0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcERBLFlBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsU0FBU0EsQ0FBQ0EsY0FBY0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcERBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxTQUFTQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM5Q0EsWUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLG1CQUFtQkEsR0FBR0EsU0FBU0EsQ0FBQ0EsbUJBQW1CQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM5REEsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsU0FBU0EsQ0FBQ0EsV0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDOUNBLFlBQUlBLENBQUNBLG9CQUFvQkEsR0FBR0EsU0FBU0EsQ0FBQ0Esb0JBQW9CQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUVuRUE7O2lCQXZFSCxTQUFBOztlQXlFZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtBQUN4QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0E1RUgsU0FBQTs7O3FCQWdGZSxTQUFTIiwiZmlsZSI6InRzL2NsYXNzZXMvQ2hhcmFjdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9JbnZlbnRvcnknO1xuaW1wb3J0IEJhbmVzQm9vbnMgZnJvbSAnLi9CYW5lc0Jvb25zJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBcbiAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG4gIGJhbmVzYm9vbnM6IEJhbmVzQm9vbnM7XG4gICAgXG4gIC8vUHJpbWFyeVxuICBzdHJlbmd0aDogbnVtYmVyO1xuICBhZ2lsaXR5OiBudW1iZXI7XG4gIGVuZHVyYW5jZTogbnVtYmVyO1xuICB3aWxsOiBudW1iZXI7XG4gIHJlc29uYW5jZTogbnVtYmVyO1xuICBkZXh0ZXJpdHk6IG51bWJlcjtcbiAgdml0YWxpdHk6IG51bWJlcjtcbiAgYXR0dW5lbWVudDogbnVtYmVyO1xuICBmYWl0aDogbnVtYmVyO1xuICBleWVzaWdodDogbnVtYmVyO1xuICAgIFxuICAvL1NlY29uZGFyeVxuICBoZWFyaW5nOiBudW1iZXI7XG4gIGNsYXJpdHk6IG51bWJlcjtcbiAgbWFzczogbnVtYmVyO1xuICBwcmVzZW5jZTogbnVtYmVyO1xuICBhZmZpbml0eTogbnVtYmVyO1xuICAgIFxuICAvL0Rlcml2ZWRcbiAgbWF4X21vdmVfc3BlZWQ6IG51bWJlcjtcbiAgdmlzaW9uOiBudW1iZXI7XG4gIGRldGVjdGlvbjogbnVtYmVyO1xuICBjYXJyeV9jYXBhY2l0eTogbnVtYmVyO1xuICBtYXhfcGFuaXg6IG51bWJlcjtcbiAgcGFuaXhfZGVjYXk6IG51bWJlcjtcbiAgbWF4X2hwOiBudW1iZXI7XG4gIGhlYWx0aF9yZWdlbmVyYXRpb246IG51bWJlcjtcbiAgbWF4X3N0YW1pbmE6IG51bWJlcjtcbiAgc3RhbWluYV9yZWdlbmVyYXRpb246IG51bWJlcjtcbiAgXG5cbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyID0gPENoYXJhY3Rlcj57fSkge1xuICAgIHN1cGVyKGNoYXJhY3RlcilcbiAgICAgIHRoaXMuaW52ZW50b3J5ID0gY2hhcmFjdGVyLmludmVudG9yeSB8fCBuZXcgSW52ZW50b3J5O1xuICAgICAgdGhpcy5iYW5lc2Jvb25zID0gY2hhcmFjdGVyLmJhbmVzYm9vbnMgfHwgbmV3IEJhbmVzQm9vbnM7XG4gICAgICBcbiAgICAgXG4gICAgICB0aGlzLnN0cmVuZ3RoID0gY2hhcmFjdGVyLnN0cmVuZ3RoIHx8IDA7XG4gICAgICB0aGlzLmFnaWxpdHkgPSBjaGFyYWN0ZXIuYWdpbGl0eSB8fCAwO1xuICAgICAgdGhpcy5lbmR1cmFuY2UgPSBjaGFyYWN0ZXIuZW5kdXJhbmNlIHx8IDA7XG4gICAgICB0aGlzLndpbGwgPSBjaGFyYWN0ZXIud2lsbCB8fCAwO1xuICAgICAgdGhpcy5yZXNvbmFuY2UgPSBjaGFyYWN0ZXIucmVzb25hbmNlIHx8IDA7XG4gICAgICB0aGlzLmRleHRlcml0eSA9IGNoYXJhY3Rlci5kZXh0ZXJpdHkgfHwgMDtcbiAgICAgIHRoaXMudml0YWxpdHkgPSBjaGFyYWN0ZXIudml0YWxpdHkgfHwgMDtcbiAgICAgIHRoaXMuYXR0dW5lbWVudCA9IGNoYXJhY3Rlci5hdHR1bmVtZW50IHx8IDA7XG4gICAgICB0aGlzLmZhaXRoID0gY2hhcmFjdGVyLmZhaXRoIHx8IDA7XG4gICAgICB0aGlzLmV5ZXNpZ2h0ID0gY2hhcmFjdGVyLmV5ZXNpZ2h0IHx8IDA7XG4gICAgICBcbiAgICAgIHRoaXMuaGVhcmluZyA9IGNoYXJhY3Rlci5oZWFyaW5nIHx8IDA7XG4gICAgICB0aGlzLmNsYXJpdHkgPSBjaGFyYWN0ZXIuY2xhcml0eSB8fCAwO1xuICAgICAgdGhpcy5tYXNzID0gY2hhcmFjdGVyLm1hc3MgfHwgMDtcbiAgICAgIHRoaXMucHJlc2VuY2UgPSBjaGFyYWN0ZXIucHJlc2VuY2UgfHwgMDtcbiAgICAgIHRoaXMuYWZmaW5pdHkgPSBjaGFyYWN0ZXIuYWZmaW5pdHkgfHwgMDtcbiAgICAgIFxuICAgICAgdGhpcy5tYXhfbW92ZV9zcGVlZCA9IGNoYXJhY3Rlci5tYXhfbW92ZV9zcGVlZCB8fCAwO1xuICAgICAgdGhpcy52aXNpb24gPSBjaGFyYWN0ZXIudmlzaW9uIHx8IDA7XG4gICAgICB0aGlzLmRldGVjdGlvbiA9IGNoYXJhY3Rlci5kZXRlY3Rpb24gfHwgMDtcbiAgICAgIHRoaXMuY2FycnlfY2FwYWNpdHkgPSBjaGFyYWN0ZXIuY2FycnlfY2FwYWNpdHkgfHwgMDtcbiAgICAgIHRoaXMubWF4X3Bhbml4ID0gY2hhcmFjdGVyLm1heF9wYW5peCB8fCAwO1xuICAgICAgdGhpcy5wYW5peF9kZWNheSA9IGNoYXJhY3Rlci5wYW5peF9kZWNheSB8fCAwO1xuICAgICAgdGhpcy5tYXhfaHAgPSBjaGFyYWN0ZXIubWF4X2hwIHx8IDA7XG4gICAgICB0aGlzLmhlYWx0aF9yZWdlbmVyYXRpb24gPSBjaGFyYWN0ZXIuaGVhbHRoX3JlZ2VuZXJhdGlvbiB8fCAwO1xuICAgICAgdGhpcy5tYXhfc3RhbWluYSA9IGNoYXJhY3Rlci5tYXhfc3RhbWluYSB8fCAwO1xuICAgICAgdGhpcy5zdGFtaW5hX3JlZ2VuZXJhdGlvbiA9IGNoYXJhY3Rlci5zdGFtaW5hX3JlZ2VuZXJhdGlvbiB8fCAwO1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IENoYXJhY3RlcigpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==