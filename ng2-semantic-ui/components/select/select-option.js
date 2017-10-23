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
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer, ElementRef, Output } from '@angular/core';
import { SuiDropdownMenuItem } from '../dropdown/dropdown-menu';
var SuiSelectOption = (function (_super) {
    __extends(SuiSelectOption, _super);
    /**
     * @param {?} renderer
     * @param {?} element
     */
    function SuiSelectOption(renderer, element) {
        var _this = 
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        _super.call(this, renderer, element) || this;
        _this._optionClasses = true;
        _this.isActive = false;
        _this.onSelected = new EventEmitter();
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        _this.readLabel = function (value) { return ""; };
        _this.usesTemplate = false;
        return _this;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectOption.prototype.onClick = function (e) {
        var _this = this;
        e.eventHandled = true;
        setTimeout(function () { return _this.onSelected.emit(_this.value); });
    };
    return SuiSelectOption;
}(SuiDropdownMenuItem));
export { SuiSelectOption };
SuiSelectOption.decorators = [
    { type: Component, args: [{
                selector: 'sui-select-option',
                template: "\n<span #templateSibling></span>\n<span *ngIf=\"!usesTemplate\">{{ readLabel(value) }}</span>\n"
            },] },
];
/**
 * @nocollapse
 */
SuiSelectOption.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
SuiSelectOption.propDecorators = {
    '_optionClasses': [{ type: HostBinding, args: ['class.item',] },],
    'value': [{ type: Input },],
    'onSelected': [{ type: Output },],
    'isActive': [{ type: HostBinding, args: ['class.active',] },],
    'templateSibling': [{ type: ViewChild, args: ['templateSibling', { read: ViewContainerRef },] },],
    'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};
function SuiSelectOption_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelectOption.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSelectOption.ctorParameters;
    /** @type {?} */
    SuiSelectOption.propDecorators;
    /** @type {?} */
    SuiSelectOption.prototype._optionClasses;
    /** @type {?} */
    SuiSelectOption.prototype.value;
    /** @type {?} */
    SuiSelectOption.prototype.onSelected;
    /** @type {?} */
    SuiSelectOption.prototype.isActive;
    /** @type {?} */
    SuiSelectOption.prototype.readLabel;
    /** @type {?} */
    SuiSelectOption.prototype.usesTemplate;
    /** @type {?} */
    SuiSelectOption.prototype.templateSibling;
}
//# sourceMappingURL=select-option.js.map