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

;

var ControlGame = (function () {
    function ControlGame() {
        var controlGame = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ControlGame);

        // Game State
        this.gameState = controlGame.gameState || 0;
        // Game Score
        this.arthurianScore = controlGame.arthurianScore || 0;
        this.tuathaDeDanannScore = controlGame.tuathaDeDanannScore || 0;
        this.vikingScore = controlGame.vikingScore || 0;
        // Time remaining
        this.timeLeft = controlGame.timeLeft || 0;
        // Control Points (if included)
        this.controlPoints = controlGame.controlPoints || [];
    }

    _createClass(ControlGame, null, [{
        key: "create",
        value: function create() {
            var a = new ControlGame();
            return a;
        }
    }]);

    return ControlGame;
})();

exports["default"] = ControlGame;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db250cm9sR2FtZS50cyJdLCJuYW1lcyI6WyJDb250cm9sR2FtZSIsIkNvbnRyb2xHYW1lLmNvbnN0cnVjdG9yIiwiQ29udHJvbEdhbWUuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQyxDQUFDOztJQUVGLFdBQUE7QUFTRUEsYUFURixXQUFBLEdBUzJDQTtZQUE3QkEsV0FBV0EseURBQWdCQSxFQUFFQTs7OEJBVDNDLFdBQUE7OztBQVlJQyxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxXQUFXQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHNUNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFdBQVdBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3REQSxZQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFdBQVdBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaEVBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBOztBQUdoREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7O0FBRzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxXQUFXQSxDQUFDQSxhQUFhQSxJQUFvQkEsRUFBRUEsQ0FBQ0E7S0FDdEVBOztpQkF4QkgsV0FBQTs7ZUEwQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDMUJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBN0JILFdBQUE7OztxQkFpQ2UsV0FBVyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NvbnRyb2xHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcclxuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xyXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbFBvaW50IHtcclxuICBmYWN0aW9uOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBzaXplOiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNsYXNzIENvbnRyb2xHYW1lIHtcclxuXHJcbiAgYXJ0aHVyaWFuU2NvcmU6IG51bWJlcjtcclxuICBjb250cm9sUG9pbnRzOiBDb250cm9sUG9pbnRbXTtcclxuICBnYW1lU3RhdGU6IG51bWJlcjtcclxuICB0aW1lTGVmdDogbnVtYmVyO1xyXG4gIHR1YXRoYURlRGFuYW5uU2NvcmU6IG51bWJlcjtcclxuICB2aWtpbmdTY29yZTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250cm9sR2FtZSA9IDxDb250cm9sR2FtZT57fSkge1xyXG5cclxuICAgIC8vIEdhbWUgU3RhdGVcclxuICAgIHRoaXMuZ2FtZVN0YXRlID0gY29udHJvbEdhbWUuZ2FtZVN0YXRlIHx8IDA7XHJcblxyXG4gICAgLy8gR2FtZSBTY29yZVxyXG4gICAgdGhpcy5hcnRodXJpYW5TY29yZSA9IGNvbnRyb2xHYW1lLmFydGh1cmlhblNjb3JlIHx8IDA7XHJcbiAgICB0aGlzLnR1YXRoYURlRGFuYW5uU2NvcmUgPSBjb250cm9sR2FtZS50dWF0aGFEZURhbmFublNjb3JlIHx8IDA7XHJcbiAgICB0aGlzLnZpa2luZ1Njb3JlID0gY29udHJvbEdhbWUudmlraW5nU2NvcmUgfHwgMDtcclxuXHJcbiAgICAvLyBUaW1lIHJlbWFpbmluZ1xyXG4gICAgdGhpcy50aW1lTGVmdCA9IGNvbnRyb2xHYW1lLnRpbWVMZWZ0IHx8IDA7XHJcblxyXG4gICAgLy8gQ29udHJvbCBQb2ludHMgKGlmIGluY2x1ZGVkKVxyXG4gICAgdGhpcy5jb250cm9sUG9pbnRzID0gY29udHJvbEdhbWUuY29udHJvbFBvaW50cyB8fCA8Q29udHJvbFBvaW50W10+W107XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlKCkge1xyXG4gICAgbGV0IGEgPSBuZXcgQ29udHJvbEdhbWUoKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9