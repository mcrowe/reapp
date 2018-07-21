"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("./channel");
var Navigator = /** @class */ (function () {
    function Navigator(initialRoute) {
        this.channel = new channel_1.default();
        // Alias for go
        this.go = this.replace;
        this.subscribe = this.channel.subscribe;
        this.routes = [initialRoute];
    }
    Navigator.prototype.push = function (path, params) {
        if (params === void 0) { params = {}; }
        var route = this.makeRoute(path, params);
        this.routes.push(route);
        this.broadcast();
    };
    Navigator.prototype.replace = function (path, params) {
        if (params === void 0) { params = {}; }
        var route = this.makeRoute(path, params);
        this.routes[this.routes.length - 1] = route;
        this.broadcast();
    };
    Navigator.prototype.pop = function () {
        if (this.routes.length > 1) {
            this.routes.pop();
            this.broadcast();
        }
    };
    Navigator.prototype.getCurrentRoute = function () {
        return this.routes[this.routes.length - 1];
    };
    Navigator.prototype.makeRoute = function (path, params) {
        return { path: path, params: params };
    };
    Navigator.prototype.broadcast = function () {
        this.channel.broadcast();
    };
    return Navigator;
}());
exports.default = Navigator;
