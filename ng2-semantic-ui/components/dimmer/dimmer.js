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
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SuiTransition, Transition, TransitionDirection } from '../transition/transition';
import { TransitionController } from '../transition/transition-controller';
var SuiDimmer = (function (_super) {
    __extends(SuiDimmer, _super);
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new EventEmitter();
        _this.isClickable = true;
        _this._dimmerClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isDimmed;
        },
        /**
         * @param {?} dimmed
         * @return {?}
         */
        set: function (dimmed) {
            dimmed = !!dimmed;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new TransitionController(dimmed, "block");
                this.setTransitionController(this._transitionController);
            }
            if (this._isDimmed != dimmed) {
                this._isDimmed = dimmed;
                if (this._transitionController.isVisible != dimmed) {
                    this._transitionController.stopAll();
                    this._transitionController.animate(new Transition("fade", 300, dimmed ? TransitionDirection.In : TransitionDirection.Out));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDimmer.prototype.onClick = function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    return SuiDimmer;
}(SuiTransition));
export { SuiDimmer };
SuiDimmer.decorators = [
    { type: Component, args: [{
                selector: 'sui-dimmer',
                exportAs: 'suiDimmer',
                template: "\n<div class=\"content\">\n    <div class=\"center\">\n        <ng-content></ng-content>\n    </div>\n</div>\n",
                styles: ["\n:host.dimmer {\n    transition: none;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiDimmer.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
SuiDimmer.propDecorators = {
    '_dimmerClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.dimmer',] },],
    'isDimmed': [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    'isDimmedChange': [{ type: Output },],
    'isClickable': [{ type: Input },],
    'transition': [{ type: Input },],
    'transitionDuration': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click',] },],
};
function SuiDimmer_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDimmer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiDimmer.ctorParameters;
    /** @type {?} */
    SuiDimmer.propDecorators;
    /** @type {?} */
    SuiDimmer.prototype._dimmerClasses;
    /** @type {?} */
    SuiDimmer.prototype._transitionController;
    /** @type {?} */
    SuiDimmer.prototype._isDimmed;
    /** @type {?} */
    SuiDimmer.prototype.isDimmedChange;
    /** @type {?} */
    SuiDimmer.prototype.isClickable;
    /** @type {?} */
    SuiDimmer.prototype.transition;
    /** @type {?} */
    SuiDimmer.prototype.transitionDuration;
}
//# sourceMappingURL=dimmer.js.map