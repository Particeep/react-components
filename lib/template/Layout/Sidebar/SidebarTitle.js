"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
    root: {
        fontWeight: t.typography.fontWeightMedium,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: t.palette.text.disabled,
        marginBottom: t.spacing(2),
    }
}); });
exports.SidebarTitle = function (_a) {
    var children = _a.children;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement(core_1.Typography, { variant: "caption", noWrap: true, className: classes.root }, children));
};
//# sourceMappingURL=SidebarTitle.js.map