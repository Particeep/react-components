"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var GlobalProgressContext_1 = require("./GlobalProgressContext");
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
var progressbarColor = function (t) {
    console.log(t);
    return t.palette.primary.main;
};
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        visibility: 'visible',
        opacity: 1,
        transition: 'all 400ms',
        zIndex: 9999,
    },
    progress: {
        background: progressbarColor(t),
        boxShadow: "0 0 10px " + progressbarColor(t) + ", 0 0 5px " + progressbarColor(t),
        height: 2,
        transition: t.transitions.create('all', { duration: GlobalProgressContext_1.progressbarAnimationDuration }),
    },
    progressHide: {
        height: '0px !important',
    },
}); });
var INITIAL_PERCENT = 10;
var GlobalProgressBar = function (_a) {
    var className = _a.className, style = _a.style, styleProgress = _a.styleProgress;
    var classes = useStyles('');
    var _b = GlobalProgressContext_1.useGlobalProgressState(), currentStep = _b.currentStep, steps = _b.steps, started = _b.started;
    var getPercent = function () { return INITIAL_PERCENT + (100 - INITIAL_PERCENT) / steps * currentStep; };
    return (React.createElement("div", { className: classes.root, style: style },
        React.createElement("div", { className: classnames_1.default(classes.progress, !started && classes.progressHide), style: __assign({}, styleProgress, { width: getPercent() + '%' }) })));
};
exports.default = GlobalProgressBar;
//# sourceMappingURL=GlobalProgressBar.js.map