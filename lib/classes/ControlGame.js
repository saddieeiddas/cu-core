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
        this.controlPoints = controlGame.controlPoints || null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db250cm9sR2FtZS50cyJdLCJuYW1lcyI6WyJDb250cm9sR2FtZSIsIkNvbnRyb2xHYW1lLmNvbnN0cnVjdG9yIiwiQ29udHJvbEdhbWUuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQyxDQUFDOztJQUVGLFdBQUE7QUFTRUEsYUFURixXQUFBLEdBUzJDQTtZQUE3QkEsV0FBV0EseURBQWdCQSxFQUFFQTs7OEJBVDNDLFdBQUE7OztBQVlJQyxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxXQUFXQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHNUNBLFlBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFdBQVdBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3REQSxZQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFdBQVdBLENBQUNBLG1CQUFtQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDaEVBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBOztBQUdoREEsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7O0FBRzFDQSxZQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxXQUFXQSxDQUFDQSxhQUFhQSxJQUFJQSxJQUFJQSxDQUFDQTtLQUN4REE7O2lCQXhCSCxXQUFBOztlQTBCZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxXQUFXQSxFQUFFQSxDQUFDQTtBQUMxQkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0E3QkgsV0FBQTs7O3FCQWlDZSxXQUFXIiwiZmlsZSI6InRzL2NsYXNzZXMvQ29udHJvbEdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xyXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXHJcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sUG9pbnRzIHtcclxuICBmYWN0aW9uOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBzaXplOiBzdHJpbmc7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxuXHJcbmNsYXNzIENvbnRyb2xHYW1lIHtcclxuXHJcbiAgYXJ0aHVyaWFuU2NvcmU6IG51bWJlcjtcclxuICBjb250cm9sUG9pbnRzOiBDb250cm9sUG9pbnRzW107XHJcbiAgZ2FtZVN0YXRlOiBudW1iZXI7XHJcbiAgdGltZUxlZnQ6IG51bWJlcjtcclxuICB0dWF0aGFEZURhbmFublNjb3JlOiBudW1iZXI7XHJcbiAgdmlraW5nU2NvcmU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udHJvbEdhbWUgPSA8Q29udHJvbEdhbWU+e30pIHtcclxuXHJcbiAgICAvLyBHYW1lIFN0YXRlXHJcbiAgICB0aGlzLmdhbWVTdGF0ZSA9IGNvbnRyb2xHYW1lLmdhbWVTdGF0ZSB8fCAwO1xyXG5cclxuICAgIC8vIEdhbWUgU2NvcmVcclxuICAgIHRoaXMuYXJ0aHVyaWFuU2NvcmUgPSBjb250cm9sR2FtZS5hcnRodXJpYW5TY29yZSB8fCAwO1xyXG4gICAgdGhpcy50dWF0aGFEZURhbmFublNjb3JlID0gY29udHJvbEdhbWUudHVhdGhhRGVEYW5hbm5TY29yZSB8fCAwO1xyXG4gICAgdGhpcy52aWtpbmdTY29yZSA9IGNvbnRyb2xHYW1lLnZpa2luZ1Njb3JlIHx8IDA7XHJcblxyXG4gICAgLy8gVGltZSByZW1haW5pbmdcclxuICAgIHRoaXMudGltZUxlZnQgPSBjb250cm9sR2FtZS50aW1lTGVmdCB8fCAwO1xyXG5cclxuICAgIC8vIENvbnRyb2wgUG9pbnRzIChpZiBpbmNsdWRlZClcclxuICAgIHRoaXMuY29udHJvbFBvaW50cyA9IGNvbnRyb2xHYW1lLmNvbnRyb2xQb2ludHMgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUoKSB7XHJcbiAgICBsZXQgYSA9IG5ldyBDb250cm9sR2FtZSgpO1xyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=