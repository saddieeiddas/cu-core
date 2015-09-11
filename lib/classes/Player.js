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

var Player = (function (_Combatant) {
    _inherits(Player, _Combatant);

    function Player() {
        var character = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Player);

        _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, character);
        this.race = character.race || _constantsRace2['default'].NONE;
        this.archetype = character.archetype || _constantsArchetype2['default'].NONE;
    }

    _createClass(Player, [{
        key: 'setRace',
        value: function setRace(race) {
            this.race = race;
        }
    }, {
        key: 'setAarchetype',
        value: function setAarchetype(archetype) {
            this.archetype = archetype;
        }
    }], [{
        key: 'create',
        value: function create() {
            var a = new Player();
            return a;
        }
    }]);

    return Player;
})(_Combatant3['default']);

exports['default'] = Player;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9QbGF5ZXIudHMiXSwibmFtZXMiOlsiUGxheWVyIiwiUGxheWVyLmNvbnN0cnVjdG9yIiwiUGxheWVyLnNldFJhY2UiLCJQbGF5ZXIuc2V0QWFyY2hldHlwZSIsIlBsYXllci5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3NCLGFBQWE7Ozs7NkJBQ2xCLG1CQUFtQjs7OztrQ0FDZCx3QkFBd0I7Ozs7SUFFOUMsTUFBQTtjQUFBLE1BQUE7O0FBS0VBLGFBTEYsTUFBQSxHQUtvQ0E7WUFBdEJBLFNBQVNBLHlEQUFXQSxFQUFFQTs7OEJBTHBDLE1BQUE7O0FBTUlDLG1DQU5KLE1BQUEsNkNBTVVBLFNBQVNBLEVBQUNBO0FBQ2hCQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxJQUFJQSwyQkFBS0EsSUFBSUEsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBLFNBQVNBLElBQUlBLGdDQUFVQSxJQUFJQSxDQUFDQTtLQUN4REE7O2lCQVRILE1BQUE7O2VBV1NELGlCQUFDQSxJQUFVQSxFQUFBQTtBQUNoQkUsZ0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1NBQ2xCQTs7O2VBRVlGLHVCQUFDQSxTQUFvQkEsRUFBQUE7QUFDaENHLGdCQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtTQUM1QkE7OztlQUVZSCxrQkFBQUE7QUFDWEksZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0FBQ3JCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQXRCSCxNQUFBOzs7cUJBMEJlLE1BQU0iLCJmaWxlIjoidHMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi9Db21iYXRhbnQnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi4vY29uc3RhbnRzL3JhY2UnO1xuaW1wb3J0IGFyY2hldHlwZSBmcm9tICcuLi9jb25zdGFudHMvYXJjaGV0eXBlJztcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tYmF0YW50IHtcblxuICByYWNlOiByYWNlO1xuICBhcmNoZXR5cGU6IGFyY2hldHlwZTtcblxuICBjb25zdHJ1Y3RvcihjaGFyYWN0ZXIgPSA8UGxheWVyPnt9KSB7XG4gICAgc3VwZXIoY2hhcmFjdGVyKVxuICAgIHRoaXMucmFjZSA9IGNoYXJhY3Rlci5yYWNlIHx8IHJhY2UuTk9ORTtcbiAgICB0aGlzLmFyY2hldHlwZSA9IGNoYXJhY3Rlci5hcmNoZXR5cGUgfHwgYXJjaGV0eXBlLk5PTkU7XG4gIH1cblxuICBzZXRSYWNlKHJhY2U6IHJhY2UpIHtcbiAgICB0aGlzLnJhY2UgPSByYWNlO1xuICB9XG4gICAgXG4gIHNldEFhcmNoZXR5cGUoYXJjaGV0eXBlOiBhcmNoZXR5cGUpIHtcbiAgICB0aGlzLmFyY2hldHlwZSA9IGFyY2hldHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgUGxheWVyKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9