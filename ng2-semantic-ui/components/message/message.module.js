import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiMessage } from './message';
import { SuiTransitionModule } from '../transition/transition.module';
var SuiMessageModule = (function () {
    function SuiMessageModule() {
    }
    return SuiMessageModule;
}());
export { SuiMessageModule };
SuiMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiMessage
                ],
                exports: [
                    SuiMessage
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiMessageModule.ctorParameters = function () { return []; };
function SuiMessageModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiMessageModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiMessageModule.ctorParameters;
}
//# sourceMappingURL=message.module.js.map