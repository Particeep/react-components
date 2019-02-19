"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var styles = function (t) { return core_1.createStyles({
    root: {
        paddingTop: t.spacing.unit / 2,
        paddingBottom: t.spacing.unit / 2,
        flex: 1,
        overflowY: 'auto',
    },
}); };
exports.SidebarBody = core_1.withStyles(styles)(function (_a) {
    var children = _a.children, classes = _a.classes, className = _a.className;
    return (React.createElement("main", { className: classnames_1.default(classes.root, className) }, children));
});
//# sourceMappingURL=SidebarBody.js.map