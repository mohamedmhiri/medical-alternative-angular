import { HostBinding, Directive, Input } from '@angular/core';
var SuiTabContent = (function () {
    function SuiTabContent() {
        this.isActive = false;
        this._contentClasses = true;
    }
    return SuiTabContent;
}());
export { SuiTabContent };
SuiTabContent.decorators = [
    { type: Directive, args: [{
                selector: '[suiTabContent]'
            },] },
];
/**
 * @nocollapse
 */
SuiTabContent.ctorParameters = function () { return []; };
SuiTabContent.propDecorators = {
    '_contentClasses': [{ type: HostBinding, args: ['class.tab',] },],
    'id': [{ type: Input, args: ["suiTabContent",] },],
    'isActive': [{ type: HostBinding, args: ['class.active',] },],
};
function SuiTabContent_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiTabContent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiTabContent.ctorParameters;
    /** @type {?} */
    SuiTabContent.propDecorators;
    /** @type {?} */
    SuiTabContent.prototype._contentClasses;
    /** @type {?} */
    SuiTabContent.prototype.id;
    /** @type {?} */
    SuiTabContent.prototype.isActive;
}
//# sourceMappingURL=tab-content.js.map