"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControlGame = (function () {
    function ControlGame() {
        var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ControlGame);

        // Game State
        this.gameState = data.gameState || 0;
        // Game Score
        this.arthurianScore = data.arthurianScore || 0;
        this.tuathaDeDanannScore = data.tuathaDeDanannScore || 0;
        this.vikingScore = data.vikingScore || 0;
        // Time remaining
        this.timeLeft = data.timeLeft || 0;
        // Control Points (if included)
        this.controlPoints = data.controlPoints || null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9Db250cm9sR2FtZS50cyJdLCJuYW1lcyI6WyJDb250cm9sR2FtZSIsIkNvbnRyb2xHYW1lLmNvbnN0cnVjdG9yIiwiQ29udHJvbEdhbWUuY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBUUEsV0FBQTtBQVNFQSxhQVRGLFdBQUEsR0FTb0NBO1lBQXRCQSxJQUFJQSx5REFBZ0JBLEVBQUVBOzs4QkFUcEMsV0FBQTs7O0FBWUlDLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBOztBQUdyQ0EsWUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDL0NBLFlBQUlBLENBQUNBLG1CQUFtQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN6REEsWUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7O0FBR3pDQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTs7QUFHbkNBLFlBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLElBQUlBLElBQUlBLENBQUNBO0tBQ2pEQTs7aUJBeEJILFdBQUE7O2VBMEJlRCxrQkFBQUE7QUFDWEUsZ0JBQUlBLENBQUNBLEdBQUdBLElBQUlBLFdBQVdBLEVBQUVBLENBQUNBO0FBQzFCQSxtQkFBT0EsQ0FBQ0EsQ0FBQ0E7U0FDVkE7OztXQTdCSCxXQUFBOzs7cUJBaUNlLFdBQVciLCJmaWxlIjoidHMvY2xhc3Nlcy9Db250cm9sR2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cclxuICovXHJcbmltcG9ydCByYWNlIGZyb20gJy4uL2NvbnN0YW50cy9yYWNlJztcclxuaW1wb3J0IGFyY2hldHlwZSBmcm9tICcuLi9jb25zdGFudHMvYXJjaGV0eXBlJztcclxuXHJcbmNsYXNzIENvbnRyb2xHYW1lIHtcclxuXHJcbiAgYXJ0aHVyaWFuU2NvcmU6IG51bWJlcjtcclxuICBjb250cm9sUG9pbnRzOiBhbnlbXTtcclxuICBnYW1lU3RhdGU6IG51bWJlcjtcclxuICB0aW1lTGVmdDogbnVtYmVyO1xyXG4gIHR1YXRoYURlRGFuYW5uU2NvcmU6IG51bWJlcjtcclxuICB2aWtpbmdTY29yZTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhID0gPENvbnRyb2xHYW1lPnt9KSB7XHJcblxyXG4gICAgLy8gR2FtZSBTdGF0ZVxyXG4gICAgdGhpcy5nYW1lU3RhdGUgPSBkYXRhLmdhbWVTdGF0ZSB8fCAwO1xyXG5cclxuICAgIC8vIEdhbWUgU2NvcmVcclxuICAgIHRoaXMuYXJ0aHVyaWFuU2NvcmUgPSBkYXRhLmFydGh1cmlhblNjb3JlIHx8IDA7XHJcbiAgICB0aGlzLnR1YXRoYURlRGFuYW5uU2NvcmUgPSBkYXRhLnR1YXRoYURlRGFuYW5uU2NvcmUgfHwgMDtcclxuICAgIHRoaXMudmlraW5nU2NvcmUgPSBkYXRhLnZpa2luZ1Njb3JlIHx8IDA7XHJcblxyXG4gICAgLy8gVGltZSByZW1haW5pbmdcclxuICAgIHRoaXMudGltZUxlZnQgPSBkYXRhLnRpbWVMZWZ0IHx8IDA7XHJcblxyXG4gICAgLy8gQ29udHJvbCBQb2ludHMgKGlmIGluY2x1ZGVkKVxyXG4gICAgdGhpcy5jb250cm9sUG9pbnRzID0gZGF0YS5jb250cm9sUG9pbnRzIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlKCkge1xyXG4gICAgbGV0IGEgPSBuZXcgQ29udHJvbEdhbWUoKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xHYW1lO1xyXG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9