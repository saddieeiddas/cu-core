"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = (function () {
    function Inventory() {
        var inventory = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Inventory);

        this.items = inventory.items || [];
    }

    _createClass(Inventory, null, [{
        key: "create",
        value: function create() {
            var a = new Inventory();
            return a;
        }
    }]);

    return Inventory;
})();

exports["default"] = Inventory;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9JbnZlbnRvcnkudHMiXSwibmFtZXMiOlsiSW52ZW50b3J5IiwiSW52ZW50b3J5LmNvbnN0cnVjdG9yIiwiSW52ZW50b3J5LmNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU9BLFNBQUE7QUFHRUEsYUFIRixTQUFBLEdBR3VDQTtZQUF6QkEsU0FBU0EseURBQWNBLEVBQUVBOzs4QkFIdkMsU0FBQTs7QUFJSUMsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsSUFBYUEsRUFBRUEsQ0FBQ0E7S0FDN0NBOztpQkFMSCxTQUFBOztlQU9lRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO0FBQ3hCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQVZILFNBQUE7OztxQkFjZSxTQUFTIiwiZmlsZSI6InRzL2NsYXNzZXMvSW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5jbGFzcyBJbnZlbnRvcnkgIHtcbiAgaXRlbXM6IEl0ZW1bXTtcblxuICBjb25zdHJ1Y3RvcihpbnZlbnRvcnkgPSA8SW52ZW50b3J5Pnt9KSB7XG4gICAgdGhpcy5pdGVtcyA9IGludmVudG9yeS5pdGVtcyB8fCAgPEl0ZW1bXT5bXTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgSW52ZW50b3J5KCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnk7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
