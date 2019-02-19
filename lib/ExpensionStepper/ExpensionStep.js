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
var color_1 = require("../style/color");
var classnames_1 = require("classnames");
var animationDuration = 300;
var styles = function (t) { return core_1.createStyles({
    root: {
        '&:not(:first-of-type)': {
            borderTop: "1px solid " + t.palette.divider,
        }
    },
    header: {
        transition: t.transitions.create('all'),
        padding: "0 " + t.spacing.unit * 3 + "px",
        height: 68,
        display: 'flex',
        alignItems: 'center',
        fontSize: t.typography.subheading.fontSize,
    },
    headerCurrent: {
        fontSize: t.typography.title.fontSize,
    },
    headerClickable: {
        cursor: 'pointer',
        '&:hover': {
            background: t.palette.background.default,
        }
    },
    i: {
        fontWeight: t.typography.fontWeightMedium,
        borderRadius: '50%',
        color: color_1.colorSuccess,
        marginRight: t.spacing.unit,
    },
    body: {
        transition: t.transitions.create('all'),
        overflow: 'hidden',
    },
    content: {
        padding: "0 " + t.spacing.unit * 3 + "px " + t.spacing.unit * 3 + "px " + t.spacing.unit * 3 + "px"
    }
}); };
var ExpensionStep = /** @class */ (function (_super) {
    __extends(ExpensionStep, _super);
    function ExpensionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isClickable = function () {
            var _a = _this.props, isCurrent = _a.isCurrent, disabled = _a.disabled;
            return !isCurrent && !disabled;
        };
        _this.scrollTop = function () {
            _this.$root.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        return _this;
    }
    ExpensionStep.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, done = _a.done, free = _a.free, isCurrent = _a.isCurrent, index = _a.index, label = _a.label, component = _a.component, goTo = _a.goTo, classes = _a.classes, prev = _a.prev, next = _a.next, isLast = _a.isLast, className = _a.className, autoScroll = _a.autoScroll, other = __rest(_a, ["disabled", "done", "free", "isCurrent", "index", "label", "component", "goTo", "classes", "prev", "next", "isLast", "className", "autoScroll"]);
        return (React.createElement("div", __assign({ className: classnames_1.default(classes.root, className), ref: function (node) { return _this.$root = node; } }, other),
            React.createElement("header", { className: classnames_1.default(classes.header, isCurrent && classes.headerCurrent, this.isClickable() && classes.headerClickable), onClick: function () { return goTo(index); } },
                !free && done && !isCurrent && React.createElement(core_1.Icon, { className: classes.i }, "check"),
                !free && React.createElement(React.Fragment, null,
                    index + 1,
                    ". "),
                label),
            React.createElement(core_1.Collapse, { in: isCurrent, timeout: animationDuration, className: classes.body },
                React.createElement("div", { className: classes.content }, React.cloneElement(component, { prev: prev, next: next, goTo: goTo, free: free, index: index, disabled: disabled, done: done, isCurrent: isCurrent, isLast: isLast })))));
    };
    ExpensionStep.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a = this.props, autoScroll = _a.autoScroll, isCurrent = _a.isCurrent;
        if (autoScroll && !prevProps.isCurrent && isCurrent)
            setTimeout(function () { return _this.scrollTop(); }, animationDuration);
    };
    return ExpensionStep;
}(React.Component));
exports.default = core_1.withStyles(styles)(ExpensionStep);
//# sourceMappingURL=ExpensionStep.js.map