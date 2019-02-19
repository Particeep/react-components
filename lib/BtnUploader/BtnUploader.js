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
var core_1 = require("@material-ui/core");
var index_1 = require("../Btn/index");
var color_1 = require("../style/color");
var classnames_1 = require("classnames");
var styles = function (t) { return core_1.createStyles({
    root: {
        minHeight: 40,
        display: 'flex',
        alignItems: 'center',
    },
    doc: {},
    doc_i: {
        color: t.palette.text.secondary,
        fontSize: t.typography.subheading.fontSize,
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
        marginLeft: t.spacing.unit,
        color: color_1.colorError,
        padding: t.spacing.unit + " " + t.spacing.unit * 2,
        borderRadius: 2,
    },
    error_i: {
        marginRight: t.spacing.unit
    },
    error_reset: {
        marginLeft: t.spacing.unit,
        cursor: 'pointer',
    }
}); };
// TODO(Alex) Fix wierd typing issue (it works for <Btn>)
var BtnUploader = /** @class */ (function (_super) {
    __extends(BtnUploader, _super);
    function BtnUploader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            errorMessage: null
        };
        _this.openFileSelection = function () {
            _this.fileInput.click();
        };
        _this.handleChange = function (file) {
            var _a = _this.props, maxUploadFileSize = _a.maxUploadFileSize, onUpload = _a.onUpload, msg = _a.msg;
            if (maxUploadFileSize && file.size > maxUploadFileSize * 1024 * 1024) {
                _this.setState({ errorMessage: msg.invalidSize });
                return;
            }
            onUpload(file);
        };
        _this.clear = function () {
            _this.props.onDelete();
        };
        return _this;
    }
    BtnUploader.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        return (React.createElement("div", { className: classes.root },
            this.renderBody(),
            this.state.errorMessage &&
                React.createElement("div", { className: classes.error },
                    React.createElement(core_1.Icon, { className: classes.error_i }, "warning"),
                    this.state.errorMessage,
                    React.createElement(core_1.Icon, { className: classes.error_reset, onClick: function () { return _this.setState({ errorMessage: '' }); } }, "clear"))));
    };
    BtnUploader.prototype.renderBody = function () {
        var _this = this;
        var _a = this.props, document = _a.document, uploading = _a.uploading, classes = _a.classes, msg = _a.msg, onUpload = _a.onUpload, onDelete = _a.onDelete, other = __rest(_a, ["document", "uploading", "classes", "msg", "onUpload", "onDelete"]);
        if (uploading) {
            return (React.createElement(core_1.Chip, { className: classnames_1.default(classes.doc, classes.docUploading), label: msg.loading, avatar: React.createElement(core_1.Avatar, null,
                    React.createElement(core_1.CircularProgress, { size: 32, className: classes.doc_progress }),
                    React.createElement(core_1.Icon, { className: classes.doc_i }, "insert_drive_file")) }));
        }
        else {
            if (document) {
                return (React.createElement(core_1.Chip, { className: classes.doc, label: document.name, onDelete: this.clear, onClick: function () { return window.open(document.permalink, '_blank'); }, avatar: React.createElement(core_1.Avatar, null,
                        React.createElement(core_1.Icon, { className: classes.doc_i }, "insert_drive_file")) }));
            }
            else {
                return (React.createElement(index_1.Btn, __assign({ color: "primary", onClick: this.openFileSelection, icon: "file_upload" }, other),
                    msg.upload,
                    React.createElement("input", { style: { display: 'none' }, type: "file", ref: function (file) { return _this.fileInput = file; }, onChange: function (e) { return _this.handleChange(e.target.files[0]); } })));
            }
        }
    };
    BtnUploader.defaultProps = {
        msg: {
            loading: 'Loading...',
            upload: 'Upload',
            invalidSize: 'File is too big',
        },
    };
    return BtnUploader;
}(React.Component));
exports.default = core_1.withStyles(styles)(BtnUploader);
//# sourceMappingURL=BtnUploader.js.map