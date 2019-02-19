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
var styles = function (t) { return core_1.createStyles({
    root: t.mixins.gutters({
        display: 'flex',
        alignItems: 'center',
        color: t.palette.text.secondary,
        background: t.palette.type === 'light' ? t.palette.grey[100] : t.palette.grey[900],
        paddingRight: t.spacing.unit + 'px !important',
        order: -1,
        height: 48,
    }),
    icon: {
        marginRight: t.spacing.unit * 2,
    },
    content: {
        flex: 1,
    },
}); };
var PanelHead = /** @class */ (function (_super) {
    __extends(PanelHead, _super);
    function PanelHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelHead.prototype.render = function () {
        var _a = this.props, className = _a.className, icon = _a.icon, children = _a.children, action = _a.action, classes = _a.classes;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes.root + " " + (className || '') },
                icon &&
                    React.createElement(core_1.Icon, { className: classes.icon }, icon),
                React.createElement("div", { className: classes.content }, children),
                React.createElement("div", null, action)),
            React.createElement(core_1.Divider, null)));
    };
    return PanelHead;
}(React.Component));
exports.default = core_1.withStyles(styles)(PanelHead);
//# sourceMappingURL=PanelHead.js.map