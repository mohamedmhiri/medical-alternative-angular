import { Component, Input, HostBinding } from '@angular/core';
var SuiProgress = (function () {
    function SuiProgress() {
        this._popupClasses = true;
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this.autoSuccess = true;
        this.showProgress = true;
        this._popupClasses = true;
    }
    Object.defineProperty(SuiProgress.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            // Convert value from string to number where necessary.
            value = +value;
            if (Number.isNaN(value)) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "maximum", {
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
            // Convert value from string to number where necessary.
            value = +value;
            if (Number.isNaN(value)) {
                return;
            }
            this._maximum = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "precision", {
        /**
         * @return {?}
         */
        get: function () {
            return this._precision;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            // Convert value from string to number where necessary.
            value = +value;
            if (Number.isNaN(value)) {
                return;
            }
            this._precision = Math.min(Math.max(value, 0), 20);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "reachedMaximum", {
        /**
         * @return {?}
         */
        get: function () {
            return (this.value >= this.maximum) && this.autoSuccess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "percentage", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
            var /** @type {?} */ percentage = (boundedValue / this.maximum) * 100;
            return percentage.toFixed(this.precision);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiProgress.prototype, "classValue", {
        /**
         * @param {?} classes
         * @return {?}
         */
        set: function (classes) {
            if (classes.includes("attached") || classes.includes("tiny")) {
                this.showProgress = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return SuiProgress;
}());
export { SuiProgress };
SuiProgress.decorators = [
    { type: Component, args: [{
                selector: 'sui-progress',
                template: "\n<div class=\"bar\" [style.width.%]=\"percentage\">\n    <div class=\"progress\" *ngIf=\"showProgress\">{{ percentage }}%</div>\n</div>\n<div class=\"label\">\n    <ng-content></ng-content>\n</div>\n",
                styles: ["\n.bar {\n    transition-duration: 300ms !important;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiProgress.ctorParameters = function () { return []; };
SuiProgress.propDecorators = {
    '_popupClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.progress',] },],
    'autoSuccess': [{ type: Input },],
    'showProgress': [{ type: Input },],
    'value': [{ type: Input },],
    'maximum': [{ type: Input },],
    'precision': [{ type: Input },],
    'reachedMaximum': [{ type: HostBinding, args: ['class.success',] },],
    'percentage': [{ type: HostBinding, args: ['attr.data-percent',] },],
    'classValue': [{ type: Input, args: ['class',] },],
};
function SuiProgress_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiProgress.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiProgress.ctorParameters;
    /** @type {?} */
    SuiProgress.propDecorators;
    /** @type {?} */
    SuiProgress.prototype._popupClasses;
    /** @type {?} */
    SuiProgress.prototype._value;
    /** @type {?} */
    SuiProgress.prototype._maximum;
    /** @type {?} */
    SuiProgress.prototype._precision;
    /** @type {?} */
    SuiProgress.prototype.autoSuccess;
    /** @type {?} */
    SuiProgress.prototype.showProgress;
}
//# sourceMappingURL=progress.js.map