import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transition, TransitionDirection } from '../transition/transition';
import { TransitionController } from '../transition/transition-controller';
var SuiMessage = (function () {
    function SuiMessage() {
        this.isDismissable = true;
        this.onDismiss = new EventEmitter();
        this.isDismissed = false;
        this._transition = new TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this._classes = "";
    }
    /**
     * @return {?}
     */
    SuiMessage.prototype.dismiss = function () {
        var _this = this;
        this._transition.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
            _this.isDismissed = true;
            _this.onDismiss.emit(_this);
        }));
    };
    return SuiMessage;
}());
export { SuiMessage };
SuiMessage.decorators = [
    { type: Component, args: [{
                selector: 'sui-message',
                template: "\n<div class=\"ui message {{ _classes }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"_transition\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n"
            },] },
];
/**
 * @nocollapse
 */
SuiMessage.ctorParameters = function () { return []; };
SuiMessage.propDecorators = {
    'isDismissable': [{ type: Input },],
    'onDismiss': [{ type: Output, args: ["dismiss",] },],
    'transition': [{ type: Input },],
    'transitionDuration': [{ type: Input },],
    '_classes': [{ type: Input, args: ["class",] },],
};
function SuiMessage_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiMessage.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiMessage.ctorParameters;
    /** @type {?} */
    SuiMessage.propDecorators;
    /** @type {?} */
    SuiMessage.prototype.isDismissable;
    /** @type {?} */
    SuiMessage.prototype.onDismiss;
    /** @type {?} */
    SuiMessage.prototype.isDismissed;
    /** @type {?} */
    SuiMessage.prototype._transition;
    /** @type {?} */
    SuiMessage.prototype.transition;
    /** @type {?} */
    SuiMessage.prototype.transitionDuration;
    /** @type {?} */
    SuiMessage.prototype._classes;
}
//# sourceMappingURL=message.js.map