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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var autobind_decorator_1 = __importDefault(require("autobind-decorator"));
var TableSort = /** @class */ (function (_super) {
    __extends(TableSort, _super);
    function TableSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableSort.prototype.render = function () {
        var _this = this;
        var _a = this.props, orderBy = _a.orderBy, sortBy = _a.sortBy, children = _a.children;
        return (React.createElement(core_1.TableHead, null,
            React.createElement(core_1.TableRow, null, React.Children.toArray(children).map(function (step) {
                return React.cloneElement(step, __assign({ active: step.props.name === sortBy, orderBy: orderBy }, (step.props.name && { onSort: _this.sort(step.props.name) })));
            }))));
    };
    TableSort.prototype.sort = function (name) {
        var _this = this;
        return function () {
            var _a = _this.props, sortBy = _a.sortBy, orderBy = _a.orderBy;
            var newOrderBy = (name === sortBy && orderBy === 'asc')
                ? 'desc'
                : 'asc';
            _this.props.onSort(name, newOrderBy);
        };
    };
    __decorate([
        autobind_decorator_1.default
    ], TableSort.prototype, "sort", null);
    return TableSort;
}(React.Component));
exports.default = TableSort;
//# sourceMappingURL=TableSort.js.map