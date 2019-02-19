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
var core_1 = require("@material-ui/core");
var TableSortCell = /** @class */ (function (_super) {
    __extends(TableSortCell, _super);
    function TableSortCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableSortCell.prototype.render = function () {
        var _a = this.props, name = _a.name, active = _a.active, orderBy = _a.orderBy, onSort = _a.onSort, children = _a.children;
        return (React.createElement(core_1.TableCell, { sortDirection: false }, name ? (React.createElement(core_1.TableSortLabel, { active: active, direction: orderBy, onClick: onSort }, children)) : (children)));
    };
    return TableSortCell;
}(React.Component));
exports.default = TableSortCell;
//# sourceMappingURL=TableSortCell.js.map