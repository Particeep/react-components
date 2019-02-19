"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var MobileHeader_1 = require("./MobileHeader/MobileHeader");
var classnames_1 = require("classnames");
exports.sidebarWith = 220;
var styles = function (t) { return core_1.createStyles({
    root: {
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    rootDesktop: {
        marginLeft: exports.sidebarWith,
    },
}); };
exports.Layout = function (_a) {
    var title = _a.title, mobileBreakpoint = _a.mobileBreakpoint, children = _a.children, sidebar = _a.sidebar;
    console.log('LAYOUT');
    return (React.createElement("div", null,
        React.createElement(LayoutUsingContext, { sidebar: sidebar }, children)));
};
var LayoutUsingContext = core_1.withStyles(styles)(function (_a) {
    var children = _a.children, classes = _a.classes, Sidebar = _a.sidebar;
    var isMobileWidth = false;
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileHeader_1.MobileHeader, null),
        React.createElement("div", { className: classnames_1.default(classes.root, !isMobileWidth && classes.rootDesktop) },
            Sidebar && React.createElement(Sidebar, null),
            children)));
});
//# sourceMappingURL=Layout.js.map