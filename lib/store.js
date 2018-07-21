"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("./channel");
var Store = /** @class */ (function () {
    function Store(initialValue) {
        this.channel = new channel_1.default();
        this.subscribe = this.channel.subscribe;
        this.value = initialValue;
    }
    Store.prototype.get = function () {
        return this.value;
    };
    Store.prototype.set = function (value) {
        if (typeof value != 'undefined') {
            this.value = value;
        }
        this.channel.broadcast();
    };
    Store.prototype.update = function (fn) {
        fn(this.value);
        this.set();
    };
    return Store;
}());
exports.default = Store;
