"use strict";
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
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = require("classnames");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var LayoutContext_1 = require("../LayoutContext");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        transition: t.transitions.create('all'),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'inherit',
        paddingRight: t.spacing.unit,
        paddingLeft: t.spacing.unit * 2,
        color: t.palette.text.primary,
        minHeight: 32,
        marginTop: t.spacing.unit / 8,
        marginBottom: t.spacing.unit / 8,
        marginRight: t.spacing.unit,
        marginLeft: t.spacing.unit,
        borderRadius: 42,
    },
    rootLarge: {
        minHeight: 38,
    },
    rootClickable: {
        cursor: 'pointer',
        '&:hover': {
            background: 'rgba(0, 0, 0, .05)',
        },
    },
    rootActive: {
        color: t.palette.primary.main,
        background: colorManipulator_1.fade(t.palette.primary.main, .16),
    },
    i: {
        textAlign: 'center',
        marginRight: t.spacing.unit * 2,
    },
    label: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        fontSize: t.typography.fontSize,
        fontWeight: t.typography.fontWeightMedium,
    },
}); });
exports.SidebarItem = function (_a) {
    var href = _a.href, to = _a.to, children = _a.children, icon = _a.icon, className = _a.className, large = _a.large, other = __rest(_a, ["href", "to", "children", "icon", "className", "large"]);
    // @ts-ignore
    var classes = useStyles();
    var closeMobileSidebar = LayoutContext_1.useLayoutContext().closeMobileSidebar;
    var getClassName = function (clickable) {
        if (clickable === void 0) { clickable = true; }
        return classnames_1.default(className, classes.root, clickable && classes.rootClickable, large && classes.rootLarge);
    };
    var renderRoot = function (element) {
        return (React.createElement("div", __assign({}, other, { className: getClassName(!!other.onClick) }), element));
    };
    var renderRootNavLink = function (element, to) {
        return (React.createElement(react_router_dom_1.NavLink, __assign({}, other, { to: to, className: getClassName(), activeClassName: classes.rootActive }), element));
    };
    var renderRootHref = function (element, href) {
        return (React.createElement("a", __assign({}, other, { href: href, className: getClassName() }), element));
    };
    var content = (React.createElement(React.Fragment, null,
        icon && ((typeof icon === 'string')
            ? React.createElement(core_1.Icon, { className: classes.i }, icon)
            : React.createElement("div", { className: classnames_1.default(classes.i) }, icon)),
        React.createElement("span", { className: classes.label }, children)));
    var wrapper;
    if (to)
        wrapper = renderRootNavLink(content, to);
    else if (href)
        wrapper = renderRootHref(content, href);
    else
        wrapper = renderRoot(content);
    return (React.createElement("div", { onClick: closeMobileSidebar }, wrapper));
};
//# sourceMappingURL=SidebarItem.js.map