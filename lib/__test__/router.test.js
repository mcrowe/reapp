"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var router_1 = require("../router");
ava_1.test('router', function (t) {
    var router = new router_1.default({ path: 'home', params: {} });
    router.push('page', {});
    t.deepEqual(router.getCurrentRoute(), { path: 'page', params: {} });
    router.pop();
    t.deepEqual(router.getCurrentRoute(), { path: 'home', params: {} });
});
