"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Channel = /** @class */ (function () {
    function Channel() {
        var _this = this;
        this.listeners = [];
        this.subscribe = function (fn) {
            _this.listeners.push(fn);
            // Return an unsubscribe function.
            return function () {
                util_1.pull(_this.listeners, fn);
            };
        };
        this.broadcast = function () {
            for (var _i = 0, _a = _this.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener();
            }
        };
    }
    return Channel;
}());
exports.default = Channel;
