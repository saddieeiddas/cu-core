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

var FriendlyTarget = (function (_Combatant) {
    _inherits(FriendlyTarget, _Combatant);

    function FriendlyTarget() {
        var friendlytarget = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, FriendlyTarget);

        _get(Object.getPrototypeOf(FriendlyTarget.prototype), 'constructor', this).call(this, friendlytarget);
    }

    _createClass(FriendlyTarget, null, [{
        key: 'create',
        value: function create() {
            var a = new FriendlyTarget();
            return a;
        }
    }]);

    return FriendlyTarget;
})(_Combatant3['default']);

exports['default'] = FriendlyTarget;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9GcmllbmRseVRhcmdldC50cyJdLCJuYW1lcyI6WyJGcmllbmRseVRhcmdldCIsIkZyaWVuZGx5VGFyZ2V0LmNvbnN0cnVjdG9yIiwiRnJpZW5kbHlUYXJnZXQuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtzQixhQUFhOzs7O0lBRW5DLGNBQUE7Y0FBQSxjQUFBOztBQUVFQSxhQUZGLGNBQUEsR0FFaURBO1lBQW5DQSxjQUFjQSx5REFBbUJBLEVBQUVBOzs4QkFGakQsY0FBQTs7QUFHR0MsbUNBSEgsY0FBQSw2Q0FHU0EsY0FBY0EsRUFBQ0E7S0FDckJBOztpQkFKSCxjQUFBOztlQU1lRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLGNBQWNBLEVBQUVBLENBQUNBO0FBQzdCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQVRILGNBQUE7OztxQkFhZSxjQUFjIiwiZmlsZSI6InRzL2NsYXNzZXMvRnJpZW5kbHlUYXJnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBDb21iYXRhbnQgZnJvbSAnLi9Db21iYXRhbnQnO1xuXG5jbGFzcyBGcmllbmRseVRhcmdldCBleHRlbmRzIENvbWJhdGFudCB7XG5cbiAgY29uc3RydWN0b3IoZnJpZW5kbHl0YXJnZXQgPSA8RnJpZW5kbHlUYXJnZXQ+e30pIHtcbiAgXHRzdXBlcihmcmllbmRseXRhcmdldClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgRnJpZW5kbHlUYXJnZXQoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZGx5VGFyZ2V0O1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==