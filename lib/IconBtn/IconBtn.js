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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = function (t) { return core_1.createStyles({}); };
var IconBtn = /** @class */ (function (_super) {
    __extends(IconBtn, _super);
    function IconBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconBtn.prototype.render = function () {
        var _a = this.props, loading = _a.loading, classes = _a.classes, children = _a.children, disabled = _a.disabled, props = __rest(_a, ["loading", "classes", "children", "disabled"]);
        return (React.createElement(core_1.IconButton, __assign({}, props, { disabled: disabled || loading }), loading ? React.createElement(core_1.CircularProgress, { size: 24 }) : children));
    };
    return IconBtn;
}(React.Component));
exports.default = core_1.withStyles(styles)(IconBtn);
//# sourceMappingURL=IconBtn.js.map