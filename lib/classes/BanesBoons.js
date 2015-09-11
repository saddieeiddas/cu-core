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

var BanesBoons = (function () {
    function BanesBoons() {
        var boonsbanes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, BanesBoons);

        this.id = boonsbanes.id || "";
        this.channelId = boonsbanes.channelId || _constantsChannelId2['default'].NONE;
        this.name = boonsbanes.name || "";
        this.description = boonsbanes.description || "";
        this.category = boonsbanes.category || _constantsBaneBoonCategory2['default'].NONE;
        this.categoryId = boonsbanes.categoryId || 0;
        this.icon = boonsbanes.icon || "";
        this.costPerRank = boonsbanes.costPerRank || 0;
        this.maxRanks = boonsbanes.maxRanks || 0;
        this.prerequisite = boonsbanes.prerequisite || "";
        this.x = boonsbanes.x || 0;
        this.y = boonsbanes.y || 0;
    }

    _createClass(BanesBoons, null, [{
        key: 'create',
        value: function create() {
            var a = new BanesBoons();
            return a;
        }
    }]);

    return BanesBoons;
})();

exports['default'] = BanesBoons;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NsYXNzZXMvdHMvY2xhc3Nlcy9CYW5lc0Jvb25zLnRzIl0sIm5hbWVzIjpbIkJhbmVzQm9vbnMiLCJCYW5lc0Jvb25zLmNvbnN0cnVjdG9yIiwiQmFuZXNCb29ucy5jcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1zQix3QkFBd0I7Ozs7eUNBQ2pCLCtCQUErQjs7OztJQUU1RCxVQUFBO0FBZ0JFQSxhQWhCRixVQUFBLEdBZ0J5Q0E7WUFBM0JBLFVBQVVBLHlEQUFlQSxFQUFFQTs7OEJBaEJ6QyxVQUFBOztBQWlCR0MsWUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsVUFBVUEsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDOUJBLFlBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFVBQVVBLENBQUNBLFNBQVNBLElBQUlBLGdDQUFVQSxJQUFJQSxDQUFDQTtBQUN4REEsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsVUFBVUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDbENBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFVBQVVBLENBQUNBLFdBQVdBLElBQUlBLEVBQUVBLENBQUNBO0FBQ2hEQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxRQUFRQSxJQUFLQSx1Q0FBaUJBLElBQUlBLENBQUNBO0FBQzlEQSxZQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUM3Q0EsWUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsVUFBVUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDbENBLFlBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFVBQVVBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBO0FBQy9DQSxZQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN6Q0EsWUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsVUFBVUEsQ0FBQ0EsWUFBWUEsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDbERBLFlBQUlBLENBQUNBLENBQUNBLEdBQUdBLFVBQVVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQzNCQSxZQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxVQUFVQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtLQUUzQkE7O2lCQTlCSCxVQUFBOztlQWdDZUQsa0JBQUFBO0FBQ1hFLGdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtBQUN6QkEsbUJBQU9BLENBQUNBLENBQUNBO1NBQ1ZBOzs7V0FuQ0gsVUFBQTs7O3FCQXVDZSxVQUFVIiwiZmlsZSI6InRzL2NsYXNzZXMvQmFuZXNCb29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgY2hhbm5lbElkIGZyb20gJy4uL2NvbnN0YW50cy9jaGFubmVsSWQnO1xuaW1wb3J0IGJhbmVCb29uQ2F0ZWdvcnkgZnJvbSAnLi4vY29uc3RhbnRzL2JhbmVCb29uQ2F0ZWdvcnknO1xuXG5jbGFzcyBCYW5lc0Jvb25zICB7XG5cblx0aWQ6IHN0cmluZztcblx0Y2hhbm5lbElkOiBjaGFubmVsSWQ7XG5cdG5hbWU6IHN0cmluZztcblx0ZGVzY3JpcHRpb246IHN0cmluZztcblx0Y2F0ZWdvcnk6IGJhbmVCb29uQ2F0ZWdvcnk7XG5cdGNhdGVnb3J5SWQ6IG51bWJlcjtcblx0aWNvbjogc3RyaW5nO1xuXHRjb3N0UGVyUmFuazogbnVtYmVyO1xuXHRtYXhSYW5rczogbnVtYmVyO1xuXHRwcmVyZXF1aXNpdGU6IHN0cmluZztcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG5cblxuICBjb25zdHJ1Y3Rvcihib29uc2JhbmVzID0gPEJhbmVzQm9vbnM+e30pIHtcbiAgXHR0aGlzLmlkID0gYm9vbnNiYW5lcy5pZCB8fCBcIlwiO1xuICBcdHRoaXMuY2hhbm5lbElkID0gYm9vbnNiYW5lcy5jaGFubmVsSWQgfHwgY2hhbm5lbElkLk5PTkU7XG5cdCAgdGhpcy5uYW1lID0gYm9vbnNiYW5lcy5uYW1lIHx8IFwiXCI7XG4gIFx0dGhpcy5kZXNjcmlwdGlvbiA9IGJvb25zYmFuZXMuZGVzY3JpcHRpb24gfHwgXCJcIjtcblx0ICB0aGlzLmNhdGVnb3J5ID0gYm9vbnNiYW5lcy5jYXRlZ29yeSB8fCAgYmFuZUJvb25DYXRlZ29yeS5OT05FO1xuICBcdHRoaXMuY2F0ZWdvcnlJZCA9IGJvb25zYmFuZXMuY2F0ZWdvcnlJZCB8fCAwO1xuICBcdHRoaXMuaWNvbiA9IGJvb25zYmFuZXMuaWNvbiB8fCBcIlwiO1xuICBcdHRoaXMuY29zdFBlclJhbmsgPSBib29uc2JhbmVzLmNvc3RQZXJSYW5rIHx8IDA7XG4gIFx0dGhpcy5tYXhSYW5rcyA9IGJvb25zYmFuZXMubWF4UmFua3MgfHwgMDtcbiAgXHR0aGlzLnByZXJlcXVpc2l0ZSA9IGJvb25zYmFuZXMucHJlcmVxdWlzaXRlIHx8IFwiXCI7XG4gIFx0dGhpcy54ID0gYm9vbnNiYW5lcy54IHx8IDA7XG4gIFx0dGhpcy55ID0gYm9vbnNiYW5lcy55IHx8IDA7XG4gIFxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICBsZXQgYSA9IG5ldyBCYW5lc0Jvb25zKCk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5lc0Jvb25zO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==