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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_text_mask_1 = require("react-text-mask");
var getDateFormatSeparator = function (dateFormat) {
    if (dateFormat.indexOf('/') >= 0)
        return '/';
    if (dateFormat.indexOf('-') >= 0)
        return '-';
    if (dateFormat.indexOf('.') >= 0)
        return '.';
    return '/';
};
var Mask = /** @class */ (function (_super) {
    __extends(Mask, _super);
    function Mask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mask.prototype.render = function () {
        var _a = this.props, format = _a.format, inputRef = _a.inputRef, other = __rest(_a, ["format", "inputRef"]);
        return (React.createElement(react_text_mask_1.default, __assign({}, other, { ref: inputRef, mask: this.buildMask(format), placeholder: format })));
    };
    Mask.prototype.buildMask = function (format) {
        var delimiter = getDateFormatSeparator(format);
        var yearRegex = [/[1-2]/, /\d/, /\d/, /\d/];
        var monthRegex = [/[0-1]/, /\d/];
        var dayRegex = [/[0-3]/, /\d/];
        var mask = format.split(new RegExp("(\\" + delimiter + ")", 'g'));
        mask = this.replace(mask, 'yyyy', yearRegex);
        mask = this.replace(mask, 'mm', monthRegex);
        mask = this.replace(mask, 'dd', dayRegex);
        return mask;
    };
    Mask.prototype.replace = function (array, string, replacement) {
        var i = array.indexOf(string);
        if (i != null)
            array.splice.apply(array, [i, 1].concat(replacement));
        return array;
    };
    Mask.defaultProps = {
        format: 'dd/mm/yyyy'
    };
    return Mask;
}(React.Component));
exports.default = Mask;
//# sourceMappingURL=Mask.js.map