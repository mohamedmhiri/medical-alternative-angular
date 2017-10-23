import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiTransitionModule } from '../transition/transition.module';
import { SuiPopupDirective } from './popup.directive';
import { SuiPopup } from './popup';
import { SuiPopupArrow } from './popup-arrow';
var SuiPopupModule = (function () {
    function SuiPopupModule() {
    }
    return SuiPopupModule;
}());
export { SuiPopupModule };
SuiPopupModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiPopupDirective,
                    SuiPopupArrow,
                    SuiPopup
                ],
                exports: [
                    SuiPopupDirective,
                    SuiPopup
                ],
                entryComponents: [
                    SuiPopup
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiPopupModule.ctorParameters = function () { return []; };
function SuiPopupModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiPopupModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiPopupModule.ctorParameters;
}
//# sourceMappingURL=popup.module.js.map