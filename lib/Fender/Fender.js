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
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var color_1 = require("../style/color");
var iconSize = 70;
var styles = function (t) { return core_1.createStyles({
    root: {
        transition: t.transitions.create('all'),
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        color: color_1.colorError
    },
    empty: {
        color: t.palette.text.disabled
    },
    warning: {
        color: color_1.colorWarning
    },
    success: {
        color: color_1.colorSuccess
    },
    i: {
        fontSize: iconSize,
    },
    p: {
        marginTop: t.spacing.unit,
    }
}); };
var Fender = /** @class */ (function (_super) {
    __extends(Fender, _super);
    function Fender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = function (name) { return React.createElement(core_1.Icon, { className: _this.props.classes.i }, name); };
        return _this;
    }
    Fender.prototype.render = function () {
        var _a = this.props, type = _a.type, classes = _a.classes, className = _a.className, style = _a.style;
        return (React.createElement("div", { className: classnames_1.default(classes.root, className), style: style },
            React.createElement("div", { className: classes[type] },
                React.createElement("div", null, this.getIcon()),
                React.createElement("div", { className: classes.p }, this.props.children))));
    };
    Fender.prototype.getIcon = function () {
        var _a = this.props, icon = _a.icon, type = _a.type;
        if (icon)
            return this.icon(icon);
        switch (type) {
            case 'empty':
                return this.icon('do_not_disturb');
            case 'error':
                return this.icon('error');
            case 'success':
                return this.icon('check_circle');
            case 'warning':
                return this.icon('warning');
            case 'loading':
                return React.createElement(core_1.CircularProgress, { size: iconSize });
        }
    };
    Fender.defaultProps = {
        type: 'empty'
    };
    return Fender;
}(React.Component));
exports.default = core_1.withStyles(styles)(Fender);
//# sourceMappingURL=Fender.js.map