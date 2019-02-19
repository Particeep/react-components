"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var core_1 = require("@material-ui/core");
exports.Confirm = function (_a) {
    var children = _a.children, title = _a.title, content = _a.content, confirmLabel = _a.confirmLabel, cancelLabel = _a.cancelLabel;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var confirm = function () {
        _this.props.onConfirm();
        _this.setState({ open: false });
    };
    return (React.createElement(React.Fragment, null,
        React.cloneElement(children, {
            onClick: function () { return _this.setState({ open: true }); }
        }),
        React.createElement(core_1.Dialog, { open: _this.state.open },
            React.createElement(core_1.DialogTitle, null, title),
            React.createElement(core_1.DialogContent, null, content),
            React.createElement(core_1.DialogActions, null,
                React.createElement(core_1.Button, { color: "primary", onClick: function () { return _this.setState({ open: false }); } }, cancelLabel || 'Cancel'),
                React.createElement(core_1.Button, { color: "primary", onClick: _this.confirm }, confirmLabel || 'Confirm')))));
};
//# sourceMappingURL=Confirm.js.map