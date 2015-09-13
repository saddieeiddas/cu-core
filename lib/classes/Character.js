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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLbUIsVUFBVTs7Ozt5QkFDUCxhQUFhOzs7OzZCQUNULGlCQUFpQjs7OztJQUczQyxTQUFBO2NBQUEsU0FBQTs7QUF1Q0VBLGFBdkNGLFNBQUEsR0F1Q3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkF2Q3ZDLFNBQUE7O0FBd0NJQyxtQ0F4Q0osU0FBQSw2Q0F3Q1VBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSw0QkFBZUEsQ0FBQ0E7QUFDeERBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLGFBQWFBLElBQUlBLGdDQUFtQkEsQ0FBQ0E7QUFDcEVBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQWlCQSxFQUFFQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBaUJBLEVBQUVBLENBQUNBO0FBRWhEQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDNUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO0FBQ2xDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUV4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdENBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBO0FBRXhDQSxZQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNoREEsWUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxTQUFTQSxDQUFDQSxhQUFhQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUNsQ0EsWUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxTQUFTQSxDQUFDQSxrQkFBa0JBLElBQUlBLENBQUNBLENBQUNBO0FBQzVEQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxTQUFTQSxDQUFDQSxtQkFBbUJBLElBQUlBLENBQUNBLENBQUNBO0tBRS9EQTs7aUJBMUVILFNBQUE7O2VBNEVlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQS9FSCxTQUFBOzs7cUJBbUZlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9DaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL0ludmVudG9yeSc7XG5pbXBvcnQgRXF1aXBwZWRJdGVtcyBmcm9tICcuL0VxdWlwcGVkSXRlbXMnO1xuaW1wb3J0IEJhbmVCb29uIGZyb20gJy4vQmFuZUJvb24nO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuXG4gIGludmVudG9yeTogSW52ZW50b3J5O1xuICBiYW5lczogQmFuZUJvb25bXTtcbiAgYm9vbnM6IEJhbmVCb29uW107XG4gIGVxdWlwcGVkSXRlbXM6IEVxdWlwcGVkSXRlbXM7XG5cbiAgLy9QcmltYXJ5XG4gIHN0cmVuZ3RoOiBudW1iZXI7XG4gIGFnaWxpdHk6IG51bWJlcjtcbiAgZW5kdXJhbmNlOiBudW1iZXI7XG4gIHdpbGw6IG51bWJlcjtcbiAgcmVzb25hbmNlOiBudW1iZXI7XG4gIGRleHRlcml0eTogbnVtYmVyO1xuICB2aXRhbGl0eTogbnVtYmVyO1xuICBhdHR1bmVtZW50OiBudW1iZXI7XG4gIGZhaXRoOiBudW1iZXI7XG4gIGV5ZXNpZ2h0OiBudW1iZXI7XG5cbiAgLy9TZWNvbmRhcnlcbiAgaGVhcmluZzogbnVtYmVyO1xuICBjbGFyaXR5OiBudW1iZXI7XG4gIG1hc3M6IG51bWJlcjtcbiAgcHJlc2VuY2U6IG51bWJlcjtcbiAgYWZmaW5pdHk6IG51bWJlcjtcblxuICAvL0Rlcml2ZWRcbiAgbWF4TW92ZVNwZWVkOiBudW1iZXI7XG4gIHZpc2lvbjogbnVtYmVyO1xuICBkZXRlY3Rpb246IG51bWJlcjtcbiAgY2FycnlDYXBhY2l0eTogbnVtYmVyO1xuICBtYXhQYW5pYzogbnVtYmVyO1xuICBwYW5peERlY2F5OiBudW1iZXI7XG4gIG1heEhwOiBudW1iZXI7XG4gIGhlYWx0aFJlZ2VuZXJhdGlvbjogbnVtYmVyO1xuICBtYXhTdGFtaW5hOiBudW1iZXI7XG4gIHN0YW1pbmFSZWdlbmVyYXRpb246IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKGNoYXJhY3RlciA9IDxDaGFyYWN0ZXI+e30pIHtcbiAgICBzdXBlcihjaGFyYWN0ZXIpXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBjaGFyYWN0ZXIuaW52ZW50b3J5IHx8IG5ldyBJbnZlbnRvcnkoKTtcbiAgICB0aGlzLmVxdWlwcGVkSXRlbXMgPSBjaGFyYWN0ZXIuZXF1aXBwZWRJdGVtcyB8fCBuZXcgRXF1aXBwZWRJdGVtcygpO1xuICAgIHRoaXMuYmFuZXMgPSBjaGFyYWN0ZXIuYmFuZXMgfHwgIDxCYW5lQm9vbltdPltdO1xuICAgIHRoaXMuYmFuZXMgPSBjaGFyYWN0ZXIuYm9vbnMgfHwgIDxCYW5lQm9vbltdPltdO1xuXG4gICAgdGhpcy5zdHJlbmd0aCA9IGNoYXJhY3Rlci5zdHJlbmd0aCB8fCAwO1xuICAgIHRoaXMuYWdpbGl0eSA9IGNoYXJhY3Rlci5hZ2lsaXR5IHx8IDA7XG4gICAgdGhpcy5lbmR1cmFuY2UgPSBjaGFyYWN0ZXIuZW5kdXJhbmNlIHx8IDA7XG4gICAgdGhpcy53aWxsID0gY2hhcmFjdGVyLndpbGwgfHwgMDtcbiAgICB0aGlzLnJlc29uYW5jZSA9IGNoYXJhY3Rlci5yZXNvbmFuY2UgfHwgMDtcbiAgICB0aGlzLmRleHRlcml0eSA9IGNoYXJhY3Rlci5kZXh0ZXJpdHkgfHwgMDtcbiAgICB0aGlzLnZpdGFsaXR5ID0gY2hhcmFjdGVyLnZpdGFsaXR5IHx8IDA7XG4gICAgdGhpcy5hdHR1bmVtZW50ID0gY2hhcmFjdGVyLmF0dHVuZW1lbnQgfHwgMDtcbiAgICB0aGlzLmZhaXRoID0gY2hhcmFjdGVyLmZhaXRoIHx8IDA7XG4gICAgdGhpcy5leWVzaWdodCA9IGNoYXJhY3Rlci5leWVzaWdodCB8fCAwO1xuXG4gICAgdGhpcy5oZWFyaW5nID0gY2hhcmFjdGVyLmhlYXJpbmcgfHwgMDtcbiAgICB0aGlzLmNsYXJpdHkgPSBjaGFyYWN0ZXIuY2xhcml0eSB8fCAwO1xuICAgIHRoaXMubWFzcyA9IGNoYXJhY3Rlci5tYXNzIHx8IDA7XG4gICAgdGhpcy5wcmVzZW5jZSA9IGNoYXJhY3Rlci5wcmVzZW5jZSB8fCAwO1xuICAgIHRoaXMuYWZmaW5pdHkgPSBjaGFyYWN0ZXIuYWZmaW5pdHkgfHwgMDtcblxuICAgIHRoaXMubWF4TW92ZVNwZWVkID0gY2hhcmFjdGVyLm1heE1vdmVTcGVlZCB8fCAwO1xuICAgIHRoaXMudmlzaW9uID0gY2hhcmFjdGVyLnZpc2lvbiB8fCAwO1xuICAgIHRoaXMuZGV0ZWN0aW9uID0gY2hhcmFjdGVyLmRldGVjdGlvbiB8fCAwO1xuICAgIHRoaXMuY2FycnlDYXBhY2l0eSA9IGNoYXJhY3Rlci5jYXJyeUNhcGFjaXR5IHx8IDA7XG4gICAgdGhpcy5tYXhQYW5pYyA9IGNoYXJhY3Rlci5tYXhQYW5pYyB8fCAwO1xuICAgIHRoaXMucGFuaXhEZWNheSA9IGNoYXJhY3Rlci5wYW5peERlY2F5IHx8IDA7XG4gICAgdGhpcy5tYXhIcCA9IGNoYXJhY3Rlci5tYXhIcCB8fCAwO1xuICAgIHRoaXMuaGVhbHRoUmVnZW5lcmF0aW9uID0gY2hhcmFjdGVyLmhlYWx0aFJlZ2VuZXJhdGlvbiB8fCAwO1xuICAgIHRoaXMubWF4U3RhbWluYSA9IGNoYXJhY3Rlci5tYXhTdGFtaW5hIHx8IDA7XG4gICAgdGhpcy5zdGFtaW5hUmVnZW5lcmF0aW9uID0gY2hhcmFjdGVyLnN0YW1pbmFSZWdlbmVyYXRpb24gfHwgMDtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDaGFyYWN0ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=