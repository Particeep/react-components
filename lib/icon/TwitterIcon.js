"use strict";
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
/* eslint-disable max-len */
var React = __importStar(require("react"));
var SvgIcon_1 = __importDefault(require("@material-ui/core/SvgIcon"));
var TwitterIcon = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(SvgIcon_1.default, __assign({ className: className }, props),
        React.createElement("path", { d: "M7.6 21.63c8.95 0 13.84-7.4 13.84-13.84v-.63c.94-.7 1.76-1.55 2.4-2.52-.86.38-1.8.64-2.78.76 1-.6 1.78-1.54 2.14-2.68-.94.56-1.98.96-3.1 1.18-.88-.94-2.14-1.53-3.54-1.53-2.7 0-4.86 2.17-4.86 4.86 0 .38.04.75.12 1.1C7.78 8.14 4.2 6.2 1.8 3.27c-.42.72-.66 1.55-.66 2.44 0 1.7.86 3.18 2.16 4.05-.8-.02-1.55-.24-2.2-.6v.05c0 2.36 1.67 4.33 3.9 4.77-.4.1-.84.17-1.28.17-.32 0-.62-.03-.92-.08.62 1.93 2.42 3.33 4.55 3.37-1.67 1.3-3.76 2.1-6.04 2.1-.4 0-.77-.04-1.15-.08 2.15 1.38 4.7 2.18 7.45 2.18" }));
};
exports.default = TwitterIcon;
//# sourceMappingURL=TwitterIcon.js.map