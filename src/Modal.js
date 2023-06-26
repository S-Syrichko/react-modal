"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    if (!isOpen) {
        return null;
    }
    return (react_1.default.createElement("div", { className: "modal-overlay" },
        react_1.default.createElement("div", { className: "modal" },
            react_1.default.createElement("button", { className: "modal-close", onClick: onClose }, "X"),
            react_1.default.createElement("div", { className: "modal-content" }, children))));
};
exports.default = Modal;
