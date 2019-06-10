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
        paddingTop: t.spacing(1 / 2),
        paddingBottom: t.spacing(1 / 2),
        flex: 1,
        overflowY: 'auto',
    },
}); });
exports.SidebarBody = function (_a) {
    var children = _a.children, className = _a.className;
    // @ts-ignore
    var classes = useStyles();
    return (React.createElement("main", { className: classnames_1.default(classes.root, className) }, children));
};
//# sourceMappingURL=SidebarBody.js.map