"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var router_1 = require("../router");
ava_1.test('basics', function (t) {
    var router = new router_1.default({
        initialRoute: { path: '/', params: {} },
        routes: {},
        getSceneProps: function () { return ({}); }
    });
    t.truthy(router.render());
});
