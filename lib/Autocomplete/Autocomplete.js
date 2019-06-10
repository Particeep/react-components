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
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("@material-ui/core");
var styles = function (t) { return core_1.createStyles({
    menu_head: {
        marginTop: -t.spacing(1),
        borderBottom: "1px solid " + t.palette.divider,
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
    },
    menu_headWithCb: {
        paddingLeft: 0,
    },
    menu_input: {
        background: 'none',
        border: 'none',
        width: '100%',
        height: 30,
        fontSize: '1rem',
        color: t.palette.text.primary,
    },
    menu_items: {
        maxHeight: 300,
        overflowY: 'auto',
        minWidth: 220,
    },
    adornment: {
        height: 20,
        color: t.palette.text.secondary,
        verticalAlign: 'top',
    }
}); };
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
            filter: undefined
        };
        _this.open = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };
        _this.close = function () {
            _this.setState({ anchorEl: null, filter: '' });
        };
        _this.handleChange = function (value) {
            var newValue;
            if (_this.props.multiple) {
                if (_this.props.value && _this.props.value.indexOf(value) === -1)
                    newValue = _this.props.value.concat(value);
                else
                    newValue = _this.props.value.filter(function (v) { return v !== value; });
            }
            else {
                _this.close();
                if (_this.props.value !== value)
                    newValue = value;
                else
                    newValue = '';
            }
            _this.props.onChange(newValue);
        };
        _this.selectAll = function (event, checked) {
            var children = _this.props.children;
            // @ts-ignore
            var values = checked ? React.Children.map(children, function (x) { return x.props.value; }) : [];
            _this.props.onChange(values);
        };
        return _this;
    }
    Autocomplete.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, multiple = _a.multiple, searchLabel = _a.searchLabel, readonly = _a.readonly, children = _a.children, classes = _a.classes, onChange = _a.onChange, other = __rest(_a, ["value", "multiple", "searchLabel", "readonly", "children", "classes", "onChange"]);
        var anchorEl = this.state.anchorEl;
        var optionsCount = React.Children.count(children);
        var filteredChildren = this.getFilteredChildren();
        return (React.createElement(React.Fragment, null,
            React.createElement(core_1.Input, __assign({}, other, { onClick: this.open, value: multiple ? value && value.join(', ') : value, disabled: readonly, inputRef: function (n) { return _this.$input = n; }, endAdornment: React.createElement(core_1.InputAdornment, { position: "end" },
                    React.createElement(core_1.Icon, { className: classes.adornment }, "arrow_drop_down")) })),
            React.createElement(core_1.Menu, { anchorEl: anchorEl, open: !!anchorEl, onClose: this.close },
                React.createElement("header", { className: classnames_1.default(classes.menu_head, multiple && classes.menu_headWithCb) },
                    multiple &&
                        React.createElement(core_1.Checkbox, { checked: !!value && value.length === optionsCount, onChange: this.selectAll, indeterminate: !!value && (value.length > 0 && value.length < optionsCount), disabled: readonly }),
                    React.createElement("input", { autoFocus: true, className: classes.menu_input, placeholder: searchLabel, style: !multiple ? { marginLeft: 12 } : {}, onChange: function (e) { return _this.setState({ filter: e.target.value }); } })),
                React.createElement("div", { className: classes.menu_items, style: { width: this.$input && this.$input.clientWidth } }, filteredChildren.map(function (x) {
                    return React.cloneElement(x, __assign({}, x.props, { multiple: multiple, checked: !!value && value.indexOf(x.props.value) !== -1, onClick: _this.handleChange }));
                })))));
    };
    Autocomplete.prototype.getFilteredChildren = function () {
        var filter = this.state.filter;
        // @ts-ignore
        var items = React.Children.map(this.props.children, function (x) { return x; });
        if (filter && filter !== '')
            return items.filter(function (x) { return x.props.value.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
        return items;
    };
    return Autocomplete;
}(React.Component));
var mapProps = function (Component) { return function (props) { return React.createElement(Component, __assign({}, props, { value: !Array.isArray(props.value) ? [props.value] : props.value })); }; };
exports.default = core_1.withStyles(styles)(mapProps(Autocomplete));
//# sourceMappingURL=Autocomplete.js.map