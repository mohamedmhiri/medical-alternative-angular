import { Component, Input, HostBinding, ContentChildren } from '@angular/core';
import { SuiAccordionPanel } from './accordion-panel';
import { SuiAccordionService } from './accordion.service';
var SuiAccordion = (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.accordionClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        /**
         * @return {?}
         */
        get: function () {
            return this._service.closeOthers;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        /**
         * @param {?} duration
         * @return {?}
         */
        set: function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiAccordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this.panels.changes.subscribe(function () { return setTimeout(function () { return _this.updatePanels(); }); });
    };
    /**
     * @return {?}
     */
    SuiAccordion.prototype.updatePanels = function () {
        var _this = this;
        this.panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    return SuiAccordion;
}());
export { SuiAccordion };
SuiAccordion.decorators = [
    { type: Component, args: [{
                selector: 'sui-accordion',
                template: "\n<ng-content></ng-content>\n",
                styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiAccordion.ctorParameters = function () { return []; };
SuiAccordion.propDecorators = {
    'accordionClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.accordion',] },],
    'closeOthers': [{ type: Input },],
    'transitionDuration': [{ type: Input },],
    'panels': [{ type: ContentChildren, args: [SuiAccordionPanel,] },],
};
function SuiAccordion_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiAccordion.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiAccordion.ctorParameters;
    /** @type {?} */
    SuiAccordion.propDecorators;
    /** @type {?} */
    SuiAccordion.prototype.accordionClasses;
    /** @type {?} */
    SuiAccordion.prototype._service;
    /** @type {?} */
    SuiAccordion.prototype.panels;
}
//# sourceMappingURL=accordion.js.map