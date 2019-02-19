"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var color_1 = require("../style/color");
var styles_1 = require("@material-ui/styles");
var iconSize = 70;
var useStyles = styles_1.makeStyles(function (t) { return ({
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
}); });
exports.Fender = function (_a) {
    var children = _a.children, icon = _a.icon, _b = _a.type, type = _b === void 0 ? 'empty' : _b, className = _a.className, style = _a.style;
    // @ts-ignore
    var classes = useStyles();
    var getIcon = function () {
        if (icon)
            return renderIcon(icon);
        switch (type) {
            case 'empty':
                return renderIcon('do_not_disturb');
            case 'error':
                return renderIcon('error');
            case 'success':
                return renderIcon('check_circle');
            case 'warning':
                return renderIcon('warning');
            case 'loading':
                return React.createElement(core_1.CircularProgress, { size: iconSize });
        }
    };
    var renderIcon = function (name) { return React.createElement(core_1.Icon, { className: classes.i }, name); };
    return (React.createElement("div", { className: classnames_1.default(classes.root, className), style: style },
        React.createElement("div", { className: classes[type] },
            React.createElement("div", null, getIcon()),
            React.createElement("div", { className: classes.p }, children))));
};
//# sourceMappingURL=Fender.js.map