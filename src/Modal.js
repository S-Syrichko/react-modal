"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Modal = function (_a) {
    var content = _a.content, style = _a.style, isOpen = _a.isOpen, onClose = _a.onClose, closeButton = _a.closeButton;
    if (!isOpen) {
        return null;
    }
    var defaultCloseButton = react_1.default.createElement("span", null, "X");
    var modalStyle = style
        ? style
        : {
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
        };
    return (react_1.default.createElement("div", { className: "modal", style: modalStyle },
        react_1.default.createElement("div", { className: "close-button", onClick: onClose }, closeButton ? closeButton : defaultCloseButton),
        content));
};
exports.default = Modal;
