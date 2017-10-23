import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiDropdownModule } from '../dropdown/dropdown.module';
import { SuiSearch, SuiSearchValueAccessor } from './search';
import { SearchService } from './search.service';
var SuiSearchModule = (function () {
    function SuiSearchModule() {
    }
    return SuiSearchModule;
}());
export { SuiSearchModule };
SuiSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiDropdownModule
                ],
                declarations: [
                    SuiSearch,
                    SuiSearchValueAccessor
                ],
                exports: [
                    SuiSearch,
                    SuiSearchValueAccessor
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiSearchModule.ctorParameters = function () { return []; };
function SuiSearchModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSearchModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSearchModule.ctorParameters;
}
export { SearchService };
//# sourceMappingURL=search.module.js.map