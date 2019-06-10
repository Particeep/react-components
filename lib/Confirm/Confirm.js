"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var core_1 = require("@material-ui/core");
exports.Confirm = function (_a) {
    var children = _a.children, title = _a.title, content = _a.content, confirmLabel = _a.confirmLabel, cancelLabel = _a.cancelLabel, onConfirm = _a.onConfirm;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var confirm = function () {
        if (onConfirm)
            onConfirm();
        setOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.cloneElement(children, {
            onClick: function () { return setOpen(true); }
        }),
        React.createElement(core_1.Dialog, { open: open },
            React.createElement(core_1.DialogTitle, null, title),
            React.createElement(core_1.DialogContent, null, content),
            React.createElement(core_1.DialogActions, null,
                React.createElement(core_1.Button, { color: "primary", onClick: function () { return setOpen(false); } }, cancelLabel || 'Cancel'),
                React.createElement(core_1.Button, { color: "primary", onClick: confirm }, confirmLabel || 'Confirm')))));
};
//# sourceMappingURL=Confirm.js.map