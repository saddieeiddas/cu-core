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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7Ozt5QkFFckIsYUFBYTs7OztJQUduQyxTQUFBO2NBQUEsU0FBQTs7QUF5Q0VBLGFBekNGLFNBQUEsR0F5Q3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkF6Q3ZDLFNBQUE7O0FBMENJQyxtQ0ExQ0osU0FBQSw2Q0EwQ1VBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLDRCQUFlQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBaUJBLEVBQUVBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFpQkEsRUFBRUEsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUtBLElBQUlBLENBQUNBO0FBR3RDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUV4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRXhDQSxZQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxTQUFTQSxDQUFDQSxhQUFhQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxTQUFTQSxDQUFDQSxrQkFBa0JBLElBQUlBLENBQUNBLENBQUNBO0FBQzVEQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxTQUFTQSxDQUFDQSxtQkFBbUJBLElBQUlBLENBQUNBLENBQUNBO0tBRS9EQTs7aUJBL0VILFNBQUE7O2VBaUZlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQXBGSCxTQUFBOzs7cUJBd0ZlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9DaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL0ludmVudG9yeSc7XG5pbXBvcnQgRXF1aXBwZWRJdGVtcyBmcm9tICcuL0VxdWlwcGVkSXRlbXMnO1xuaW1wb3J0IEJhbmVCb29uIGZyb20gJy4vQmFuZUJvb24nO1xuaW1wb3J0IFNwZWxsQm9vayBmcm9tICcuL1NwZWxsQm9vayc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIFBsYXllciB7XG5cbiAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG4gIGJhbmVzOiBCYW5lQm9vbltdO1xuICBib29uczogQmFuZUJvb25bXTtcbiAgZXF1aXBwZWRJdGVtczogRXF1aXBwZWRJdGVtcztcbiAgc3BlbGxCb29rOiBTcGVsbEJvb2s7XG4gIGdyb3VwOiBHcm91cDtcblxuICAvL1ByaW1hcnlcbiAgc3RyZW5ndGg6IG51bWJlcjtcbiAgYWdpbGl0eTogbnVtYmVyO1xuICBlbmR1cmFuY2U6IG51bWJlcjtcbiAgd2lsbDogbnVtYmVyO1xuICByZXNvbmFuY2U6IG51bWJlcjtcbiAgZGV4dGVyaXR5OiBudW1iZXI7XG4gIHZpdGFsaXR5OiBudW1iZXI7XG4gIGF0dHVuZW1lbnQ6IG51bWJlcjtcbiAgZmFpdGg6IG51bWJlcjtcbiAgZXllc2lnaHQ6IG51bWJlcjtcblxuICAvL1NlY29uZGFyeVxuICBoZWFyaW5nOiBudW1iZXI7XG4gIGNsYXJpdHk6IG51bWJlcjtcbiAgbWFzczogbnVtYmVyO1xuICBwcmVzZW5jZTogbnVtYmVyO1xuICBhZmZpbml0eTogbnVtYmVyO1xuXG4gIC8vRGVyaXZlZFxuICBtYXhNb3ZlU3BlZWQ6IG51bWJlcjtcbiAgdmlzaW9uOiBudW1iZXI7XG4gIGRldGVjdGlvbjogbnVtYmVyO1xuICBjYXJyeUNhcGFjaXR5OiBudW1iZXI7XG4gIG1heFBhbmljOiBudW1iZXI7XG4gIHBhbml4RGVjYXk6IG51bWJlcjtcbiAgbWF4SHA6IG51bWJlcjtcbiAgaGVhbHRoUmVnZW5lcmF0aW9uOiBudW1iZXI7XG4gIG1heFN0YW1pbmE6IG51bWJlcjtcbiAgc3RhbWluYVJlZ2VuZXJhdGlvbjogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3IoY2hhcmFjdGVyID0gPENoYXJhY3Rlcj57fSkge1xuICAgIHN1cGVyKGNoYXJhY3RlcilcbiAgICB0aGlzLmludmVudG9yeSA9IGNoYXJhY3Rlci5pbnZlbnRvcnkgfHwgbmV3IEludmVudG9yeSgpO1xuICAgIHRoaXMuZXF1aXBwZWRJdGVtcyA9IGNoYXJhY3Rlci5lcXVpcHBlZEl0ZW1zIHx8IG5ldyBFcXVpcHBlZEl0ZW1zKCk7XG4gICAgdGhpcy5zcGVsbEJvb2sgPSBjaGFyYWN0ZXIuc3BlbGxCb29rIHx8IG5ldyBTcGVsbEJvb2soKTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJhbmVzIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmJhbmVzID0gY2hhcmFjdGVyLmJvb25zIHx8ICA8QmFuZUJvb25bXT5bXTtcbiAgICB0aGlzLmdyb3VwID0gY2hhcmFjdGVyLmdyb3VwIHx8ICBudWxsO1xuXG5cbiAgICB0aGlzLnN0cmVuZ3RoID0gY2hhcmFjdGVyLnN0cmVuZ3RoIHx8IDA7XG4gICAgdGhpcy5hZ2lsaXR5ID0gY2hhcmFjdGVyLmFnaWxpdHkgfHwgMDtcbiAgICB0aGlzLmVuZHVyYW5jZSA9IGNoYXJhY3Rlci5lbmR1cmFuY2UgfHwgMDtcbiAgICB0aGlzLndpbGwgPSBjaGFyYWN0ZXIud2lsbCB8fCAwO1xuICAgIHRoaXMucmVzb25hbmNlID0gY2hhcmFjdGVyLnJlc29uYW5jZSB8fCAwO1xuICAgIHRoaXMuZGV4dGVyaXR5ID0gY2hhcmFjdGVyLmRleHRlcml0eSB8fCAwO1xuICAgIHRoaXMudml0YWxpdHkgPSBjaGFyYWN0ZXIudml0YWxpdHkgfHwgMDtcbiAgICB0aGlzLmF0dHVuZW1lbnQgPSBjaGFyYWN0ZXIuYXR0dW5lbWVudCB8fCAwO1xuICAgIHRoaXMuZmFpdGggPSBjaGFyYWN0ZXIuZmFpdGggfHwgMDtcbiAgICB0aGlzLmV5ZXNpZ2h0ID0gY2hhcmFjdGVyLmV5ZXNpZ2h0IHx8IDA7XG5cbiAgICB0aGlzLmhlYXJpbmcgPSBjaGFyYWN0ZXIuaGVhcmluZyB8fCAwO1xuICAgIHRoaXMuY2xhcml0eSA9IGNoYXJhY3Rlci5jbGFyaXR5IHx8IDA7XG4gICAgdGhpcy5tYXNzID0gY2hhcmFjdGVyLm1hc3MgfHwgMDtcbiAgICB0aGlzLnByZXNlbmNlID0gY2hhcmFjdGVyLnByZXNlbmNlIHx8IDA7XG4gICAgdGhpcy5hZmZpbml0eSA9IGNoYXJhY3Rlci5hZmZpbml0eSB8fCAwO1xuXG4gICAgdGhpcy5tYXhNb3ZlU3BlZWQgPSBjaGFyYWN0ZXIubWF4TW92ZVNwZWVkIHx8IDA7XG4gICAgdGhpcy52aXNpb24gPSBjaGFyYWN0ZXIudmlzaW9uIHx8IDA7XG4gICAgdGhpcy5kZXRlY3Rpb24gPSBjaGFyYWN0ZXIuZGV0ZWN0aW9uIHx8IDA7XG4gICAgdGhpcy5jYXJyeUNhcGFjaXR5ID0gY2hhcmFjdGVyLmNhcnJ5Q2FwYWNpdHkgfHwgMDtcbiAgICB0aGlzLm1heFBhbmljID0gY2hhcmFjdGVyLm1heFBhbmljIHx8IDA7XG4gICAgdGhpcy5wYW5peERlY2F5ID0gY2hhcmFjdGVyLnBhbml4RGVjYXkgfHwgMDtcbiAgICB0aGlzLm1heEhwID0gY2hhcmFjdGVyLm1heEhwIHx8IDA7XG4gICAgdGhpcy5oZWFsdGhSZWdlbmVyYXRpb24gPSBjaGFyYWN0ZXIuaGVhbHRoUmVnZW5lcmF0aW9uIHx8IDA7XG4gICAgdGhpcy5tYXhTdGFtaW5hID0gY2hhcmFjdGVyLm1heFN0YW1pbmEgfHwgMDtcbiAgICB0aGlzLnN0YW1pbmFSZWdlbmVyYXRpb24gPSBjaGFyYWN0ZXIuc3RhbWluYVJlZ2VuZXJhdGlvbiB8fCAwO1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IENoYXJhY3RlcigpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==