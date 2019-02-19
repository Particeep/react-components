"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var color_1 = require("../style/color");
var classnames_1 = require("classnames");
var styles_1 = require("@material-ui/styles");
var height = 52;
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: t.mixins.gutters({
        // transition: t.transitions.create('all'),
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    }),
    i: {
        paddingRight: t.spacing.unit * 2,
        height: height,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    body: {
        flex: 1,
        paddingTop: t.spacing.unit * 2,
        paddingBottom: t.spacing.unit * 2,
    },
    _success: {
        background: '#e1ffe1',
        color: color_1.colorSuccess,
    },
    _info: {
        background: '#e1f5fe',
        color: color_1.colorInfo,
    },
    _error: {
        background: '#ffdede',
        color: color_1.colorError,
    },
    _hidden: {
        height: 0,
        minHeight: 0,
        opacity: 0,
    },
    _warning: {
        background: 'rgba(255, 128, 0, 0.13)',
        color: color_1.colorWarning,
    },
    action: {
        textAlign: 'right',
        margin: t.spacing.unit + " " + t.spacing.unit / 2 + " " + t.spacing.unit / 2 + " 0",
        marginRight: -t.spacing.unit * 2,
    }
}); });
exports.Alert = function (_a) {
    var type = _a.type, children = _a.children, icon = _a.icon, action = _a.action, deletable = _a.deletable, className = _a.className;
    // @ts-ignore
    var classes = useStyles();
    var _b = react_1.useState(true), isVisible = _b[0], setIsVisible = _b[1];
    var getIconFromType = function () {
        switch (_this.props.type) {
            case 'info':
                return 'info';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'success':
                return 'check_circle';
            default:
                return 'info';
        }
    };
    return (React.createElement("div", { className: classnames_1.default(classes.root, classes['_' + type], className, !isVisible && classes._hidden) },
        React.createElement(core_1.Icon, { className: classes.i }, icon ? icon : getIconFromType()),
        React.createElement("div", { className: classes.body }, children),
        React.createElement("div", { className: classes.action },
            action,
            deletable &&
                React.createElement(core_1.IconButton, { onClick: function () { return setIsVisible(false); } },
                    React.createElement(core_1.Icon, null, "clear")))));
};
//# sourceMappingURL=Alert.js.map