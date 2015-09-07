'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Combatant2 = require('./Combatant');

var _Combatant3 = _interopRequireDefault(_Combatant2);

var _constantsRace = require('../constants/race');

var _constantsRace2 = _interopRequireDefault(_constantsRace);

var _constantsArchetype = require('../constants/archetype');

var _constantsArchetype2 = _interopRequireDefault(_constantsArchetype);

var Character = (function (_Combatant) {
    _inherits(Character, _Combatant);

    function Character() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Character);

        _get(Object.getPrototypeOf(Character.prototype), 'constructor', this).call(this, character);
        this.race = character.race || _constantsRace2['default'].NONE;
        this.archetype = character.archetype || _constantsArchetype2['default'].NONE;
    }

    _createClass(Character, [{
        key: 'setRace',
        value: function setRace(race) {
            this.race = race;
        }
    }], [{
        key: 'create',
        value: function create() {
            var a = new Character();
            return a;
        }
    }]);

    return Character;
})(_Combatant3['default']);

exports['default'] = Character;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9DaGFyYWN0ZXIudHMiXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiQ2hhcmFjdGVyLmNvbnN0cnVjdG9yIiwiQ2hhcmFjdGVyLnNldFJhY2UiLCJDaGFyYWN0ZXIuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtzQixhQUFhOzs7OzZCQUNsQixtQkFBbUI7Ozs7a0NBQ2Qsd0JBQXdCOzs7O0lBRTlDLFNBQUE7Y0FBQSxTQUFBOztBQUtFQSxhQUxGLFNBQUEsR0FLdUNBO1lBQXpCQSxTQUFTQSx5REFBY0EsRUFBRUE7OzhCQUx2QyxTQUFBOztBQU1JQyxtQ0FOSixTQUFBLDZDQU1VQSxTQUFTQSxFQUFDQTtBQUNoQkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsSUFBSUEsMkJBQUtBLElBQUlBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxJQUFJQSxnQ0FBVUEsSUFBSUEsQ0FBQ0E7S0FDeERBOztpQkFUSCxTQUFBOztlQVdTRCxpQkFBQ0EsSUFBVUEsRUFBQUE7QUFDaEJFLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtTQUNsQkE7OztlQUVZRixrQkFBQUE7QUFDWEcsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQWxCSCxTQUFBOzs7cUJBc0JlLFNBQVMiLCJmaWxlIjoidHMvY2xhc3Nlcy9DaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi9Db21iYXRhbnQnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi4vY29uc3RhbnRzL3JhY2UnO1xuaW1wb3J0IGFyY2hldHlwZSBmcm9tICcuLi9jb25zdGFudHMvYXJjaGV0eXBlJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgQ29tYmF0YW50IHtcblxuICByYWNlOiByYWNlO1xuICBhcmNoZXR5cGU6IGFyY2hldHlwZTtcblxuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIgPSA8Q2hhcmFjdGVyPnt9KSB7XG4gICAgc3VwZXIoY2hhcmFjdGVyKVxuICAgIHRoaXMucmFjZSA9IGNoYXJhY3Rlci5yYWNlIHx8IHJhY2UuTk9ORTtcbiAgICB0aGlzLmFyY2hldHlwZSA9IGNoYXJhY3Rlci5hcmNoZXR5cGUgfHwgYXJjaGV0eXBlLk5PTkU7XG4gIH1cblxuICBzZXRSYWNlKHJhY2U6IHJhY2UpIHtcbiAgICB0aGlzLnJhY2UgPSByYWNlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDaGFyYWN0ZXIoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=