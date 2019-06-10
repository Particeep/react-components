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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var color_1 = require("../style/color");
var autobind_decorator_1 = __importDefault(require("autobind-decorator"));
var ToastContext = React.createContext({});
var styles = function (t) { return core_1.createStyles({
    iError: {
        color: t.palette.error.main,
    },
    iSuccess: {
        color: color_1.colorSuccess,
    },
    iWarning: {
        color: color_1.colorWarning,
    },
    iInfo: {
        color: color_1.colorInfo,
    },
    label: {
        marginLeft: t.spacing(2),
    }
}); };
var ToastProvider = /** @class */ (function (_super) {
    __extends(ToastProvider, _super);
    function ToastProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            type: undefined,
            message: undefined,
            open: false,
            toastError: _this.popError,
            toastSuccess: _this.popSuccess,
            toastWarning: _this.popWarning,
            toastInfo: _this.popInfo,
            toastLoading: _this.popLoading,
        };
        return _this;
    }
    ToastProvider.prototype.render = function () {
        var classes = this.props.classes;
        var _a = this.state, type = _a.type, open = _a.open, message = _a.message;
        return (React.createElement(ToastContext.Provider, { value: this.state },
            this.props.children,
            React.createElement(core_1.Snackbar, { anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, open: open, autoHideDuration: type === 'error' ? 1000000 : 6000, onClose: this.close, message: React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                    this.renderIcon(type),
                    React.createElement("span", { className: classes.label }, message)), action: React.createElement(core_1.IconButton, { onClick: this.close, color: "inherit" },
                    React.createElement(core_1.Icon, null, "close")) })));
    };
    ToastProvider.prototype.renderIcon = function (type) {
        var classes = this.props.classes;
        switch (type) {
            case 'error':
                return React.createElement(core_1.Icon, { className: classes.iError }, "error");
            case 'success':
                return React.createElement(core_1.Icon, { className: classes.iSuccess }, "check_circle");
            case 'warning':
                return React.createElement(core_1.Icon, { className: classes.iWarning }, "warning");
            case 'info':
                return React.createElement(core_1.Icon, { className: classes.iInfo }, "info");
            case 'loading':
                return React.createElement(core_1.CircularProgress, { size: 24, thickness: 5 });
            default:
                return React.createElement(React.Fragment, null);
        }
    };
    ToastProvider.prototype.pop = function (type, message) {
        this.setState({ open: true, type: type, message: message });
    };
    ToastProvider.prototype.popError = function (message) {
        this.pop('error', message);
    };
    ;
    ToastProvider.prototype.popSuccess = function (message) {
        this.pop('success', message);
    };
    ToastProvider.prototype.popWarning = function (message) {
        this.pop('warning', message);
    };
    ToastProvider.prototype.popInfo = function (message) {
        this.pop('info', message);
    };
    ToastProvider.prototype.popLoading = function (message) {
        this.pop('loading', message);
    };
    ToastProvider.prototype.close = function () {
        this.setState({ open: false });
    };
    __decorate([
        autobind_decorator_1.default
    ], ToastProvider.prototype, "popError", null);
    __decorate([
        autobind_decorator_1.default
    ], ToastProvider.prototype, "popSuccess", null);
    __decorate([
        autobind_decorator_1.default
    ], ToastProvider.prototype, "popWarning", null);
    __decorate([
        autobind_decorator_1.default
    ], ToastProvider.prototype, "popInfo", null);
    __decorate([
        autobind_decorator_1.default
    ], ToastProvider.prototype, "popLoading", null);
    __decorate([
        autobind_decorator_1.default
    ], ToastProvider.prototype, "close", null);
    return ToastProvider;
}(React.Component));
exports.default = core_1.withStyles(styles)(ToastProvider);
exports.withToast = function (Component) { return function (props) { return (React.createElement(ToastContext.Consumer, null, function (other /*WithToast*/) { return React.createElement(Component, __assign({}, props, other)); })); }; };
//# sourceMappingURL=Toast.js.map