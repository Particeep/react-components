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
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
// npm install git://github.com/com:alexandreannic/mui-extension.git#refacto/materialUI4 --save
var useStyles = styles_1.makeStyles(function (t) { return styles_1.createStyles({
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    label: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        height: '16px !important',
        lineHeight: '16px !important',
        fontSize: '22px !important',
        marginRight: t.spacing(1)
    },
    iconAfter: {
        marginRight: 0,
        marginLeft: t.spacing(1),
    },
    labelHidden: {
        visibility: 'hidden',
    }
}); });
exports.Btn = function (_a) {
    var loading = _a.loading, children = _a.children, disabled = _a.disabled, icon = _a.icon, iconAfter = _a.iconAfter, props = __rest(_a, ["loading", "children", "disabled", "icon", "iconAfter"]);
    var classes = useStyles({});
    return (React.createElement(core_1.Button, __assign({}, props, { disabled: disabled || loading }),
        React.createElement("div", { className: classnames_1.default(classes.label, loading && classes.labelHidden) },
            icon && React.createElement(core_1.Icon, { className: classes.icon }, icon),
            children,
            iconAfter && React.createElement(core_1.Icon, { className: classnames_1.default(classes.icon, classes.iconAfter) }, iconAfter)),
        loading && React.createElement(core_1.CircularProgress, { size: 24, className: classes.progress })));
};
//# sourceMappingURL=Btn.js.map