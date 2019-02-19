"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        height: 1,
        background: t.palette.divider,
    },
    rootMargin: {
        marginTop: t.spacing.unit,
        marginBottom: t.spacing.unit,
    }
}); });
exports.SidebarHr = function (_a) {
    var className = _a.className, margin = _a.margin;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement("div", { className: classnames_1.default(classes.root, className, margin && classes.rootMargin) }));
};
//# sourceMappingURL=SidebarHr.js.map