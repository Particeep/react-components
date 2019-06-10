"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
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