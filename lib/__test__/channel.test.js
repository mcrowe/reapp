"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var channel_1 = require("../channel");
ava_1.test('channel', function (t) {
    var channel = new channel_1.default();
    var calls = 0;
    var unsubscribe = channel.subscribe(function () {
        calls += 1;
    });
    channel.broadcast();
    channel.broadcast();
    unsubscribe();
    channel.broadcast();
    t.is(calls, 2);
});
