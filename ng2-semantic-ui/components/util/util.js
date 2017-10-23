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
export var KeyCode = {};
KeyCode.Left = 37;
KeyCode.Up = 38;
KeyCode.Right = 39;
KeyCode.Down = 40;
KeyCode.Escape = 27;
KeyCode.Enter = 13;
KeyCode.Space = 32;
KeyCode.Backspace = 8;
KeyCode[KeyCode.Left] = "Left";
KeyCode[KeyCode.Up] = "Up";
KeyCode[KeyCode.Right] = "Right";
KeyCode[KeyCode.Down] = "Down";
KeyCode[KeyCode.Escape] = "Escape";
KeyCode[KeyCode.Enter] = "Enter";
KeyCode[KeyCode.Space] = "Space";
KeyCode[KeyCode.Backspace] = "Backspace";
;
/**
 * @template T, U
 * @param {?} object
 * @param {?} path
 * @return {?}
 */
export function deepValue(object, path) {
    if (!object) {
        return;
    }
    if (!path) {
        return ((object));
    }
    var /** @type {?} */ recursed;
    for (var /** @type {?} */ i = 0, /** @type {?} */ p = path.split('.'), /** @type {?} */ len = p.length; i < len; i++) {
        recursed = (((object)))[p[i]];
    }
    return ((recursed));
}
/**
 * @template T, U
 * @param {?} object
 * @param {?} field
 * @return {?}
 */
export function readValue(object, field) {
    return deepValue(object, field);
}
var HandledMouseEvent = (function (_super) {
    __extends(HandledMouseEvent, _super);
    function HandledMouseEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HandledMouseEvent;
}(MouseEvent));
export { HandledMouseEvent };
function HandledMouseEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    HandledMouseEvent.prototype.eventHandled;
}
var HandledKeyboardEvent = (function (_super) {
    __extends(HandledKeyboardEvent, _super);
    function HandledKeyboardEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HandledKeyboardEvent;
}(KeyboardEvent));
export { HandledKeyboardEvent };
function HandledKeyboardEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    HandledKeyboardEvent.prototype.eventHandled;
}
//# sourceMappingURL=util.js.map