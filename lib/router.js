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
        this.subscribe = this.navigator.subscribe;
        this.navigator = new navigator_1.default(initialRoute);
    }
    Router.prototype.getNavigator = function () {
        return this.navigator;
    };
    Router.prototype.register = function (map) {
        this.map = map;
    };
    Router.prototype.renderScene = function () {
        var route = this.navigator.getCurrentRoute();
        var comp = this.resolve(route);
        return React.createElement(comp, route.params);
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
