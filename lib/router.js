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
var channel_1 = require("./channel");
function makeNotFound(route) {
    return /** @class */ (function (_super) {
        __extends(NotFound, _super);
        function NotFound() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NotFound.prototype.render = function () {
            return React.createElement('h1', "Route not found " + JSON.stringify(route));
        };
        return NotFound;
    }(React.Component));
}
var Router = /** @class */ (function () {
    function Router(initialRoute) {
        this.map = {};
        this.channel = new channel_1.default();
        // Alias for go
        this.go = this.replace;
        this.subscribe = this.channel.subscribe;
        this.routes = [initialRoute];
    }
    Router.prototype.route = function (path, component) {
        this.map[path] = component;
        return this;
    };
    Router.prototype.renderScene = function () {
        var route = this.getCurrentRoute();
        var comp = this.resolve(route);
        return React.createElement(comp, route.params);
    };
    Router.prototype.push = function (path, params) {
        if (params === void 0) { params = {}; }
        var route = this.makeRoute(path, params);
        this.routes.push(route);
        this.broadcast();
    };
    Router.prototype.replace = function (path, params) {
        if (params === void 0) { params = {}; }
        var route = this.makeRoute(path, params);
        this.routes[this.routes.length - 1] = route;
        this.broadcast();
    };
    Router.prototype.pop = function () {
        if (this.routes.length > 1) {
            this.routes.pop();
            this.broadcast();
        }
    };
    Router.prototype.getCurrentRoute = function () {
        return this.routes[this.routes.length - 1];
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
    Router.prototype.makeRoute = function (path, params) {
        return { path: path, params: params };
    };
    Router.prototype.broadcast = function () {
        this.channel.broadcast();
    };
    return Router;
}());
exports.default = Router;
