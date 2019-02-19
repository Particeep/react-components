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
var styles = function (t) { return core_1.createStyles({}); };
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
        };
        _this.confirm = function () {
            _this.props.onConfirm();
            _this.setState({ open: false });
        };
        return _this;
    }
    Confirm.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, title = _a.title, content = _a.content, confirmLabel = _a.confirmLabel, cancelLabel = _a.cancelLabel;
        return (React.createElement(React.Fragment, null,
            React.cloneElement(children, {
                onClick: function () { return _this.setState({ open: true }); }
            }),
            React.createElement(core_1.Dialog, { open: this.state.open },
                React.createElement(core_1.DialogTitle, null, title),
                React.createElement(core_1.DialogContent, null, content),
                React.createElement(core_1.DialogActions, null,
                    React.createElement(core_1.Button, { color: "primary", onClick: function () { return _this.setState({ open: false }); } }, cancelLabel || 'Cancel'),
                    React.createElement(core_1.Button, { color: "primary", onClick: this.confirm }, confirmLabel || 'Confirm')))));
    };
    return Confirm;
}(React.Component));
exports.default = core_1.withStyles(styles)(Confirm);
//# sourceMappingURL=Confirm.js.map