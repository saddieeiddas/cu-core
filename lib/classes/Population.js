/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Population = (function () {
    function Population() {
        var population = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Population);

        // Population limit
        this.max = population.max || 0;
        // Current Population by realm
        this.arthurians = population.arthurians || 0;
        this.tuathaDeDanann = population.tuathaDeDanann || 0;
        this.vikings = population.vikings || 0;
    }

    _createClass(Population, null, [{
        key: "create",
        value: function create() {
            var a = new Population();
            return a;
        }
    }]);

    return Population;
})();

exports["default"] = Population;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Qb3B1bGF0aW9uLnRzIl0sIm5hbWVzIjpbIlBvcHVsYXRpb24iLCJQb3B1bGF0aW9uLmNvbnN0cnVjdG9yIiwiUG9wdWxhdGlvbi5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUtBLFVBQUE7QUFPRUEsYUFQRixVQUFBLEdBT3lDQTtZQUEzQkEsVUFBVUEseURBQWVBLEVBQUVBOzs4QkFQekMsVUFBQTs7O0FBVUlDLFlBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBOztBQUcvQkEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDN0NBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFVBQVVBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3JEQSxZQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxVQUFVQSxDQUFDQSxPQUFPQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUN4Q0E7O2lCQWhCSCxVQUFBOztlQWtCZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtBQUN6QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FyQkgsVUFBQTs7O3FCQXlCZSxVQUFVIiwiZmlsZSI6InRzL2NsYXNzZXMvUG9wdWxhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuY2xhc3MgUG9wdWxhdGlvbiB7XG5cbiAgYXJ0aHVyaWFuczogbnVtYmVyO1xuICB0dWF0aGFEZURhbmFubjogbnVtYmVyO1xuICB2aWtpbmdzOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHBvcHVsYXRpb24gPSA8UG9wdWxhdGlvbj57fSkge1xuXG4gICAgLy8gUG9wdWxhdGlvbiBsaW1pdFxuICAgIHRoaXMubWF4ID0gcG9wdWxhdGlvbi5tYXggfHwgMDtcblxuICAgIC8vIEN1cnJlbnQgUG9wdWxhdGlvbiBieSByZWFsbVxuICAgIHRoaXMuYXJ0aHVyaWFucyA9IHBvcHVsYXRpb24uYXJ0aHVyaWFucyB8fCAwO1xuICAgIHRoaXMudHVhdGhhRGVEYW5hbm4gPSBwb3B1bGF0aW9uLnR1YXRoYURlRGFuYW5uIHx8IDA7XG4gICAgdGhpcy52aWtpbmdzID0gcG9wdWxhdGlvbi52aWtpbmdzIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIGxldCBhID0gbmV3IFBvcHVsYXRpb24oKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXRpb247XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
