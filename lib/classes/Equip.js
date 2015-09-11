"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Equip = (function () {
    //TODO add all the others

    function Equip() {
        var equip = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Equip);

        this.head = equip.head || null;
        this.shoulder = equip.shoulder || null;
        this.rightHand = equip.rightHand || null;
        this.leftHand = equip.leftHand || null;
        this.rightArm = equip.rightArm || null;
        this.leftArm = equip.leftArm || null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9FcXVpcC50cyJdLCJuYW1lcyI6WyJFcXVpcCIsIkVxdWlwLmNvbnN0cnVjdG9yIiwiRXF1aXAuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT0EsS0FBQTs7O0FBV0VBLGFBWEYsS0FBQSxHQVcrQkE7WUFBakJBLEtBQUtBLHlEQUFVQSxFQUFFQTs7OEJBWC9CLEtBQUE7O0FBWU1DLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLElBQUtBLElBQUlBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsU0FBU0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLElBQUtBLElBQUlBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUN4Q0EsWUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsSUFBS0EsSUFBSUEsQ0FBQ0E7S0FDekNBOztpQkFsQkgsS0FBQTs7ZUFvQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsRUFBRUEsQ0FBQ0E7QUFDcEJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBdkJILEtBQUE7OztxQkEyQmUsS0FBSyIsImZpbGUiOiJ0cy9jbGFzc2VzL0VxdWlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5jbGFzcyBFcXVpcCAge1xuICAgIFxuICBoZWFkOiBJdGVtO1xuICBzaG91bGRlcjogSXRlbTtcbiAgcmlnaHRIYW5kOiBJdGVtO1xuICBsZWZ0SGFuZDogSXRlbTtcbiAgcmlnaHRBcm06IEl0ZW07XG4gIGxlZnRBcm06IEl0ZW07XG4gICAgXG4gIC8vVE9ETyBhZGQgYWxsIHRoZSBvdGhlcnNcbiAgICBcbiAgY29uc3RydWN0b3IoZXF1aXAgPSA8RXF1aXA+e30pIHtcbiAgICAgIHRoaXMuaGVhZCA9IGVxdWlwLmhlYWQgfHwgIG51bGw7XG4gICAgICB0aGlzLnNob3VsZGVyID0gZXF1aXAuc2hvdWxkZXIgfHwgIG51bGw7XG4gICAgICB0aGlzLnJpZ2h0SGFuZCA9IGVxdWlwLnJpZ2h0SGFuZCB8fCAgbnVsbDtcbiAgICAgIHRoaXMubGVmdEhhbmQgPSBlcXVpcC5sZWZ0SGFuZCB8fCAgbnVsbDtcbiAgICAgIHRoaXMucmlnaHRBcm0gPSBlcXVpcC5yaWdodEFybSB8fCAgbnVsbDtcbiAgICAgIHRoaXMubGVmdEFybSA9IGVxdWlwLmxlZnRBcm0gfHwgIG51bGw7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEVxdWlwKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=