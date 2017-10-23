import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiCheckbox, SuiCheckboxValueAccessor } from './checkbox';
import { SuiRadioButton, SuiRadioButtonValueAccessor } from './radiobutton';
var SuiCheckboxModule = (function () {
    function SuiCheckboxModule() {
    }
    return SuiCheckboxModule;
}());
export { SuiCheckboxModule };
SuiCheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    SuiCheckbox,
                    SuiCheckboxValueAccessor,
                    SuiRadioButton,
                    SuiRadioButtonValueAccessor
                ],
                exports: [
                    SuiCheckbox,
                    SuiCheckboxValueAccessor,
                    SuiRadioButton,
                    SuiRadioButtonValueAccessor
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiCheckboxModule.ctorParameters = function () { return []; };
function SuiCheckboxModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiCheckboxModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiCheckboxModule.ctorParameters;
}
//# sourceMappingURL=checkbox.module.js.map