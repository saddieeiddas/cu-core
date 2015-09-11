"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Equip = (function () {
    function Equip() {
        var equip = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Equip);

        this.head = equip.head || null;
        this.shoulder = equip.shoulder || null;
        this.right_hand = equip.right_hand || null;
        this.left_hand = equip.left_hand || null;
        this.right_arm = equip.right_arm || null;
        this.left_arm = equip.left_arm || null;
    }

    _createClass(Equip, null, [{
        key: "create",
        value: function create() {
            var a = new Equip();
            return a;
        }
    }]);

    return Equip;
})();

exports["default"] = Equip;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9FcXVpcC50cyJdLCJuYW1lcyI6WyJFcXVpcCIsIkVxdWlwLmNvbnN0cnVjdG9yIiwiRXF1aXAuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0EsS0FBQTtBQVNFQSxhQVRGLEtBQUEsR0FTK0JBO1lBQWpCQSxLQUFLQSx5REFBVUEsRUFBRUE7OzhCQVQvQixLQUFBOztBQVVNQyxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUNoQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDeENBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLFVBQVVBLElBQUtBLElBQUlBLENBQUNBO0FBQzVDQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxTQUFTQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUtBLElBQUlBLENBQUNBO0tBQzNDQTs7aUJBaEJILEtBQUE7O2VBa0JlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBO0FBQ3BCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQXJCSCxLQUFBOzs7cUJBeUJlLEtBQUsiLCJmaWxlIjoidHMvY2xhc3Nlcy9FcXVpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuY2xhc3MgRXF1aXAgIHtcbiAgICBcbiAgaGVhZDogSXRlbTtcbiAgc2hvdWxkZXI6IEl0ZW07XG4gIHJpZ2h0X2hhbmQ6IEl0ZW07XG4gIGxlZnRfaGFuZDogSXRlbTtcbiAgcmlnaHRfYXJtOiBJdGVtO1xuICBsZWZ0X2FybTogSXRlbTtcbiAgICBcbiAgY29uc3RydWN0b3IoZXF1aXAgPSA8RXF1aXA+e30pIHtcbiAgICAgIHRoaXMuaGVhZCA9IGVxdWlwLmhlYWQgfHwgIG51bGw7XG4gICAgICB0aGlzLnNob3VsZGVyID0gZXF1aXAuc2hvdWxkZXIgfHwgIG51bGw7XG4gICAgICB0aGlzLnJpZ2h0X2hhbmQgPSBlcXVpcC5yaWdodF9oYW5kIHx8ICBudWxsO1xuICAgICAgdGhpcy5sZWZ0X2hhbmQgPSBlcXVpcC5sZWZ0X2hhbmQgfHwgIG51bGw7XG4gICAgICB0aGlzLnJpZ2h0X2FybSA9IGVxdWlwLnJpZ2h0X2FybSB8fCAgbnVsbDtcbiAgICAgIHRoaXMubGVmdF9hcm0gPSBlcXVpcC5sZWZ0X2FybSB8fCAgbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgRXF1aXAoKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==