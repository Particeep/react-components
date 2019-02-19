"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var React = require("react");
var LayoutContext_1 = require("../LayoutContext");
var classnames_1 = require("classnames");
var IconBtn_1 = require("../../../IconBtn/IconBtn");
var styles_1 = require("@material-ui/styles");
exports.headerHeight = 52;
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        height: exports.headerHeight,
        display: 'flex',
        alignItems: 'center',
        paddingRight: t.spacing.unit * 2,
        paddingLeft: t.spacing.unit + 2,
        background: t.palette.background.paper,
    },
    hidden: {
        visibility: 'hidden',
    },
    title: {
        flex: 1,
        fontSize: t.typography.title.fontSize,
    }
}); });
exports.Header = function (_a) {
    var classes = _a.classes, className = _a.className;
    var _b = LayoutContext_1.useLayoutContext(), title = _b.title, isMobileWidth = _b.isMobileWidth, isMobileSidebarOpened = _b.isMobileSidebarOpened, toggleMobileSidebar = _b.toggleMobileSidebar;
    return (React.createElement("header", { className: classnames_1.default(classes.root, className) },
        React.createElement(IconBtn_1.IconBtn, { onClick: toggleMobileSidebar, className: isMobileWidth ? '' : classes.hidden },
            React.createElement(core_1.Icon, null, isMobileSidebarOpened ? 'clear' : 'menu')),
        React.createElement("div", { className: classes.title }, title)));
};
//# sourceMappingURL=Header.js.map