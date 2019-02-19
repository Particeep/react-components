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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Mask_1 = require("./Mask");
var core_1 = require("@material-ui/core");
var InputDate = /** @class */ (function (_super) {
    __extends(InputDate, _super);
    function InputDate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask = function (props) {
            return React.createElement(Mask_1.default, __assign({}, props, { format: _this.props.format }));
        };
        return _this;
    }
    InputDate.prototype.render = function () {
        return (React.createElement(core_1.Input, __assign({}, this.props, { inputComponent: this.mask })));
    };
    return InputDate;
}(React.Component));
exports.default = InputDate;
//# sourceMappingURL=InputDate.js.map