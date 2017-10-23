import { HostBinding, Input, Directive, EventEmitter, HostListener, Output } from '@angular/core';
var SuiTabHeader = (function () {
    function SuiTabHeader() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.isDisabled = false;
        this._headerClasses = true;
    }
    Object.defineProperty(SuiTabHeader.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isActive;
        },
        /**
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            var _this = this;
            // Only used by @Input(), runs whenever user input changes `isActive`.
            // Run in timeout because `isDisabled` can prohibit user from changing `isActive` so update is delayed to avoid 'changed after checked' error.
            setTimeout(function () {
                // Only allow change if tab header is not disabled.
                active = !_this.isDisabled ? active : false;
                _this.setActiveState(active);
                // Fire 'external change' event as user input has occured.            
                _this.isActiveExternalChange.emit(active);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTabHeader.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isDisabled;
        },
        /**
         * @param {?} disabled
         * @return {?}
         */
        set: function (disabled) {
            // Only update if value provided is different to current one.
            if (this._isDisabled != disabled) {
                this._isDisabled = disabled;
                // If now disabled, then tab header must be deactivated.
                if (this.isDisabled) {
                    this.isActive = false;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} active
     * @return {?}
     */
    SuiTabHeader.prototype.setActiveState = function (active) {
        // If (cast) active value has changed:
        if (!!this._isActive != active) {
            // Update to the new value.
            this._isActive = active;
            // Fire the appropriate activation event.
            if (active) {
                this.onActivate.emit();
            }
            else {
                this.onDeactivate.emit();
            }
        }
        // Regardless, emit a change to `isActive`, so [(isActive)] works correctly.
        this.isActiveChange.emit(active);
    };
    /**
     * @return {?}
     */
    SuiTabHeader.prototype.onClick = function () {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    };
    return SuiTabHeader;
}());
export { SuiTabHeader };
SuiTabHeader.decorators = [
    { type: Directive, args: [{
                selector: '[suiTabHeader]'
            },] },
];
/**
 * @nocollapse
 */
SuiTabHeader.ctorParameters = function () { return []; };
SuiTabHeader.propDecorators = {
    '_headerClasses': [{ type: HostBinding, args: ['class.item',] },],
    'id': [{ type: Input, args: ["suiTabHeader",] },],
    'isActiveChange': [{ type: Output },],
    'onActivate': [{ type: Output, args: ["activate",] },],
    'onDeactivate': [{ type: Output, args: ["deactivate",] },],
    'isActive': [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    'isDisabled': [{ type: HostBinding, args: ['class.disabled',] }, { type: Input },],
    'onClick': [{ type: HostListener, args: ['click',] },],
};
function SuiTabHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiTabHeader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiTabHeader.ctorParameters;
    /** @type {?} */
    SuiTabHeader.propDecorators;
    /** @type {?} */
    SuiTabHeader.prototype._headerClasses;
    /** @type {?} */
    SuiTabHeader.prototype.id;
    /** @type {?} */
    SuiTabHeader.prototype._isActive;
    /** @type {?} */
    SuiTabHeader.prototype.isActiveChange;
    /** @type {?} */
    SuiTabHeader.prototype.isActiveExternalChange;
    /** @type {?} */
    SuiTabHeader.prototype.onActivate;
    /** @type {?} */
    SuiTabHeader.prototype.onDeactivate;
    /** @type {?} */
    SuiTabHeader.prototype._isDisabled;
}
//# sourceMappingURL=tab-header.js.map