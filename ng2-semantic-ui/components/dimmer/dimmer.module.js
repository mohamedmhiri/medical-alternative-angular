import { NgModule } from '@angular/core';
import { SuiDimmer } from './dimmer';
import { CommonModule } from '@angular/common';
import { SuiTransitionModule } from '../transition/transition.module';
var SuiDimmerModule = (function () {
    function SuiDimmerModule() {
    }
    return SuiDimmerModule;
}());
export { SuiDimmerModule };
SuiDimmerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiDimmer
                ],
                exports: [
                    SuiDimmer
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiDimmerModule.ctorParameters = function () { return []; };
function SuiDimmerModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDimmerModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiDimmerModule.ctorParameters;
}
//# sourceMappingURL=dimmer.module.js.map