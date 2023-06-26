"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, closeButton = _a.closeButton, backdropStyle = _a.backdropStyle, modalStyle = _a.modalStyle, closeStyle = _a.closeStyle;
    var modalRef = (0, react_1.useRef)(null);
    var firstFocusableElementRef = (0, react_1.useRef)(null);
    var lastFocusableElementRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        var handleEscKey = function (event) {
            if (event.key === "Escape") {
                onClose();
            }
        };
        if (!isOpen) {
            return null;
        }
        var handleTabKey = function (event) {
            var _a, _b;
            if (event.key === "Tab") {
                if (document.activeElement === lastFocusableElementRef.current &&
                    !event.shiftKey) {
                    event.preventDefault();
                    (_a = firstFocusableElementRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
                else if (document.activeElement === firstFocusableElementRef.current &&
                    event.shiftKey) {
                    event.preventDefault();
                    (_b = lastFocusableElementRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                }
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscKey);
            window.addEventListener("keydown", handleTabKey);
            (_a = firstFocusableElementRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        return function () {
            window.removeEventListener("keydown", handleEscKey);
            window.removeEventListener("keydown", handleTabKey);
        };
    }, [isOpen]);
    var defaultCloseButton = react_1.default.createElement("span", null, "X");
    var defaultStyles = {
        backdrop: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
        },
        modal: {
            position: "relative",
            color: "#000",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            zIndex: 9999,
        },
        close: {
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
        },
    };
    var mergedBackdropStyle = __assign(__assign({}, defaultStyles.backdrop), backdropStyle);
    var mergedModalStyle = __assign(__assign({}, defaultStyles.modal), modalStyle);
    var mergedCloseStyle = __assign(__assign({}, defaultStyles.close), closeStyle);
    return (react_1.default.createElement("div", { className: "modal-overlay" },
        react_1.default.createElement("div", { className: "modal-backdrop", style: mergedBackdropStyle, onClick: onClose }),
        react_1.default.createElement("div", { className: "modal", style: mergedModalStyle, ref: modalRef, tabIndex: -1 },
            react_1.default.createElement("button", { className: "modal-close", style: mergedCloseStyle, onClick: onClose, ref: firstFocusableElementRef }, closeButton ? closeButton : defaultCloseButton),
            react_1.default.createElement("div", { className: "modal-content" }, children),
            react_1.default.createElement("button", { className: "modal-dummy-button", style: { position: "absolute", opacity: 0, pointerEvents: "none" }, ref: lastFocusableElementRef }))));
};
exports.default = Modal;
