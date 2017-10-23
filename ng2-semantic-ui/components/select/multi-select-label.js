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
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer, ElementRef, Output, ChangeDetectorRef } from '@angular/core';
import { SuiTransition, Transition, TransitionDirection } from '../transition/transition';
import { TransitionController } from '../transition/transition-controller';
var SuiMultiSelectLabel = (function (_super) {
    __extends(SuiMultiSelectLabel, _super);
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    function SuiMultiSelectLabel(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false, "inline-block");
        _this.setTransitionController(_this._transitionController);
        _this.onDeselected = new EventEmitter();
        _this.readLabel = function (value) { return ""; };
        _this.usesTemplate = false;
        _this._labelClasses = true;
        _this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
        return _this;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    SuiMultiSelectLabel.prototype.deselectOption = function (e) {
        var _this = this;
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, function () {
            return _this.onDeselected.emit(_this.value);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiMultiSelectLabel.prototype.onClick = function (e) {
        e.eventHandled = true;
    };
    return SuiMultiSelectLabel;
}(SuiTransition));
export { SuiMultiSelectLabel };
SuiMultiSelectLabel.decorators = [
    { type: Component, args: [{
                selector: 'sui-multi-select-label',
                template: "\n<span #templateSibling></span>\n<span *ngIf=\"!usesTemplate\">{{ readLabel(value) }}</span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
            },] },
];
/**
 * @nocollapse
 */
SuiMultiSelectLabel.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
SuiMultiSelectLabel.propDecorators = {
    '_labelClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.label',] },],
    'value': [{ type: Input },],
    'onDeselected': [{ type: Output },],
    'templateSibling': [{ type: ViewChild, args: ['templateSibling', { read: ViewContainerRef },] },],
    'onClick': [{ type: HostListener, args: ["click", ["$event"],] },],
};
function SuiMultiSelectLabel_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiMultiSelectLabel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiMultiSelectLabel.ctorParameters;
    /** @type {?} */
    SuiMultiSelectLabel.propDecorators;
    /** @type {?} */
    SuiMultiSelectLabel.prototype._labelClasses;
    /** @type {?} */
    SuiMultiSelectLabel.prototype._transitionController;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.value;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.onDeselected;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.readLabel;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.usesTemplate;
    /** @type {?} */
    SuiMultiSelectLabel.prototype.templateSibling;
}
//# sourceMappingURL=multi-select-label.js.map