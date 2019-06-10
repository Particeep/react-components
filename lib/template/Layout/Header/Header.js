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
var core_1 = require("@material-ui/core");
var React = __importStar(require("react"));
var LayoutContext_1 = require("../LayoutContext");
var classnames_1 = __importDefault(require("classnames"));
var IconBtn_1 = require("../../../IconBtn/IconBtn");
var styles_1 = require("@material-ui/styles");
exports.headerHeight = 52;
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
    root: {
        height: exports.headerHeight,
        display: 'flex',
        alignItems: 'center',
        paddingRight: t.spacing(2),
        paddingLeft: t.spacing(1) + 2,
        background: t.palette.background.paper,
    },
    hidden: {
        visibility: 'hidden',
    },
    title: {
        flex: 1,
        fontSize: t.typography.h6.fontSize,
    }
}); });
exports.Header = function (_a) {
    var className = _a.className;
    // @ts-ignore
    var classes = useStyles();
    var _b = LayoutContext_1.useLayoutContext(), title = _b.title, isMobileWidth = _b.isMobileWidth, isMobileSidebarOpened = _b.isMobileSidebarOpened, toggleMobileSidebar = _b.toggleMobileSidebar;
    return (React.createElement("header", { className: classnames_1.default(classes.root, className) },
        React.createElement(IconBtn_1.IconBtn, { onClick: toggleMobileSidebar, className: isMobileWidth ? '' : classes.hidden },
            React.createElement(core_1.Icon, null, isMobileSidebarOpened ? 'clear' : 'menu')),
        React.createElement("div", { className: classes.title }, title)));
};
//# sourceMappingURL=Header.js.map