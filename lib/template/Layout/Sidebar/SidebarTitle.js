"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var styles = function (t) { return core_1.createStyles({
    root: {
        fontWeight: t.typography.fontWeightMedium,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: t.palette.text.disabled,
        marginBottom: t.spacing.unit * 2,
    },
}); };
exports.SidebarTitle = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, children = _a.children;
    return (React.createElement(core_1.Typography, { variant: "caption", noWrap: true, className: classes.root }, children));
});
//# sourceMappingURL=SidebarTitle.js.map