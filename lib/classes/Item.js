"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _constantsItemType = require('../constants/itemType');

var _constantsItemType2 = _interopRequireDefault(_constantsItemType);

var Item = (function () {
    function Item() {
        var item = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Item);

        this.id = item.id || "";
        this.type = item.type || _constantsItemType2["default"].NONE;
        this.name = item.name || "";
        this.description = item.description || "";
        this.resourceId = item.resourceId || 0;
    }

    _createClass(Item, null, [{
        key: "create",
        value: function create() {
            var a = new Item();
            return a;
        }
    }]);

    return Item;
})();

exports["default"] = Item;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9JdGVtLnRzIl0sIm5hbWVzIjpbIkl0ZW0iLCJJdGVtLmNvbnN0cnVjdG9yIiwiSXRlbS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztpQ0FLcUIsdUJBQXVCOzs7O0lBRTVDLElBQUE7QUFPRUEsYUFQRixJQUFBLEdBTzZCQTtZQUFmQSxJQUFJQSx5REFBU0EsRUFBRUE7OzhCQVA3QixJQUFBOztBQVFFQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFLQSxFQUFFQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBS0EsK0JBQVNBLElBQUlBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFLQSxFQUFFQSxDQUFDQTtBQUM3QkEsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsSUFBS0EsRUFBRUEsQ0FBQ0E7QUFDM0NBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUtBLENBQUNBLENBQUNBO0tBRXZDQTs7aUJBZEgsSUFBQTs7ZUFnQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDbkJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBbkJILElBQUE7OztxQkF1QmUsSUFBSSIsImZpbGUiOiJ0cy9jbGFzc2VzL0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBpdGVtVHlwZSBmcm9tICcuLi9jb25zdGFudHMvaXRlbVR5cGUnO1xuXG5jbGFzcyBJdGVtICB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IGl0ZW1UeXBlO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHJlc291cmNlSWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihpdGVtID0gPEl0ZW0+e30pIHtcbiAgdGhpcy5pZCA9IGl0ZW0uaWQgfHwgIFwiXCI7XG4gIHRoaXMudHlwZSA9IGl0ZW0udHlwZSB8fCAgaXRlbVR5cGUuTk9ORTtcbiAgdGhpcy5uYW1lID0gaXRlbS5uYW1lIHx8ICBcIlwiO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbiB8fCAgXCJcIjtcbiAgdGhpcy5yZXNvdXJjZUlkID0gaXRlbS5yZXNvdXJjZUlkIHx8ICAwO1xuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IEl0ZW0oKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9