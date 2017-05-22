"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("./channel");
var Store = (function () {
    function Store(initialValue) {
        this.value = initialValue;
        this.channel = new channel_1.default();
    }
    Store.prototype.get = function () {
        return this.value;
    };
    Store.prototype.set = function () {
        this.channel.broadcast(this.value);
    };
    Store.prototype.update = function (fn) {
        fn(this.value);
        this.set();
    };
    Store.prototype.subscribe = function (fn) {
        return this.channel.subscribe(fn);
    };
    return Store;
}());
exports.default = Store;
