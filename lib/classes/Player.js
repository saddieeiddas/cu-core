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
    }, {
        key: 'setArchetype',
        value: function setArchetype(archetype) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9QbGF5ZXIudHMiXSwibmFtZXMiOlsiUGxheWVyIiwiUGxheWVyLmNvbnN0cnVjdG9yIiwiUGxheWVyLnNldFJhY2UiLCJQbGF5ZXIuc2V0QXJjaGV0eXBlIiwiUGxheWVyLmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzswQkFLc0IsYUFBYTs7Ozs2QkFDbEIsbUJBQW1COzs7O2tDQUNkLHdCQUF3Qjs7OztJQUU5QyxNQUFBO2NBQUEsTUFBQTs7QUFLRUEsYUFMRixNQUFBLEdBS2lDQTtZQUFuQkEsTUFBTUEseURBQVdBLEVBQUVBOzs4QkFMakMsTUFBQTs7QUFNSUMsbUNBTkosTUFBQSw2Q0FNVUEsTUFBTUEsRUFBQ0E7QUFDYkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsMkJBQUtBLElBQUlBLENBQUNBO0FBQ3JDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxNQUFNQSxDQUFDQSxTQUFTQSxJQUFJQSxnQ0FBVUEsSUFBSUEsQ0FBQ0E7S0FDckRBOztpQkFUSCxNQUFBOztlQVdTRCxpQkFBQ0EsSUFBVUEsRUFBQUE7QUFDaEJFLGdCQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtTQUNsQkE7OztlQUVXRixzQkFBQ0EsU0FBb0JBLEVBQUFBO0FBQy9CRyxnQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7U0FDNUJBOzs7ZUFFWUgsa0JBQUFBO0FBQ1hJLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtBQUNyQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0F0QkgsTUFBQTs7O3FCQTBCZSxNQUFNIiwiZmlsZSI6InRzL2NsYXNzZXMvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgQ29tYmF0YW50IGZyb20gJy4vQ29tYmF0YW50JztcbmltcG9ydCByYWNlIGZyb20gJy4uL2NvbnN0YW50cy9yYWNlJztcbmltcG9ydCBhcmNoZXR5cGUgZnJvbSAnLi4vY29uc3RhbnRzL2FyY2hldHlwZSc7XG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbWJhdGFudCB7XG5cbiAgcmFjZTogcmFjZTtcbiAgYXJjaGV0eXBlOiBhcmNoZXR5cGU7XG5cbiAgY29uc3RydWN0b3IocGxheWVyID0gPFBsYXllcj57fSkge1xuICAgIHN1cGVyKHBsYXllcilcbiAgICB0aGlzLnJhY2UgPSBwbGF5ZXIucmFjZSB8fCByYWNlLk5PTkU7XG4gICAgdGhpcy5hcmNoZXR5cGUgPSBwbGF5ZXIuYXJjaGV0eXBlIHx8IGFyY2hldHlwZS5OT05FO1xuICB9XG5cbiAgc2V0UmFjZShyYWNlOiByYWNlKSB7XG4gICAgdGhpcy5yYWNlID0gcmFjZTtcbiAgfVxuICAgIFxuICBzZXRBcmNoZXR5cGUoYXJjaGV0eXBlOiBhcmNoZXR5cGUpIHtcbiAgICB0aGlzLmFyY2hldHlwZSA9IGFyY2hldHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgUGxheWVyKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9