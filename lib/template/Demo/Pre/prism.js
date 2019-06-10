"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prismjs_1 = __importDefault(require("prismjs"));
require("prismjs/components/prism-css");
require("prismjs/components/prism-diff");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-markup");
require("prismjs/components/prism-typescript");
require("prismjs/themes/prism-okaidia.css");
// TODO Find a way to toggle both theme according to mui theme
// import lightTheme from 'prismjs/themes/prism.css'
// import darkTheme from 'prismjs/themes/prism-okaidia.css'
// export { lightTheme, darkTheme };
// let styleNode
//
// styleNode = document.createElement('style')
// styleNode.setAttribute('data-prism', 'true')
// if (document.head) {
//   document.head.appendChild(styleNode)
// }
// function setPrismTheme(theme) {
//   styleNode.textContent = theme
// }
//
// export function setDarkTheme() {
//   setPrismTheme(darkTheme)
// }
//
// export function setLightTheme() {
//   setPrismTheme(lightTheme)
// }
exports.default = prismjs_1.default;
//# sourceMappingURL=prism.js.map