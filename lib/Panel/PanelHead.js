"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: t.mixins.gutters({
        display: 'flex',
        alignItems: 'center',
        color: t.palette.text.secondary,
        background: t.palette.type === 'light' ? t.palette.grey[100] : t.palette.grey[900],
        paddingRight: t.spacing.unit + 'px !important',
        order: -1,
        height: 48,
    }),
    icon: {
        marginRight: t.spacing.unit * 2,
    },
    content: {
        flex: 1,
    },
}); });
exports.PanelHead = function (_a) {
    var className = _a.className, icon = _a.icon, children = _a.children, action = _a.action;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.root + " " + (className || '') },
            icon &&
                React.createElement(core_1.Icon, { className: classes.icon }, icon),
            React.createElement("div", { className: classes.content }, children),
            React.createElement("div", null, action)),
        React.createElement(core_1.Divider, null)));
};
//# sourceMappingURL=PanelHead.js.map