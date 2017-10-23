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
var SuiCheckbox = (function () {
    function SuiCheckbox() {
        this.isChecked = false;
        this.checkChange = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this._checkboxClasses = true;
    }
    Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isChecked ? "" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
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
    SuiCheckbox.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
        }
    };
    /**
     * @return {?}
     */
    SuiCheckbox.prototype.toggle = function () {
        this.isChecked = !this.isChecked;
        this.checkChange.emit(this.isChecked);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiCheckbox.prototype.writeValue = function (value) {
        this.isChecked = value;
    };
    return SuiCheckbox;
}());
export { SuiCheckbox };
SuiCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'sui-checkbox',
                exportAs: 'suiCheckbox',
                template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\">\n<label>\n    <ng-content></ng-content>\n</label>\n"
            },] },
];
/**
 * @nocollapse
 */
SuiCheckbox.ctorParameters = function () { return []; };
SuiCheckbox.propDecorators = {
    '_checkboxClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.checkbox',] },],
    'name': [{ type: Input },],
    'isChecked': [{ type: HostBinding, args: ['class.checked',] },],
    'checkChange': [{ type: Output },],
    'isDisabled': [{ type: Input },],
    'isReadonly': [{ type: HostBinding, args: ['class.read-only',] }, { type: Input },],
    'onClick': [{ type: HostListener, args: ['click',] },],
};
function SuiCheckbox_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiCheckbox.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiCheckbox.ctorParameters;
    /** @type {?} */
    SuiCheckbox.propDecorators;
    /** @type {?} */
    SuiCheckbox.prototype._checkboxClasses;
    /** @type {?} */
    SuiCheckbox.prototype.name;
    /** @type {?} */
    SuiCheckbox.prototype.isChecked;
    /** @type {?} */
    SuiCheckbox.prototype.checkChange;
    /** @type {?} */
    SuiCheckbox.prototype.isDisabled;
    /** @type {?} */
    SuiCheckbox.prototype.isReadonly;
}
var SuiCheckboxValueAccessor = (function (_super) {
    __extends(SuiCheckboxValueAccessor, _super);
    /**
     * @param {?} host
     */
    function SuiCheckboxValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiCheckboxValueAccessor;
}(CustomValueAccessor));
export { SuiCheckboxValueAccessor };
SuiCheckboxValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'sui-checkbox',
                host: { '(checkChange)': 'onChange($event)' },
                providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
            },] },
];
/**
 * @nocollapse
 */
SuiCheckboxValueAccessor.ctorParameters = function () { return [
    { type: SuiCheckbox, },
]; };
function SuiCheckboxValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiCheckboxValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiCheckboxValueAccessor.ctorParameters;
}
//# sourceMappingURL=checkbox.js.map