import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiTransition, Transition, TransitionDirection } from './transition';
import { TransitionController } from './transition-controller';
var SuiTransitionModule = (function () {
    function SuiTransitionModule() {
    }
    return SuiTransitionModule;
}());
export { SuiTransitionModule };
SuiTransitionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SuiTransition
                ],
                exports: [
                    SuiTransition
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SuiTransitionModule.ctorParameters = function () { return []; };
function SuiTransitionModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiTransitionModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiTransitionModule.ctorParameters;
}
export { SuiTransition, Transition, TransitionDirection, TransitionController };
//# sourceMappingURL=transition.module.js.map