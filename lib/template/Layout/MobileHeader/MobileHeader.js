"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var React = require("react");
var Header_1 = require("../Header/Header");
var LayoutContext_1 = require("../LayoutContext");
var styles = function (t) { return core_1.createStyles({
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        boxShadow: t.shadows[3],
    },
    mock: {
        height: Header_1.headerHeight,
    },
}); };
exports.MobileHeader = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes;
    var isMobileWidth = LayoutContext_1.useLayoutContext().isMobileWidth;
    return (React.createElement(core_1.Slide, { direction: "down", in: isMobileWidth, mountOnEnter: true, unmountOnExit: true },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes.mock }),
            React.createElement(Header_1.Header, { className: classes.header }))));
});
//# sourceMappingURL=MobileHeader.js.map