import { Directive, Input, HostBinding, Output, ContentChild, ElementRef, HostListener, ContentChildren } from '@angular/core';
import { DropdownService, DropdownAutoCloseType } from './dropdown.service';
import { SuiDropdownMenu } from './dropdown-menu';
import { KeyCode } from '../util/util';
var SuiDropdown = (function () {
    /**
     * @param {?} _element
     */
    function SuiDropdown(_element) {
        this._element = _element;
        this.service = new DropdownService();
    }
    Object.defineProperty(SuiDropdown.prototype, "children", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            // @ContentChildren includes the current element by default.
            return this._children.filter(function (c) { return c !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpenChange", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.isOpenChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            // This is to ensure nested dropdowns don't get made bold.
            return this.service.isOpen && !this.service.isNested;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpen", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.isOpen;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            // If we are opening the dropdown, we want to always open its parents.
            this.service.setOpenState(value, !!value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.isDisabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.service.setDisabledState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "tabIndex", {
        /**
         * @return {?}
         */
        get: function () {
            return (this.isDisabled || this.service.isNested) ? null : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "autoClose", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.autoCloseMode;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.service.autoCloseMode = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this._menu) {
            throw new Error("You must set [suiDropdownMenu] on the menu element.");
        }
        this._menu.service = this.service;
        this.childrenUpdated();
        this._children.changes
            .subscribe(function () { return _this.childrenUpdated(); });
    };
    /**
     * @return {?}
     */
    SuiDropdown.prototype.childrenUpdated = function () {
        var _this = this;
        // Reregister child dropdowns each time the menu content changes.
        this.children
            .map(function (c) { return c.service; })
            .forEach(function (s) { return _this.service.registerChild(s); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdown.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            this.service.toggleOpenState();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdown.prototype.onKeypress = function (e) {
        // Block the keyboard event from being fired on parent dropdowns.
        if (!e.eventHandled) {
            if (e.keyCode == KeyCode.Enter) {
                e.eventHandled = true;
                this.service.setOpenState(true);
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdown.prototype.onDocumentClick = function (e) {
        if (!this._element.nativeElement.contains(e.target)) {
            if (this.service.autoCloseMode == DropdownAutoCloseType.ItemClick || this.service.autoCloseMode == DropdownAutoCloseType.OutsideClick) {
                // No need to reflect in parent since they are also bound to document.
                this.service.setOpenState(false);
            }
        }
    };
    return SuiDropdown;
}());
export { SuiDropdown };
SuiDropdown.decorators = [
    { type: Directive, args: [{
                selector: '[suiDropdown]'
            },] },
];
/**
 * @nocollapse
 */
SuiDropdown.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SuiDropdown.propDecorators = {
    '_menu': [{ type: ContentChild, args: [SuiDropdownMenu,] },],
    '_children': [{ type: ContentChildren, args: [SuiDropdown, { descendants: true },] },],
    'isOpenChange': [{ type: Output },],
    'isActive': [{ type: HostBinding, args: ['class.active',] },],
    'isOpen': [{ type: Input },],
    'isDisabled': [{ type: HostBinding, args: ['class.disabled',] }, { type: Input },],
    'tabIndex': [{ type: HostBinding, args: ['attr.tabindex',] },],
    'autoClose': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ["click", ['$event'],] },],
    'onKeypress': [{ type: HostListener, args: ["keypress", ['$event'],] },],
    'onDocumentClick': [{ type: HostListener, args: ["document:click", ["$event"],] },],
};
function SuiDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDropdown.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiDropdown.ctorParameters;
    /** @type {?} */
    SuiDropdown.propDecorators;
    /** @type {?} */
    SuiDropdown.prototype.service;
    /** @type {?} */
    SuiDropdown.prototype._menu;
    /** @type {?} */
    SuiDropdown.prototype._children;
    /** @type {?} */
    SuiDropdown.prototype._element;
}
//# sourceMappingURL=dropdown.js.map