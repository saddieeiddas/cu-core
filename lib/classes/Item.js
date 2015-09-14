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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9JdGVtLnRzIl0sIm5hbWVzIjpbIkl0ZW0iLCJJdGVtLmNvbnN0cnVjdG9yIiwiSXRlbS5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztpQ0FLcUIsdUJBQXVCOzs7O0lBRTVDLElBQUE7QUFPRUEsYUFQRixJQUFBLEdBTzZCQTtZQUFmQSxJQUFJQSx5REFBU0EsRUFBRUE7OzhCQVA3QixJQUFBOztBQVFJQyxZQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFLQSxFQUFFQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBS0EsK0JBQVNBLElBQUlBLENBQUNBO0FBQ3hDQSxZQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFLQSxFQUFFQSxDQUFDQTtBQUM3QkEsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsSUFBS0EsRUFBRUEsQ0FBQ0E7QUFDM0NBLFlBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLElBQUtBLENBQUNBLENBQUNBO0tBQ3pDQTs7aUJBYkgsSUFBQTs7ZUFlZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUNuQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FsQkgsSUFBQTs7O3FCQXNCZSxJQUFJIiwiZmlsZSI6InRzL2NsYXNzZXMvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IGl0ZW1UeXBlIGZyb20gJy4uL2NvbnN0YW50cy9pdGVtVHlwZSc7XG5cbmNsYXNzIEl0ZW0gIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogaXRlbVR5cGU7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcmVzb3VyY2VJZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGl0ZW0gPSA8SXRlbT57fSkge1xuICAgIHRoaXMuaWQgPSBpdGVtLmlkIHx8ICBcIlwiO1xuICAgIHRoaXMudHlwZSA9IGl0ZW0udHlwZSB8fCAgaXRlbVR5cGUuTk9ORTtcbiAgICB0aGlzLm5hbWUgPSBpdGVtLm5hbWUgfHwgIFwiXCI7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb24gfHwgIFwiXCI7XG4gICAgdGhpcy5yZXNvdXJjZUlkID0gaXRlbS5yZXNvdXJjZUlkIHx8ICAwO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBJdGVtKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
