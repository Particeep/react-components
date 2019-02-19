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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = function (t) { return core_1.createStyles({}); };
var ExpensionStepper = /** @class */ (function (_super) {
    __extends(ExpensionStepper, _super);
    function ExpensionStepper(props) {
        var _this = _super.call(this, props) || this;
        _this.goTo = function (i) {
            if (_this.state.reached >= i)
                _this.setState({ current: i });
        };
        _this.prev = function () {
            if (_this.state.current > 0) {
                _this.setState({ current: _this.state.current - 1 });
            }
        };
        _this.next = function (data) {
            if (_this.state.current < React.Children.count(_this.props.children) - 1) {
                _this.props.onNext && _this.props.onNext(_this.state.current, data);
                _this.setState({
                    current: _this.state.current + 1,
                    reached: Math.max(_this.state.reached, _this.state.current + 1)
                });
            }
            else if (_this.props.onEnd) {
                _this.props.onEnd(data);
            }
        };
        var stepsCount = React.Children.count(_this.props.children);
        _this.state = {
            current: props.position ? Math.min(props.position, stepsCount - 1) : 0,
            reached: props.free ? stepsCount - 1 : 0,
        };
        return _this;
    }
    ExpensionStepper.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, autoScroll = _a.autoScroll, free = _a.free, onNext = _a.onNext, onEnd = _a.onEnd, children = _a.children, other = __rest(_a, ["className", "autoScroll", "free", "onNext", "onEnd", "children"]);
        return (React.createElement("div", __assign({ className: className }, other), React.Children.map(this.props.children, function (step, i) {
            return React.cloneElement(step, {
                prev: _this.prev,
                next: _this.next,
                goTo: _this.goTo,
                free: free,
                index: i,
                disabled: step.props.disabled || i > _this.state.reached,
                done: step.props.done || i < _this.state.reached,
                autoScroll: autoScroll,
                isCurrent: i == _this.state.current,
                isLast: i == React.Children.count(children) - 1
            });
        })));
    };
    return ExpensionStepper;
}(React.Component));
exports.default = core_1.withStyles(styles)(ExpensionStepper);
//# sourceMappingURL=ExpensionStepper.js.map