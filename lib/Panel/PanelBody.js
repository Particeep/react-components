"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: t.mixins.gutters({
        paddingTop: t.spacing.unit * 2,
        paddingBottom: t.spacing.unit * 2,
        '&:last-child': {
            paddingBottom: t.spacing.unit * 3,
        },
    }),
}); });
exports.PanelBody = function (_a) {
    var children = _a.children, className = _a.className;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root + " " + (className || '') }, children));
};
//# sourceMappingURL=PanelBody.js.map