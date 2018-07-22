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
function subscribe() {
    var subscriptions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        subscriptions[_i] = arguments[_i];
    }
    return function wrap(WrappedComponent) {
        return /** @class */ (function (_super) {
            __extends(SubscribedComponent, _super);
            function SubscribedComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.unsubscribes = [];
                _this.reload = function () {
                    _this.forceUpdate();
                };
                return _this;
            }
            SubscribedComponent.prototype.componentWillMount = function () {
                var _this = this;
                // Subscribe to all subscriptions and store unsubscribe functions.
                this.unsubscribes = subscriptions.map(function (sub) { return sub.subscribe(_this.reload); });
            };
            SubscribedComponent.prototype.componentWillUnmount = function () {
                // Unsubscribe to all subscriptions
                for (var _i = 0, _a = this.unsubscribes; _i < _a.length; _i++) {
                    var unsubscribe = _a[_i];
                    unsubscribe();
                }
            };
            SubscribedComponent.prototype.render = function () {
                return React.createElement(WrappedComponent, this.props);
            };
            return SubscribedComponent;
        }(React.Component));
    };
}
exports.default = subscribe;
