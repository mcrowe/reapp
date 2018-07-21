"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var store_1 = require("../store");
ava_1.test('store', function (t) {
    var store = new store_1.default({ counter: 5 });
    t.is(store.get().counter, 5);
    store.update(function (v) {
        return v.counter = v.counter * 2;
    });
    t.is(store.get().counter, 10);
});
