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
var index_1 = require("@material-ui/core/es/index");
var core_1 = require("@material-ui/core");
var styles = function (t) { return core_1.createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: t.spacing.unit * 2,
    },
    loader: {
        marginBottom: -5,
    },
}); };
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement(core_1.Card, { className: classes.root + " " + (this.props.className || '') },
            this.props.loading && React.createElement(index_1.LinearProgress, { className: classes.loader }),
            this.props.children));
    };
    return Panel;
}(React.Component));
exports.default = core_1.withStyles(styles)(Panel);
//# sourceMappingURL=Panel.js.map