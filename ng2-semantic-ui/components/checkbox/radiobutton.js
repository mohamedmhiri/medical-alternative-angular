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
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter } from '@angular/core';
import { customValueAccessorFactory, CustomValueAccessor } from '../util/custom-value-accessor';
var SuiRadioButton = (function () {
    function SuiRadioButton() {
        this._radioClasses = true;
        this.isChecked = false;
        this.currentValueChange = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this._radioClasses = true;
    }
    Object.defineProperty(SuiRadioButton.prototype, "checkedAttribute", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isChecked ? "" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadioButton.prototype, "isDisabledAttribute", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isDisabled ? "disabled" : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiRadioButton.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.currentValueChange.emit(this.currentValue);
            this.update();
        }
    };
    /**
     * @return {?}
     */
    SuiRadioButton.prototype.update = function () {
        this.isChecked = this.currentValue == this.value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiRadioButton.prototype.writeValue = function (value) {
        this.currentValue = value;
        this.update();
    };
    return SuiRadioButton;
}());
export { SuiRadioButton };
SuiRadioButton.decorators = [
    { type: Component, args: [{
                selector: 'sui-radio-button[ngModel]',
                exportAs: 'suiRadioButton',
                template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\">\n<label>\n    <ng-content></ng-content>\n</label>\n"
            },] },
];
/**
 * @nocollapse
 */
SuiRadioButton.ctorParameters = function () { return []; };
SuiRadioButton.propDecorators = {
    '_radioClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.radio',] }, { type: HostBinding, args: ['class.checkbox',] },],
    'name': [{ type: Input },],
    'value': [{ type: Input },],
    'isChecked': [{ type: HostBinding, args: ['class.checked',] },],
    'currentValueChange': [{ type: Output },],
    'isDisabled': [{ type: Input },],
    'isReadonly': [{ type: HostBinding, args: ['class.read-only',] }, { type: Input },],
    'onClick': [{ type: HostListener, args: ['click',] },],
};
function SuiRadioButton_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiRadioButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiRadioButton.ctorParameters;
    /** @type {?} */
    SuiRadioButton.propDecorators;
    /** @type {?} */
    SuiRadioButton.prototype._radioClasses;
    /** @type {?} */
    SuiRadioButton.prototype.name;
    /** @type {?} */
    SuiRadioButton.prototype.value;
    /** @type {?} */
    SuiRadioButton.prototype.isChecked;
    /** @type {?} */
    SuiRadioButton.prototype.currentValue;
    /** @type {?} */
    SuiRadioButton.prototype.currentValueChange;
    /** @type {?} */
    SuiRadioButton.prototype.isDisabled;
    /** @type {?} */
    SuiRadioButton.prototype.isReadonly;
}
var SuiRadioButtonValueAccessor = (function (_super) {
    __extends(SuiRadioButtonValueAccessor, _super);
    /**
     * @param {?} host
     */
    function SuiRadioButtonValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiRadioButtonValueAccessor;
}(CustomValueAccessor));
export { SuiRadioButtonValueAccessor };
SuiRadioButtonValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'sui-radio-button',
                host: { '(currentValueChange)': 'onChange($event)' },
                providers: [customValueAccessorFactory(SuiRadioButtonValueAccessor)]
            },] },
];
/**
 * @nocollapse
 */
SuiRadioButtonValueAccessor.ctorParameters = function () { return [
    { type: SuiRadioButton, },
]; };
function SuiRadioButtonValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiRadioButtonValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiRadioButtonValueAccessor.ctorParameters;
}
//# sourceMappingURL=radiobutton.js.map