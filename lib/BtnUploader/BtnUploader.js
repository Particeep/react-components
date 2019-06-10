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
var React = __importStar(require("react"));
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var Btn_1 = require("../Btn");
var color_1 = require("../style/color");
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function (t) { return core_1.createStyles({
    root: {
        minHeight: 40,
        display: 'flex',
        alignItems: 'center',
    },
    doc: {},
    doc_i: {
        color: t.palette.text.secondary,
        fontSize: t.typography.subtitle1.fontSize,
    },
    doc_progress: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    docUploading: {
        color: t.palette.text.disabled,
    },
    error: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: t.spacing(1),
        color: color_1.colorError,
        padding: t.spacing(1) + " " + t.spacing(2),
        borderRadius: 2,
    },
    error_i: {
        marginRight: t.spacing(1)
    },
    error_reset: {
        marginLeft: t.spacing(1),
        cursor: 'pointer',
    }
}); });
var defaultMsg = {
    loading: 'Loading...',
    upload: 'Upload',
    invalidSize: 'File is too big',
};
// TODO(Alex) Fix wierd typing issue (it works for <Btn>)
exports.BtnUploader = function (_a) {
    var document = _a.document, uploading = _a.uploading, _b = _a.msg, msg = _b === void 0 ? defaultMsg : _b, onUpload = _a.onUpload, onDelete = _a.onDelete, maxUploadFileSize = _a.maxUploadFileSize, other = __rest(_a, ["document", "uploading", "msg", "onUpload", "onDelete", "maxUploadFileSize"]);
    // @ts-ignore
    var classes = useStyles();
    var _c = react_1.useState(undefined), errorMessage = _c[0], setErrorMessage = _c[1];
    var fileInputEl = react_1.useRef(null);
    var openFileSelection = function () {
        fileInputEl.current.click();
    };
    var handleChange = function (files) {
        if (!files) {
            return;
        }
        var file = files[0];
        // const {maxUploadFileSize, onUpload, msg} = props
        if (maxUploadFileSize && file.size > maxUploadFileSize * 1024 * 1024) {
            setErrorMessage(msg.invalidSize);
            return;
        }
        onUpload(file);
    };
    var clear = function () {
        onDelete();
    };
    var renderBody = function () {
        if (uploading) {
            return (React.createElement(core_1.Chip, { className: classnames_1.default(classes.doc, classes.docUploading), label: msg.loading, avatar: React.createElement(core_1.Avatar, null,
                    React.createElement(core_1.CircularProgress, { size: 32, className: classes.doc_progress }),
                    React.createElement(core_1.Icon, { className: classes.doc_i }, "insert_drive_file")) }));
        }
        else {
            if (document) {
                return (React.createElement(core_1.Chip, { className: classes.doc, label: document.name, onDelete: clear, onClick: function () { return window.open(document.permalink, '_blank'); }, avatar: React.createElement(core_1.Avatar, null,
                        React.createElement(core_1.Icon, { className: classes.doc_i }, "insert_drive_file")) }));
            }
            else {
                return (React.createElement(Btn_1.Btn, __assign({ color: "primary", onClick: openFileSelection, icon: "file_upload" }, other),
                    msg.upload,
                    React.createElement("input", { style: { display: 'none' }, type: "file", ref: fileInputEl, onChange: function (e) { return handleChange(e.target.files); } })));
            }
        }
    };
    return (React.createElement("div", { className: classes.root },
        renderBody(),
        errorMessage &&
            React.createElement("div", { className: classes.error },
                React.createElement(core_1.Icon, { className: classes.error_i }, "warning"),
                errorMessage,
                React.createElement(core_1.Icon, { className: classes.error_reset, onClick: function () { return setErrorMessage(''); } }, "clear"))));
};
//# sourceMappingURL=BtnUploader.js.map