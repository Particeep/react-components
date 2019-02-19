"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        paddingTop: t.spacing.unit / 2,
        paddingBottom: t.spacing.unit / 2,
        borderTop: '1px solid ' + t.palette.divider,
        borderBottom: '1px solid ' + t.palette.divider,
    },
}); });
exports.SidebarHeader = function (_a) {
    var className = _a.className, children = _a.children;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement("header", { className: classnames_1.default(classes.root, className) }, children));
};
//# sourceMappingURL=SidebarHeader.js.map