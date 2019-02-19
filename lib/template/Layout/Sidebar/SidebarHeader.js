"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var styles = function (t) { return core_1.createStyles({
    root: {
        paddingTop: t.spacing.unit / 2,
        paddingBottom: t.spacing.unit / 2,
        borderTop: '1px solid ' + t.palette.divider,
        borderBottom: '1px solid ' + t.palette.divider,
    },
}); };
exports.SidebarHeader = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, className = _a.className, children = _a.children;
    return (React.createElement("header", { className: classnames_1.default(classes.root, className) }, children));
});
//# sourceMappingURL=SidebarHeader.js.map