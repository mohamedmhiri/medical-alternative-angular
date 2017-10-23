import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiDropdownModule } from '../dropdown/dropdown.module';
import { SuiSelect, SuiSelectValueAccessor } from './select';
import { SuiSelectOption } from './select-option';
import { SuiMultiSelect, SuiMultiSelectValueAccessor } from './multi-select';
import { SuiMultiSelectLabel } from './multi-select-label';
var SuiSelectModule = (function () {
    function SuiSelectModule() {
    }
    return SuiSelectModule;
}());
export { SuiSelectModule };
SuiSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiDropdownModule
                ],
                declarations: [
                    SuiSelect,
                    SuiSelectOption,
                    SuiSelectValueAccessor,
                    SuiMultiSelect,
                    SuiMultiSelectLabel,
                    SuiMultiSelectValueAccessor
                ],
                exports: [
                    SuiSelect,
                    SuiSelectOption,
                    SuiSelectValueAccessor,
                    SuiMultiSelect,
                    SuiMultiSelectValueAccessor
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiSelectModule.ctorParameters = function () { return []; };
function SuiSelectModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelectModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSelectModule.ctorParameters;
}
//# sourceMappingURL=select.module.js.map