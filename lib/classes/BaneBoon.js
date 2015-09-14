/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _constantsChannelId = require('../constants/channelId');

var _constantsChannelId2 = _interopRequireDefault(_constantsChannelId);

var _constantsBaneBoonCategory = require('../constants/baneBoonCategory');

var _constantsBaneBoonCategory2 = _interopRequireDefault(_constantsBaneBoonCategory);

var BaneBoon = (function () {
    function BaneBoon() {
        var boonbane = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, BaneBoon);

        this.id = boonbane.id || "";
        this.channelId = boonbane.channelId || _constantsChannelId2['default'].NONE;
        this.name = boonbane.name || "";
        this.description = boonbane.description || "";
        this.category = boonbane.category || _constantsBaneBoonCategory2['default'].NONE;
        this.categoryId = boonbane.categoryId || 0;
        this.icon = boonbane.icon || "";
        this.costPerRank = boonbane.costPerRank || 0;
        this.maxRanks = boonbane.maxRanks || 0;
        this.prerequisite = boonbane.prerequisite || "";
        this.x = boonbane.x || 0;
        this.y = boonbane.y || 0;
    }

    _createClass(BaneBoon, null, [{
        key: 'create',
        value: function create() {
            var a = new BaneBoon();
            return a;
        }
    }]);

    return BaneBoon;
})();

exports['default'] = BaneBoon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9CYW5lQm9vbi50cyJdLCJuYW1lcyI6WyJCYW5lQm9vbiIsIkJhbmVCb29uLmNvbnN0cnVjdG9yIiwiQmFuZUJvb24uY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNc0Isd0JBQXdCOzs7O3lDQUNqQiwrQkFBK0I7Ozs7SUFFNUQsUUFBQTtBQWdCRUEsYUFoQkYsUUFBQSxHQWdCcUNBO1lBQXZCQSxRQUFRQSx5REFBYUEsRUFBRUE7OzhCQWhCckMsUUFBQTs7QUFpQklDLFlBQUlBLENBQUNBLEVBQUVBLEdBQUdBLFFBQVFBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO0FBQzVCQSxZQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxRQUFRQSxDQUFDQSxTQUFTQSxJQUFJQSxnQ0FBVUEsSUFBSUEsQ0FBQ0E7QUFDdERBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxXQUFXQSxJQUFJQSxFQUFFQSxDQUFDQTtBQUM5Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsUUFBUUEsSUFBS0EsdUNBQWlCQSxJQUFJQSxDQUFDQTtBQUM1REEsWUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0EsVUFBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDM0NBLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hDQSxZQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM3Q0EsWUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLFlBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFFBQVFBLENBQUNBLFlBQVlBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN6QkEsWUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7S0FDMUJBOztpQkE3QkgsUUFBQTs7ZUErQmVELGtCQUFBQTtBQUNYRSxnQkFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsUUFBUUEsRUFBRUEsQ0FBQ0E7QUFDdkJBLG1CQUFPQSxDQUFDQSxDQUFDQTtTQUNWQTs7O1dBbENILFFBQUE7OztxQkFzQ2UsUUFBUSIsImZpbGUiOiJ0cy9jbGFzc2VzL0JhbmVCb29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBjaGFubmVsSWQgZnJvbSAnLi4vY29uc3RhbnRzL2NoYW5uZWxJZCc7XG5pbXBvcnQgYmFuZUJvb25DYXRlZ29yeSBmcm9tICcuLi9jb25zdGFudHMvYmFuZUJvb25DYXRlZ29yeSc7XG5cbmNsYXNzIEJhbmVCb29uICB7XG5cbiAgaWQ6IHN0cmluZztcbiAgY2hhbm5lbElkOiBjaGFubmVsSWQ7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IGJhbmVCb29uQ2F0ZWdvcnk7XG4gIGNhdGVnb3J5SWQ6IG51bWJlcjtcbiAgaWNvbjogc3RyaW5nO1xuICBjb3N0UGVyUmFuazogbnVtYmVyO1xuICBtYXhSYW5rczogbnVtYmVyO1xuICBwcmVyZXF1aXNpdGU6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG5cblxuICBjb25zdHJ1Y3Rvcihib29uYmFuZSA9IDxCYW5lQm9vbj57fSkge1xuICAgIHRoaXMuaWQgPSBib29uYmFuZS5pZCB8fCBcIlwiO1xuICAgIHRoaXMuY2hhbm5lbElkID0gYm9vbmJhbmUuY2hhbm5lbElkIHx8IGNoYW5uZWxJZC5OT05FO1xuICAgIHRoaXMubmFtZSA9IGJvb25iYW5lLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gYm9vbmJhbmUuZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgICB0aGlzLmNhdGVnb3J5ID0gYm9vbmJhbmUuY2F0ZWdvcnkgfHwgIGJhbmVCb29uQ2F0ZWdvcnkuTk9ORTtcbiAgICB0aGlzLmNhdGVnb3J5SWQgPSBib29uYmFuZS5jYXRlZ29yeUlkIHx8IDA7XG4gICAgdGhpcy5pY29uID0gYm9vbmJhbmUuaWNvbiB8fCBcIlwiO1xuICAgIHRoaXMuY29zdFBlclJhbmsgPSBib29uYmFuZS5jb3N0UGVyUmFuayB8fCAwO1xuICAgIHRoaXMubWF4UmFua3MgPSBib29uYmFuZS5tYXhSYW5rcyB8fCAwO1xuICAgIHRoaXMucHJlcmVxdWlzaXRlID0gYm9vbmJhbmUucHJlcmVxdWlzaXRlIHx8IFwiXCI7XG4gICAgdGhpcy54ID0gYm9vbmJhbmUueCB8fCAwO1xuICAgIHRoaXMueSA9IGJvb25iYW5lLnkgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgbGV0IGEgPSBuZXcgQmFuZUJvb24oKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbmVCb29uO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
