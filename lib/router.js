"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Router = (function () {
    function Router(initialRoute) {
        this.handlers = {};
        this.routes = [initialRoute];
    }
    Router.prototype.route = function (path, component, getProps) {
        this.handlers[path] = { component: component, getProps: getProps };
    };
    Router.prototype.renderScene = function (session) {
        var route = this.getCurrentRoute();
        var handler = this.resolve(route);
        var props = handler.getProps(session);
        return React.createElement(handler.component, props);
    };
    Router.prototype.push = function (route) {
        this.routes.push(route);
    };
    Router.prototype.replace = function (route) {
        this.routes[this.routes.length - 1] = route;
    };
    Router.prototype.pop = function () {
        if (this.routes.length > 1) {
            this.routes.pop();
        }
    };
    Router.prototype.getCurrentRoute = function () {
        return this.routes[this.routes.length - 1];
    };
    Router.prototype.resolve = function (route) {
        var handler = this.handlers[route.path];
        if (!handler) {
            throw new Error("Missing handler for route " + JSON.stringify(route));
        }
        return handler;
    };
    return Router;
}());
exports.default = Router;
