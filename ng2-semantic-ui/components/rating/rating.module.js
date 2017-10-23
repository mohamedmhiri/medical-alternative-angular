import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiRating, SuiRatingValueAccessor } from './rating';
var SuiRatingModule = (function () {
    function SuiRatingModule() {
    }
    return SuiRatingModule;
}());
export { SuiRatingModule };
SuiRatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule
                ],
                declarations: [
                    SuiRating,
                    SuiRatingValueAccessor
                ],
                exports: [
                    SuiRating,
                    SuiRatingValueAccessor
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiRatingModule.ctorParameters = function () { return []; };
function SuiRatingModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiRatingModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiRatingModule.ctorParameters;
}
//# sourceMappingURL=rating.module.js.map