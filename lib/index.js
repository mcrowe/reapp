"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var app_1 = require("./app");
var router_1 = require("./router");
var store_1 = require("./store");
function createApp(router, store) {
    var el = createElement();
    var comp = React.createElement(app_1.default, { router: router, store: store });
    ReactDOM.render(comp, el);
}
exports.default = {
    Router: router_1.default,
    Store: store_1.default,
    createApp: createApp
};
function createElement() {
    var el = document.createElement('div');
    el.id = 'reapp';
    document.body.appendChild(el);
    return el;
}
