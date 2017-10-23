import { Component, HostBinding, ContentChild } from '@angular/core';
import { SuiSidebar } from './sidebar';
import { SuiSidebarSibling } from './sidebar-sibling';
var SuiSidebarContainer = (function () {
    function SuiSidebarContainer() {
        this._containerClasses = true;
    }
    /**
     * @return {?}
     */
    SuiSidebarContainer.prototype.ngAfterContentInit = function () {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    };
    return SuiSidebarContainer;
}());
export { SuiSidebarContainer };
SuiSidebarContainer.decorators = [
    { type: Component, args: [{
                selector: 'sui-sidebar-container',
                template: "<ng-content></ng-content>",
                styles: ["\n:host {\n    display: block;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiSidebarContainer.ctorParameters = function () { return []; };
SuiSidebarContainer.propDecorators = {
    '_containerClasses': [{ type: HostBinding, args: ["class.pushable",] },],
    'sidebar': [{ type: ContentChild, args: [SuiSidebar,] },],
    'sibling': [{ type: ContentChild, args: [SuiSidebarSibling,] },],
};
function SuiSidebarContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSidebarContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSidebarContainer.ctorParameters;
    /** @type {?} */
    SuiSidebarContainer.propDecorators;
    /** @type {?} */
    SuiSidebarContainer.prototype.service;
    /** @type {?} */
    SuiSidebarContainer.prototype._containerClasses;
    /** @type {?} */
    SuiSidebarContainer.prototype.sidebar;
    /** @type {?} */
    SuiSidebarContainer.prototype.sibling;
}
//# sourceMappingURL=sidebar-container.js.map