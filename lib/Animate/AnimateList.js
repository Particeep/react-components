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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
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
        var _a = this.props, children = _a.children, delay = _a.delay, initialDelay = _a.initialDelay;
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