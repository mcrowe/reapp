"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pull(xs, x) {
    var idx = xs.indexOf(x);
    if (idx > -1) {
        xs.splice(idx, 1);
    }
}
var Channel = (function () {
    function Channel() {
        this.listeners = [];
    }
    Channel.prototype.subscribe = function (fn) {
        var _this = this;
        this.listeners.push(fn);
        // Return an unsubscribe function.
        return function () {
            pull(_this.listeners, fn);
        };
    };
    Channel.prototype.broadcast = function (val) {
        this.listeners.forEach(function (fn) {
            fn(val);
        });
    };
    return Channel;
}());
exports.default = Channel;
