import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiProgress } from './progress';
var SuiProgressModule = (function () {
    function SuiProgressModule() {
    }
    return SuiProgressModule;
}());
export { SuiProgressModule };
SuiProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiProgress
                ],
                exports: [
                    SuiProgress
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiProgressModule.ctorParameters = function () { return []; };
function SuiProgressModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiProgressModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiProgressModule.ctorParameters;
}
//# sourceMappingURL=progress.module.js.map