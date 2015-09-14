'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Character = require('./Character');

var _Character2 = _interopRequireDefault(_Character);

var Group = (function () {
    function Group() {
        var group = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Group);

        group.self = group.self || new _Character2['default']();
        group.members = group.members || [];
    }

    _createClass(Group, null, [{
        key: 'create',
        value: function create() {
            var a = new Group();
            return a;
        }
    }]);

    return Group;
})();

exports['default'] = Group;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Hcm91cC50cyJdLCJuYW1lcyI6WyJHcm91cCIsIkdyb3VwLmNvbnN0cnVjdG9yIiwiR3JvdXAuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7eUJBTXNCLGFBQWE7Ozs7SUFDbkMsS0FBQTtBQUlFQSxhQUpGLEtBQUEsR0FJK0JBO1lBQWpCQSxLQUFLQSx5REFBVUEsRUFBRUE7OzhCQUovQixLQUFBOztBQUtJQyxhQUFLQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxJQUFLQSw0QkFBZUEsQ0FBQ0E7QUFDNUNBLGFBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLElBQWVBLEVBQUVBLENBQUNBO0tBRWhEQTs7aUJBUkgsS0FBQTs7ZUFVZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtBQUNwQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FiSCxLQUFBOzs7cUJBaUJlLEtBQUsiLCJmaWxlIjoidHMvY2xhc3Nlcy9Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyJztcbmNsYXNzIEdyb3VwICB7XG4gIHNlbGY6IENoYXJhY3RlcjtcbiAgbWVtYmVyczogUGxheWVyW107XG5cbiAgY29uc3RydWN0b3IoZ3JvdXAgPSA8R3JvdXA+e30pIHtcbiAgICBncm91cC5zZWxmID0gZ3JvdXAuc2VsZiB8fCAgbmV3IENoYXJhY3RlcigpO1xuICAgIGdyb3VwLm1lbWJlcnMgPSBncm91cC5tZW1iZXJzIHx8ICA8UGxheWVyW10+W107XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgR3JvdXAoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==