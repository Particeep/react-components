"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("@material-ui/core/es/index");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: t.spacing.unit * 2,
    },
    loader: {
        marginBottom: -5,
    },
}); });
exports.Panel = function (_a) {
    var className = _a.className, loading = _a.loading, children = _a.children;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement(core_1.Card, { className: classes.root + " " + (className || '') },
        loading && React.createElement(index_1.LinearProgress, { className: classes.loader }),
        children));
};
//# sourceMappingURL=Panel.js.map