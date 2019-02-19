"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var color_1 = require("../style/color");
var classnames_1 = require("classnames");
var height = 52;
var styles = function (t) { return core_1.createStyles({
    root: t.mixins.gutters({
        transition: t.transitions.create('all'),
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
}); };
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isVisible: true,
        };
        _this.getIconFromType = function () {
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
        return _this;
    }
    Alert.prototype.render = function () {
        var _this = this;
        var _a = this.props, type = _a.type, children = _a.children, icon = _a.icon, classes = _a.classes, action = _a.action, deletable = _a.deletable, className = _a.className;
        return (React.createElement("div", { className: classnames_1.default(classes.root, classes['_' + type], className, !this.state.isVisible && classes._hidden) },
            React.createElement(core_1.Icon, { className: classes.i }, icon ? icon : this.getIconFromType()),
            React.createElement("div", { className: classes.body }, children),
            React.createElement("div", { className: classes.action },
                action,
                deletable &&
                    React.createElement(core_1.IconButton, { onClick: function () { return _this.setState({ isVisible: false }); } },
                        React.createElement(core_1.Icon, null, "clear")))));
    };
    return Alert;
}(React.Component));
exports.default = core_1.withStyles(styles)(Alert);
//# sourceMappingURL=Alert.js.map