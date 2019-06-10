"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
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
var prism_1 = __importDefault(require("./prism"));
var classnames_1 = __importDefault(require("classnames"));
exports.Pre = function (_a) {
    var raw = _a.raw, style = _a.style, className = _a.className;
    return (React.createElement("pre", { className: classnames_1.default('language-javascript', className), style: __assign({ whiteSpace: 'pre-wrap', margin: '1em 0', fontSize: 13, borderRadius: 4 }, style) },
        React.createElement("code", { style: { padding: 0 }, className: "markdown-body", dangerouslySetInnerHTML: { __html: prism_1.default.highlight(raw, prism_1.default.languages.javascript, 'typescript') } })));
};
//# sourceMappingURL=Pre.js.map