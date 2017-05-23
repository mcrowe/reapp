"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var channel_1 = require("./channel");
var Router = (function () {
    function Router(initialRoute) {
        this.handlers = {};
        this.routes = [initialRoute];
        this.channel = new channel_1.default();
    }
    Router.prototype.route = function (path, component, getProps) {
        this.handlers[path] = { component: component, getProps: getProps };
        return this;
    };
    Router.prototype.renderScene = function (session) {
        var route = this.getCurrentRoute();
        var handler = this.resolve(route);
        var props = {};
        if (typeof handler.getProps == 'function') {
            props = handler.getProps(route.params, session);
        }
        return React.createElement(handler.component, props);
    };
    Router.prototype.push = function (path, params) {
        var route = this.makeRoute(path, params);
        this.routes.push(route);
        this.broadcast();
    };
    Router.prototype.replace = function (path, params) {
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
    Router.prototype.pusher = function (path, params) {
        var _this = this;
        return function () { return _this.push(path, params); };
    };
    Router.prototype.popper = function () {
        var _this = this;
        return function () { return _this.pop(); };
    };
    Router.prototype.getCurrentRoute = function () {
        return this.routes[this.routes.length - 1];
    };
    Router.prototype.makeRoute = function (path, params) {
        return { path: path, params: params };
    };
    Router.prototype.subscribe = function (fn) {
        return this.channel.subscribe(fn);
    };
    Router.prototype.resolve = function (route) {
        var handler = this.handlers[route.path];
        if (!handler) {
            throw new Error("Missing handler for route " + JSON.stringify(route));
        }
        return handler;
    };
    Router.prototype.broadcast = function () {
        this.channel.broadcast(this.routes);
    };
    return Router;
}());
exports.default = Router;
