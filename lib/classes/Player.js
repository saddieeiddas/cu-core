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
        var player = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Player);

        _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, player);
        this.race = player.race || _constantsRace2['default'].NONE;
        this.archetype = player.archetype || _constantsArchetype2['default'].NONE;
    }

    _createClass(Player, [{
        key: 'setRace',
        value: function setRace(race) {
            this.race = race;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9QbGF5ZXIudHMiXSwibmFtZXMiOlsiUGxheWVyIiwiUGxheWVyLmNvbnN0cnVjdG9yIiwiUGxheWVyLnNldFJhY2UiLCJQbGF5ZXIuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtzQixhQUFhOzs7OzZCQUNsQixtQkFBbUI7Ozs7a0NBQ2Qsd0JBQXdCOzs7O0lBRTlDLE1BQUE7Y0FBQSxNQUFBOztBQUtFQSxhQUxGLE1BQUEsR0FLaUNBO1lBQW5CQSxNQUFNQSx5REFBV0EsRUFBRUE7OzhCQUxqQyxNQUFBOztBQU1JQyxtQ0FOSixNQUFBLDZDQU1VQSxNQUFNQSxFQUFDQTtBQUNiQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSwyQkFBS0EsSUFBSUEsQ0FBQ0E7QUFDckNBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBLFNBQVNBLElBQUlBLGdDQUFVQSxJQUFJQSxDQUFDQTtLQUNyREE7O2lCQVRILE1BQUE7O2VBV1NELGlCQUFDQSxJQUFVQSxFQUFBQTtBQUNoQkUsZ0JBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1NBQ2xCQTs7O2VBRVlGLGtCQUFBQTtBQUNYRyxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7QUFDckJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBbEJILE1BQUE7OztxQkFzQmUsTUFBTSIsImZpbGUiOiJ0cy9jbGFzc2VzL1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IENvbWJhdGFudCBmcm9tICcuL0NvbWJhdGFudCc7XG5pbXBvcnQgcmFjZSBmcm9tICcuLi9jb25zdGFudHMvcmFjZSc7XG5pbXBvcnQgYXJjaGV0eXBlIGZyb20gJy4uL2NvbnN0YW50cy9hcmNoZXR5cGUnO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21iYXRhbnQge1xuXG4gIHJhY2U6IHJhY2U7XG4gIGFyY2hldHlwZTogYXJjaGV0eXBlO1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciA9IDxQbGF5ZXI+e30pIHtcbiAgICBzdXBlcihwbGF5ZXIpXG4gICAgdGhpcy5yYWNlID0gcGxheWVyLnJhY2UgfHwgcmFjZS5OT05FO1xuICAgIHRoaXMuYXJjaGV0eXBlID0gcGxheWVyLmFyY2hldHlwZSB8fCBhcmNoZXR5cGUuTk9ORTtcbiAgfVxuXG4gIHNldFJhY2UocmFjZTogcmFjZSkge1xuICAgIHRoaXMucmFjZSA9IHJhY2U7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IFBsYXllcigpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==