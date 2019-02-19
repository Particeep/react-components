"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MobileHeader_1 = require("./MobileHeader/MobileHeader");
var classnames_1 = require("classnames");
var styles_1 = require("@material-ui/styles");
exports.sidebarWith = 220;
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    rootDesktop: {
        marginLeft: exports.sidebarWith,
    },
}); });
exports.Layout = function (_a) {
    var title = _a.title, mobileBreakpoint = _a.mobileBreakpoint, children = _a.children, sidebar = _a.sidebar;
    return (React.createElement("div", null,
        React.createElement(LayoutUsingContext, { sidebar: sidebar }, children)));
};
var LayoutUsingContext = function (_a) {
    var children = _a.children, Sidebar = _a.sidebar;
    // @ts-ignore
    var classes = useStyles();
    var isMobileWidth = false;
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileHeader_1.MobileHeader, null),
        React.createElement("div", { className: classnames_1.default(classes.root, !isMobileWidth && classes.rootDesktop) },
            Sidebar && React.createElement(Sidebar, null),
            children)));
};
//# sourceMappingURL=Layout.js.map