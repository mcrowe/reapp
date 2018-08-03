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
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(props) {
        var _this = _super.call(this, props) || this;
        _this.go = function (path, params) {
            if (params === void 0) { params = {}; }
            var route = _this.makeRoute(path, params);
            _this.setState({ currentRoute: route });
        };
        _this.state = {
            currentRoute: props.initialRoute
        };
        return _this;
    }
    Router.prototype.makeRoute = function (path, params) {
        return { path: path, params: params };
    };
    Router.prototype.getNavigator = function () {
        return {
            go: this.go
        };
    };
    Router.prototype.render = function () {
        var _a = this.props, routes = _a.routes, getSceneProps = _a.getSceneProps;
        var currentRoute = this.state.currentRoute;
        var component = routes[currentRoute.path];
        if (!component) {
            throw new Error("Route not found " + currentRoute.path + ".");
        }
        var props = __assign({}, getSceneProps(this.getNavigator()), { params: __assign({}, currentRoute.params) });
        return React.createElement(component, props);
    };
    return Router;
}(React.Component));
exports.default = Router;
