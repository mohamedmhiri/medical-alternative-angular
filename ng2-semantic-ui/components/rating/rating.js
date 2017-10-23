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
import { Component, Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { customValueAccessorFactory, CustomValueAccessor } from '../util/custom-value-accessor';
var SuiRating = (function () {
    function SuiRating() {
        this._hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this._ratingClasses = true;
    }
    Object.defineProperty(SuiRating.prototype, "maximum", {
        /**
         * @return {?}
         */
        get: function () {
            return this._maximum;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._maximum = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRating.prototype, "icons", {
        /**
         * @return {?}
         */
        get: function () {
            return new Array(this.maximum);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} i
     * @return {?}
     */
    SuiRating.prototype.onClick = function (i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SuiRating.prototype.onMouseover = function (i) {
        this._hoveredIndex = i;
    };
    /**
     * @return {?}
     */
    SuiRating.prototype.onMouseout = function () {
        this._hoveredIndex = -1;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiRating.prototype.writeValue = function (value) {
        this.value = value;
    };
    return SuiRating;
}());
export { SuiRating };
SuiRating.decorators = [
    { type: Component, args: [{
                selector: 'sui-rating',
                template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"_hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
                styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiRating.ctorParameters = function () { return []; };
SuiRating.propDecorators = {
    '_ratingClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.rating',] },],
    'valueChange': [{ type: Output },],
    'maximum': [{ type: Input },],
    'isReadonly': [{ type: HostBinding, args: ['class.read-only',] }, { type: Input },],
    'onMouseout': [{ type: HostListener, args: ['mouseout',] },],
};
function SuiRating_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiRating.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiRating.ctorParameters;
    /** @type {?} */
    SuiRating.propDecorators;
    /** @type {?} */
    SuiRating.prototype._ratingClasses;
    /** @type {?} */
    SuiRating.prototype.value;
    /** @type {?} */
    SuiRating.prototype.valueChange;
    /** @type {?} */
    SuiRating.prototype._maximum;
    /** @type {?} */
    SuiRating.prototype.isReadonly;
    /** @type {?} */
    SuiRating.prototype._hoveredIndex;
}
var SuiRatingValueAccessor = (function (_super) {
    __extends(SuiRatingValueAccessor, _super);
    /**
     * @param {?} host
     */
    function SuiRatingValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiRatingValueAccessor;
}(CustomValueAccessor));
export { SuiRatingValueAccessor };
SuiRatingValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'sui-rating',
                host: { '(valueChange)': 'onChange($event)' },
                providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
            },] },
];
/**
 * @nocollapse
 */
SuiRatingValueAccessor.ctorParameters = function () { return [
    { type: SuiRating, },
]; };
function SuiRatingValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiRatingValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiRatingValueAccessor.ctorParameters;
}
//# sourceMappingURL=rating.js.map