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

var EnemyTarget = (function (_Combatant) {
    _inherits(EnemyTarget, _Combatant);

    function EnemyTarget() {
        var enemytarget = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, EnemyTarget);

        _get(Object.getPrototypeOf(EnemyTarget.prototype), 'constructor', this).call(this, enemytarget);
    }

    _createClass(EnemyTarget, null, [{
        key: 'create',
        value: function create() {
            var a = new EnemyTarget();
            return a;
        }
    }]);

    return EnemyTarget;
})(_Combatant3['default']);

exports['default'] = EnemyTarget;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9FbmVteVRhcmdldC50cyJdLCJuYW1lcyI6WyJFbmVteVRhcmdldCIsIkVuZW15VGFyZ2V0LmNvbnN0cnVjdG9yIiwiRW5lbXlUYXJnZXQuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtzQixhQUFhOzs7O0lBRW5DLFdBQUE7Y0FBQSxXQUFBOztBQUVFQSxhQUZGLFdBQUEsR0FFMkNBO1lBQTdCQSxXQUFXQSx5REFBZ0JBLEVBQUVBOzs4QkFGM0MsV0FBQTs7QUFHR0MsbUNBSEgsV0FBQSw2Q0FHU0EsV0FBV0EsRUFBQ0E7S0FDbEJBOztpQkFKSCxXQUFBOztlQU1lRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFdBQVdBLEVBQUVBLENBQUNBO0FBQzFCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQVRILFdBQUE7OztxQkFhZSxXQUFXIiwiZmlsZSI6InRzL2NsYXNzZXMvRW5lbXlUYXJnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi9Db21iYXRhbnQnO1xuXG5jbGFzcyBFbmVteVRhcmdldCBleHRlbmRzIENvbWJhdGFudCB7XG5cbiAgY29uc3RydWN0b3IoZW5lbXl0YXJnZXQgPSA8RW5lbXlUYXJnZXQ+e30pIHtcbiAgXHRzdXBlcihlbmVteXRhcmdldClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgRW5lbXlUYXJnZXQoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15VGFyZ2V0O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==