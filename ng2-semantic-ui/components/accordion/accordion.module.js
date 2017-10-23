import { NgModule } from '@angular/core';
import { SuiCollapseModule } from '../collapse/collapse.module';
import { CommonModule } from '@angular/common';
import { SuiAccordion } from './accordion';
import { SuiAccordionPanel } from './accordion-panel';
import { SuiTransitionModule } from '../transition/transition.module';
var SuiAccordionModule = (function () {
    function SuiAccordionModule() {
    }
    return SuiAccordionModule;
}());
export { SuiAccordionModule };
SuiAccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SuiCollapseModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiAccordion,
                    SuiAccordionPanel
                ],
                exports: [
                    SuiAccordion,
                    SuiAccordionPanel
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SuiAccordionModule.ctorParameters = function () { return []; };
function SuiAccordionModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiAccordionModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiAccordionModule.ctorParameters;
}
//# sourceMappingURL=accordion.module.js.map