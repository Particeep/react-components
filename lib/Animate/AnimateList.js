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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var index_1 = require("./index");
var AnimateList = /** @class */ (function (_super) {
    __extends(AnimateList, _super);
    function AnimateList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            appeared: false,
        };
        return _this;
    }
    AnimateList.prototype.render = function () {
        var _a = this.props, children = _a.children, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.initialDelay, initialDelay = _c === void 0 ? 0 : _c;
        return (React.createElement(React.Fragment, null, React.Children.map(children, function (child, index) {
            return React.createElement(index_1.Animate, { delay: initialDelay + index * delay }, child);
        })));
    };
    AnimateList.prototype.componentDidMount = function () {
        var _this = this;
        this.timeout = setTimeout(function () { return _this.setState({ appeared: true }); }, this.props.delay || 0);
    };
    AnimateList.prototype.componentWillUnmount = function () {
        clearTimeout(this.timeout);
    };
    return AnimateList;
}(React.Component));
exports.default = AnimateList;
//# sourceMappingURL=AnimateList.js.map