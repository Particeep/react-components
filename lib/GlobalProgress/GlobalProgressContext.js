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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var autobind_decorator_1 = require("autobind-decorator");
exports.GlobalProgressContext = React.createContext({});
exports.progressbarAnimationDuration = 400;
var GlobalProgressProvider = /** @class */ (function (_super) {
    __extends(GlobalProgressProvider, _super);
    function GlobalProgressProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeouts = [];
        _this.state = {
            currentStep: 0,
            steps: 1,
            started: false,
            progressStart: _this.start,
            progressStop: _this.stop,
            progressComplete: _this.complete,
            progressNext: _this.next,
            promisesWithProgress: _this.promisesWithProgress,
        };
        return _this;
    }
    GlobalProgressProvider.prototype.render = function () {
        return (React.createElement(exports.GlobalProgressContext.Provider, { value: this.state }, this.props.children));
    };
    GlobalProgressProvider.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    GlobalProgressProvider.prototype.start = function (steps) {
        if (steps === void 0) { steps = 1; }
        this.clearTimeouts();
        this.setState({
            started: true,
            currentStep: 0,
            steps: steps,
        });
    };
    GlobalProgressProvider.prototype.promisesWithProgress = function () {
        var _this = this;
        var promises = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            promises[_i] = arguments[_i];
        }
        this.start(promises.length);
        promises.forEach(function (p) {
            p
                .then(function (x) {
                _this.next();
                return x;
            })
                .catch(function (x) {
                _this.stop();
                return x;
            });
        });
    };
    GlobalProgressProvider.prototype.stop = function () {
        this.setState({
            started: false,
            currentStep: 0,
        });
    };
    GlobalProgressProvider.prototype.complete = function () {
        if (this.state.started) {
            this.setState(function (state) { return ({
                currentStep: state.steps,
            }); }, this.stopHandlingAnimation);
        }
    };
    GlobalProgressProvider.prototype.next = function () {
        var _this = this;
        if (this.state.started) {
            this.setState(function (state) { return ({
                currentStep: Math.min(state.currentStep + 1, state.steps),
            }); }, function () { return _this.state.currentStep === _this.state.steps && _this.stopHandlingAnimation(); });
        }
    };
    GlobalProgressProvider.prototype.stopHandlingAnimation = function () {
        var _this = this;
        this.setTimeout(function () { return _this.setState({ started: false }); }, exports.progressbarAnimationDuration);
        this.setTimeout(function () { return _this.setState({ currentStep: 0 }); }, exports.progressbarAnimationDuration * 2);
    };
    GlobalProgressProvider.prototype.setTimeout = function (fn, duration) {
        this.timeouts.push(setTimeout(fn, duration));
    };
    GlobalProgressProvider.prototype.clearTimeouts = function () {
        this.timeouts.map(clearTimeout);
        this.timeouts = [];
    };
    __decorate([
        autobind_decorator_1.default
    ], GlobalProgressProvider.prototype, "start", null);
    __decorate([
        autobind_decorator_1.default
    ], GlobalProgressProvider.prototype, "promisesWithProgress", null);
    __decorate([
        autobind_decorator_1.default
    ], GlobalProgressProvider.prototype, "stop", null);
    __decorate([
        autobind_decorator_1.default
    ], GlobalProgressProvider.prototype, "complete", null);
    __decorate([
        autobind_decorator_1.default
    ], GlobalProgressProvider.prototype, "next", null);
    return GlobalProgressProvider;
}(React.Component));
exports.default = GlobalProgressProvider;
exports.withGlobalProgress = function (Component) { return function (props) { return (React.createElement(exports.GlobalProgressContext.Consumer, null, function (other) { return React.createElement(Component, __assign({}, props, other)); })); }; };
//# sourceMappingURL=GlobalProgressContext.js.map