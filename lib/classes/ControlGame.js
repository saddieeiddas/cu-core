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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db250cm9sR2FtZS50cyJdLCJuYW1lcyI6WyJDb250cm9sR2FtZSIsIkNvbnRyb2xHYW1lLmNvbnN0cnVjdG9yIiwiQ29udHJvbEdhbWUuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQyxDQUFDOztJQUVGLFdBQUE7QUFTRUEsYUFURixXQUFBLEdBUzJDQTtZQUE3QkEsV0FBV0EseURBQWdCQSxFQUFFQTs7OEJBVDNDLFdBQUE7OztBQVlJQyxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxXQUFXQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHNUNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFdBQVdBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3REQSxZQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFdBQVdBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaEVBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBOztBQUdoREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7O0FBRzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxXQUFXQSxDQUFDQSxhQUFhQSxJQUFvQkEsRUFBRUEsQ0FBQ0E7S0FDdEVBOztpQkF4QkgsV0FBQTs7ZUEwQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDMUJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBN0JILFdBQUE7OztxQkFpQ2UsV0FBVyIsImZpbGUiOiJ0cy9jbGFzc2VzL0NvbnRyb2xHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbFBvaW50IHtcbiAgZmFjdGlvbjogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBzaXplOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufTtcblxuY2xhc3MgQ29udHJvbEdhbWUge1xuXG4gIGFydGh1cmlhblNjb3JlOiBudW1iZXI7XG4gIGNvbnRyb2xQb2ludHM6IENvbnRyb2xQb2ludFtdO1xuICBnYW1lU3RhdGU6IG51bWJlcjtcbiAgdGltZUxlZnQ6IG51bWJlcjtcbiAgdHVhdGhhRGVEYW5hbm5TY29yZTogbnVtYmVyO1xuICB2aWtpbmdTY29yZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xHYW1lID0gPENvbnRyb2xHYW1lPnt9KSB7XG5cbiAgICAvLyBHYW1lIFN0YXRlXG4gICAgdGhpcy5nYW1lU3RhdGUgPSBjb250cm9sR2FtZS5nYW1lU3RhdGUgfHwgMDtcblxuICAgIC8vIEdhbWUgU2NvcmVcbiAgICB0aGlzLmFydGh1cmlhblNjb3JlID0gY29udHJvbEdhbWUuYXJ0aHVyaWFuU2NvcmUgfHwgMDtcbiAgICB0aGlzLnR1YXRoYURlRGFuYW5uU2NvcmUgPSBjb250cm9sR2FtZS50dWF0aGFEZURhbmFublNjb3JlIHx8IDA7XG4gICAgdGhpcy52aWtpbmdTY29yZSA9IGNvbnRyb2xHYW1lLnZpa2luZ1Njb3JlIHx8IDA7XG5cbiAgICAvLyBUaW1lIHJlbWFpbmluZ1xuICAgIHRoaXMudGltZUxlZnQgPSBjb250cm9sR2FtZS50aW1lTGVmdCB8fCAwO1xuXG4gICAgLy8gQ29udHJvbCBQb2ludHMgKGlmIGluY2x1ZGVkKVxuICAgIHRoaXMuY29udHJvbFBvaW50cyA9IGNvbnRyb2xHYW1lLmNvbnRyb2xQb2ludHMgfHwgPENvbnRyb2xQb2ludFtdPltdO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBDb250cm9sR2FtZSgpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEdhbWU7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
