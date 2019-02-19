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
        paddingTop: t.spacing.unit * 2,
        paddingBottom: t.spacing.unit * 2,
        '&:last-child': {
            paddingBottom: t.spacing.unit * 3,
        },
    }),
}); };
var PanelBody = /** @class */ (function (_super) {
    __extends(PanelBody, _super);
    function PanelBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBody.prototype.render = function () {
        var _a = this.props, children = _a.children, classes = _a.classes, className = _a.className;
        return (React.createElement("div", { className: classes.root + " " + (className || '') }, children));
    };
    return PanelBody;
}(React.Component));
exports.default = core_1.withStyles(styles)(PanelBody);
//# sourceMappingURL=PanelBody.js.map