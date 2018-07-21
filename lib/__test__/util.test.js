"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var Util = require("../util");
ava_1.test('pull', function (t) {
    var xs = [1, 2, 3, 4];
    Util.pull(xs, 3);
    t.deepEqual([1, 2, 4], xs);
    Util.pull(xs, 5);
    t.deepEqual([1, 2, 4], xs);
});
