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
var core_1 = require("@material-ui/core");
var AutocompleteItem = /** @class */ (function (_super) {
    __extends(AutocompleteItem, _super);
    function AutocompleteItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutocompleteItem.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled, multiple = _a.multiple, value = _a.value, children = _a.children, onClick = _a.onClick;
        return (React.createElement(core_1.MenuItem, { onClick: function () { return onClick(value); }, style: { paddingLeft: 0 }, disabled: disabled },
            multiple
                ? React.createElement(core_1.Checkbox, { disabled: disabled, checked: checked })
                : React.createElement(core_1.Radio, { disabled: disabled, checked: checked }),
            children));
    };
    return AutocompleteItem;
}(React.Component));
exports.default = AutocompleteItem;
//# sourceMappingURL=AutocompleteItem.js.map