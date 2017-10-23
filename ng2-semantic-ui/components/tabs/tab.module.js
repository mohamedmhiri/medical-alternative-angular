import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiTabset } from './tabset';
import { SuiTabHeader } from './tab-header';
import { SuiTabContent } from './tab-content';
var SuiTabsModule = (function () {
    function SuiTabsModule() {
    }
    return SuiTabsModule;
}());
export { SuiTabsModule };
SuiTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiTabset,
                    SuiTabHeader,
                    SuiTabContent,
                ],
                exports: [
                    SuiTabset,
                    SuiTabHeader,
                    SuiTabContent,
                ]
            },] },
];
/**
 * @nocollapse
 */
SuiTabsModule.ctorParameters = function () { return []; };
function SuiTabsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiTabsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiTabsModule.ctorParameters;
}
//# sourceMappingURL=tab.module.js.map