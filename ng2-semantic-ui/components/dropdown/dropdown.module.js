import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiTransitionModule } from '../transition/transition.module';
import { SuiDropdown } from './dropdown';
import { SuiDropdownMenu, SuiDropdownMenuItem } from './dropdown-menu';
import { DropdownService } from './dropdown.service';
var SuiDropdownModule = (function () {
    function SuiDropdownModule() {
    }
    return SuiDropdownModule;
}());
export { SuiDropdownModule };
SuiDropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiDropdown,
                    SuiDropdownMenu,
                    SuiDropdownMenuItem
                ],
                exports: [
                    SuiDropdown,
                    SuiDropdownMenu,
                    SuiDropdownMenuItem
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiDropdownModule.ctorParameters = function () { return []; };
function SuiDropdownModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDropdownModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiDropdownModule.ctorParameters;
}
export { DropdownService };
//# sourceMappingURL=dropdown.module.js.map