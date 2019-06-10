"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var styles = function (t) { return core_1.createStyles({
    root: {
        transition: t.transitions.create('all'),
        opacity: 0,
        transform: 'translateY(60px)',
        overflowY: 'hidden',
    },
    root_appeared: {
        opacity: 1,
        transform: 'translateY(0)',
    },
}); };
var Animate = /** @class */ (function (_super) {
    __extends(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            appeared: false,
        };
        return _this;
    }
    Animate.prototype.render = function () {
        var _a = this.props, children = _a.children, classes = _a.classes;
        return React.cloneElement(children, {
            className: classnames_1.default(classes.root, this.state.appeared && classes.root_appeared)
        });
    };
    Animate.prototype.componentDidMount = function () {
        var _this = this;
        this.timeout = setTimeout(function () { return _this.setState({ appeared: true }); }, this.props.delay || 0);
    };
    Animate.prototype.componentWillUnmount = function () {
        clearTimeout(this.timeout);
    };
    return Animate;
}(React.Component));
exports.default = core_1.withStyles(styles)(Animate);
//# sourceMappingURL=Animate.js.map