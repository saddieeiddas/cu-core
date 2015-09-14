"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EquippedItems = (function () {
    function EquippedItems() {
        var equippeditems = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, EquippedItems);

        this.helmet = equippeditems.helmet || null;
        this.chest = equippeditems.chest || null;
        this.pants = equippeditems.pants || null;
        this.boots = equippeditems.boots || null;
        this.leftHand = equippeditems.leftHand || null;
        this.rightHand = equippeditems.rightHand || null;
        this.leftGlove = equippeditems.leftGlove || null;
        this.rightGlove = equippeditems.rightGlove || null;
    }

    _createClass(EquippedItems, null, [{
        key: "create",
        value: function create() {
            var a = new EquippedItems();
            return a;
        }
    }]);

    return EquippedItems;
})();

exports["default"] = EquippedItems;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9FcXVpcHBlZEl0ZW1zLnRzIl0sIm5hbWVzIjpbIkVxdWlwcGVkSXRlbXMiLCJFcXVpcHBlZEl0ZW1zLmNvbnN0cnVjdG9yIiwiRXF1aXBwZWRJdGVtcy5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFPQSxhQUFBO0FBWUVBLGFBWkYsYUFBQSxHQVkrQ0E7WUFBakNBLGFBQWFBLHlEQUFrQkEsRUFBRUE7OzhCQVovQyxhQUFBOztBQWFJQyxZQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxhQUFhQSxDQUFDQSxNQUFNQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUM1Q0EsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsYUFBYUEsQ0FBQ0EsS0FBS0EsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDMUNBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLGFBQWFBLENBQUNBLEtBQUtBLElBQUtBLElBQUlBLENBQUNBO0FBQzFDQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxhQUFhQSxDQUFDQSxLQUFLQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUMxQ0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsYUFBYUEsQ0FBQ0EsUUFBUUEsSUFBS0EsSUFBSUEsQ0FBQ0E7QUFDaERBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLGFBQWFBLENBQUNBLFNBQVNBLElBQUtBLElBQUlBLENBQUNBO0FBQ2xEQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxhQUFhQSxDQUFDQSxTQUFTQSxJQUFLQSxJQUFJQSxDQUFDQTtBQUNsREEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsYUFBYUEsQ0FBQ0EsVUFBVUEsSUFBS0EsSUFBSUEsQ0FBQ0E7S0FFckRBOztpQkF0QkgsYUFBQTs7ZUF3QmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsYUFBYUEsRUFBRUEsQ0FBQ0E7QUFDNUJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBM0JILGFBQUE7OztxQkErQmUsYUFBYSIsImZpbGUiOiJ0cy9jbGFzc2VzL0VxdWlwcGVkSXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmNsYXNzIEVxdWlwcGVkSXRlbXMgIHtcblxuICBoZWxtZXQ6IEl0ZW07XG4gIGNoZXN0OiBJdGVtO1xuICBwYW50czogSXRlbTtcbiAgYm9vdHM6IEl0ZW07XG4gIGxlZnRIYW5kOiBJdGVtO1xuICByaWdodEhhbmQ6IEl0ZW07XG4gIGxlZnRHbG92ZTogSXRlbTtcbiAgcmlnaHRHbG92ZTogSXRlbTtcblxuXG4gIGNvbnN0cnVjdG9yKGVxdWlwcGVkaXRlbXMgPSA8RXF1aXBwZWRJdGVtcz57fSkge1xuICAgIHRoaXMuaGVsbWV0ID0gZXF1aXBwZWRpdGVtcy5oZWxtZXQgfHwgIG51bGw7XG4gICAgdGhpcy5jaGVzdCA9IGVxdWlwcGVkaXRlbXMuY2hlc3QgfHwgIG51bGw7XG4gICAgdGhpcy5wYW50cyA9IGVxdWlwcGVkaXRlbXMucGFudHMgfHwgIG51bGw7XG4gICAgdGhpcy5ib290cyA9IGVxdWlwcGVkaXRlbXMuYm9vdHMgfHwgIG51bGw7XG4gICAgdGhpcy5sZWZ0SGFuZCA9IGVxdWlwcGVkaXRlbXMubGVmdEhhbmQgfHwgIG51bGw7XG4gICAgdGhpcy5yaWdodEhhbmQgPSBlcXVpcHBlZGl0ZW1zLnJpZ2h0SGFuZCB8fCAgbnVsbDtcbiAgICB0aGlzLmxlZnRHbG92ZSA9IGVxdWlwcGVkaXRlbXMubGVmdEdsb3ZlIHx8ICBudWxsO1xuICAgIHRoaXMucmlnaHRHbG92ZSA9IGVxdWlwcGVkaXRlbXMucmlnaHRHbG92ZSB8fCAgbnVsbDtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBFcXVpcHBlZEl0ZW1zKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcHBlZEl0ZW1zO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
