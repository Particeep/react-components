"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var MobileHeader_1 = require("./MobileHeader/MobileHeader");
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
var LayoutContext_1 = require("./LayoutContext");
exports.sidebarWith = 220;
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
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
    return (React.createElement(LayoutContext_1.LayoutProvider, { title: title, mobileBreakpoint: mobileBreakpoint },
        React.createElement(LayoutUsingContext, { sidebar: sidebar }, children)));
};
var LayoutUsingContext = function (_a) {
    var children = _a.children, Sidebar = _a.sidebar;
    // @ts-ignore
    var classes = useStyles();
    var isMobileWidth = LayoutContext_1.useLayoutContext().isMobileWidth;
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileHeader_1.MobileHeader, null),
        React.createElement("div", { className: classnames_1.default(classes.root, !isMobileWidth && classes.rootDesktop) },
            Sidebar && React.createElement(Sidebar, null),
            children)));
};
//# sourceMappingURL=Layout.js.map