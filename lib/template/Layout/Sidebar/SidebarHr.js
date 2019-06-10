"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
    root: {
        height: 1,
        background: t.palette.divider,
    },
    rootMargin: {
        marginTop: t.spacing(1),
        marginBottom: t.spacing(1),
    }
}); });
exports.SidebarHr = function (_a) {
    var className = _a.className, margin = _a.margin;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement("div", { className: classnames_1.default(classes.root, className, margin && classes.rootMargin) }));
};
//# sourceMappingURL=SidebarHr.js.map