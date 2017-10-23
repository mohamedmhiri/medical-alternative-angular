import { Renderer, ElementRef, Directive, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
export var TransitionDirection = {};
TransitionDirection.In = 0;
TransitionDirection.Out = 1;
TransitionDirection.Either = 2;
TransitionDirection.Static = 3;
TransitionDirection[TransitionDirection.In] = "In";
TransitionDirection[TransitionDirection.Out] = "Out";
TransitionDirection[TransitionDirection.Either] = "Either";
TransitionDirection[TransitionDirection.Static] = "Static";
var Transition = (function () {
    /**
     * @param {?} name
     * @param {?=} duration
     * @param {?=} direction
     * @param {?=} onComplete
     */
    function Transition(name, duration, direction, onComplete) {
        if (duration === void 0) { duration = 250; }
        if (direction === void 0) { direction = TransitionDirection.Either; }
        if (onComplete === void 0) { onComplete = function () { }; }
        this.type = name;
        if (duration < 1) {
            // We set a minimum duration of 1ms, to give the appearance of an immediate transition whilst allowing positioning calculations to happen without a visible flicker.
            duration = 1;
        }
        this.duration = duration;
        this.direction = direction;
        this.classes = this.type.split(" ");
        this.onComplete = onComplete;
    }
    Object.defineProperty(Transition.prototype, "directionClass", {
        /**
         * @return {?}
         */
        get: function () {
            switch (this.direction) {
                case TransitionDirection.In: return "in";
                case TransitionDirection.Out: return "out";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Transition;
}());
export { Transition };
function Transition_tsickle_Closure_declarations() {
    /** @type {?} */
    Transition.prototype.type;
    /** @type {?} */
    Transition.prototype.duration;
    /** @type {?} */
    Transition.prototype.direction;
    /** @type {?} */
    Transition.prototype.classes;
    /** @type {?} */
    Transition.prototype.onComplete;
}
var SuiTransition = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetector
     */
    function SuiTransition(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    Object.defineProperty(SuiTransition.prototype, "suiTransition", {
        /**
         * @param {?} tC
         * @return {?}
         */
        set: function (tC) {
            // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
            this.setTransitionController(tC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isVisible", {
        /**
         * @return {?}
         */
        get: function () {
            if (this._controller) {
                return this._controller.isVisible;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isHidden", {
        /**
         * @return {?}
         */
        get: function () {
            if (this._controller) {
                return this._controller.isHidden;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} transitionController
     * @return {?}
     */
    SuiTransition.prototype.setTransitionController = function (transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    };
    return SuiTransition;
}());
export { SuiTransition };
SuiTransition.decorators = [
    { type: Directive, args: [{
                selector: '[suiTransition]',
                exportAs: 'transition'
            },] },
];
/**
 * @nocollapse
 */
SuiTransition.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
SuiTransition.propDecorators = {
    'suiTransition': [{ type: Input },],
    'transitionClass': [{ type: HostBinding, args: ['class.transition',] },],
    'isVisible': [{ type: HostBinding, args: ['class.visible',] },],
    'isHidden': [{ type: HostBinding, args: ['class.hidden',] },],
};
function SuiTransition_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiTransition.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiTransition.ctorParameters;
    /** @type {?} */
    SuiTransition.propDecorators;
    /** @type {?} */
    SuiTransition.prototype._controller;
    /** @type {?} */
    SuiTransition.prototype.transitionClass;
    /** @type {?} */
    SuiTransition.prototype._renderer;
    /** @type {?} */
    SuiTransition.prototype._element;
    /** @type {?} */
    SuiTransition.prototype._changeDetector;
}
//# sourceMappingURL=transition.js.map