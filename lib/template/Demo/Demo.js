"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var React = __importStar(require("react"));
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var Pre_1 = require("./Pre/Pre");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
    root: {
        boxShadow: t.shadows[1],
        borderRadius: 4,
        background: t.palette.background.default,
        overflow: 'auto',
        marginTop: t.spacing(2),
        marginBottom: t.spacing(3),
    },
    head: {
        margin: t.spacing(1) + "px " + t.spacing(2) + "px " + t.spacing(1 / 2) + "px " + t.spacing(2) + "px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    wrapper: {
        margin: t.spacing(1),
        padding: t.spacing(2),
        background: t.palette.background.paper,
    }
}); });
var parseComponentCode = function (code) { return code.replace(/\n\s*\/\/\s*@ts-ignore\s*?\n/, '\n'); };
exports.Demo = function (_a) {
    var Component = _a.component, raw = _a.raw, reloadable = _a.reloadable;
    // @ts-ignore
    var classes = useStyles();
    var _b = react_1.useState(false), codeOpened = _b[0], setCodeOponed = _b[1];
    var _c = react_1.useState(true), show = _c[0], setShow = _c[1];
    var _d = react_1.useState(undefined), containetHeight = _d[0], setContainetHeight = _d[1];
    var componentContainer = React.createRef();
    var reload = function () {
        if (!containetHeight) {
            setContainetHeight(componentContainer.current.offsetHeight - 32);
        }
        setShow(false);
        setTimeout(function () { return setShow(true); });
    };
    return (React.createElement("section", { className: classes.root },
        React.createElement("div", { className: classes.head },
            reloadable &&
                React.createElement(core_1.IconButton, { disabled: !show, onClick: reload },
                    React.createElement(core_1.Icon, null, "refresh")),
            React.createElement(core_1.IconButton, { color: codeOpened ? 'primary' : undefined, onClick: function () { return setCodeOponed(!codeOpened); } },
                React.createElement(core_1.Icon, null, "code"))),
        React.createElement(core_1.Collapse, { in: codeOpened, unmountOnExit: true },
            React.createElement(Pre_1.Pre, { raw: parseComponentCode(raw), style: { margin: 0, borderRadius: 0 } })),
        React.createElement("div", { className: classes.wrapper, ref: componentContainer, style: { height: containetHeight } }, show && React.createElement(Component, null))));
};
//# sourceMappingURL=Demo.js.map