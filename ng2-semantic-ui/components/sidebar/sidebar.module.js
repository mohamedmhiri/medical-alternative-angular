import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiSidebar } from './sidebar';
import { SuiSidebarContainer } from './sidebar-container';
import { SuiSidebarSibling } from './sidebar-sibling';
var SuiSidebarModule = (function () {
    function SuiSidebarModule() {
    }
    return SuiSidebarModule;
}());
export { SuiSidebarModule };
SuiSidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiSidebar,
                    SuiSidebarContainer,
                    SuiSidebarSibling
                ],
                exports: [
                    SuiSidebar,
                    SuiSidebarContainer,
                    SuiSidebarSibling
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiSidebarModule.ctorParameters = function () { return []; };
function SuiSidebarModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSidebarModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSidebarModule.ctorParameters;
}
//# sourceMappingURL=sidebar.module.js.map