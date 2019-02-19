"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        transition: t.transitions.create('all'),
        margin: 'auto',
        opacity: 0,
        transform: 'scale(.94)',
        maxWidth: 932,
        width: '100%',
    },
    root_appeared: {
        opacity: 1,
        transform: 'scale(1)',
    }
}); });
var timeout;
var Page = function (_a) {
    var children = _a.children, width = _a.width, _b = _a.animated, animated = _b === void 0 ? true : _b, className = _a.className, style = _a.style;
    // @ts-ignore
    var classes = useStyles();
    var _c = react_1.useState(false), appeared = _c[0], setAppeared = _c[1];
    react_1.useEffect(function () {
        if (animated)
            timeout = setTimeout(function () { return setAppeared(true); });
        return function () { return clearTimeout(timeout); };
    }, []);
    return (React.createElement("div", { className: classnames_1.default(classes.root, (!animated || appeared) && classes.root_appeared, className), style: __assign({}, (width && { maxWidth: width }), style) }, children));
};
exports.default = Page;
//# sourceMappingURL=Page.js.map