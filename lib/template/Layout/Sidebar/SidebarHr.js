"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var styles = function (t) { return core_1.createStyles({
    root: {
        height: 1,
        background: t.palette.divider,
    },
    rootMargin: {
        marginTop: t.spacing.unit,
        marginBottom: t.spacing.unit,
    }
}); };
exports.SidebarHr = core_1.withStyles(styles)(function (_a) {
    var className = _a.className, margin = _a.margin, classes = _a.classes;
    return (React.createElement("div", { className: classnames_1.default(classes.root, className, margin && classes.rootMargin) }));
});
//# sourceMappingURL=SidebarHr.js.map