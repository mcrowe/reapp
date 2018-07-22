"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var navigator_1 = require("./navigator");
function makeNotFound(route) {
    return /** @class */ (function (_super) {
        __extends(NotFound, _super);
        function NotFound() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NotFound.prototype.render = function () {
            return React.createElement('h1', null, "Route not found " + JSON.stringify(route));
        };
        return NotFound;
    }(React.Component));
}
var Router = /** @class */ (function () {
    function Router(initialRoute) {
        this.map = {};
        this.navigator = new navigator_1.default(initialRoute);
    }
    Router.prototype.getNavigator = function () {
        return this.navigator;
    };
    Router.prototype.register = function (map) {
        this.map = map;
    };
    Router.prototype.renderScene = function (props) {
        var route = this.navigator.getCurrentRoute();
        var comp = this.resolve(route);
        return React.createElement(comp, __assign({}, props, { params: route.params }));
    };
    Router.prototype.subscribe = function (fn) {
        return this.navigator.subscribe(fn);
    };
    Router.prototype.resolve = function (route) {
        var comp = this.map[route.path];
        if (comp) {
            return comp;
        }
        else {
            console.error("Missing handler for route " + JSON.stringify(route));
            return makeNotFound(route);
        }
    };
    return Router;
}());
exports.default = Router;
