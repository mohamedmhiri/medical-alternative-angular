import { EventEmitter } from '@angular/core';
// Creates essentially a 'string' enum.
export var /** @type {?} */ DropdownAutoCloseType = {
    ItemClick: /** @type {?} */ ("itemClick"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Disabled: /** @type {?} */ ("disabled")
};
var DropdownService = (function () {
    /**
     * @param {?=} autoCloseMode
     */
    function DropdownService(autoCloseMode) {
        if (autoCloseMode === void 0) { autoCloseMode = DropdownAutoCloseType.ItemClick; }
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabled = false;
        this.autoCloseMode = autoCloseMode;
        this.children = [];
    }
    Object.defineProperty(DropdownService.prototype, "isNested", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this.parent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isOpen
     * @param {?=} reflectInParent
     * @return {?}
     */
    DropdownService.prototype.setOpenState = function (isOpen, reflectInParent) {
        var _this = this;
        if (reflectInParent === void 0) { reflectInParent = false; }
        if (this.isOpen != isOpen && !this.isDisabled) {
            // Only update the state if it has changed, and the dropdown isn't disabled.
            this.isOpen = !!isOpen;
            // We must delay the emitting to avoid the 'changed after checked' Angular errors.
            this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
            if (!this.isOpen) {
                // Close the child dropdowns when this one closes.
                this.children.forEach(function (c) { return c.setOpenState(_this.isOpen); });
            }
            if (this.parent && reflectInParent) {
                // Open the parent dropdowns when this one opens.
                this.parent.setOpenState(this.isOpen, true);
            }
        }
        else if (this.isOpen != isOpen && this.isDisabled) {
            // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
            this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DropdownService.prototype.setDisabledState = function (isDisabled) {
        if (this.isDisabled != isDisabled) {
            if (!!isDisabled) {
                // Close the dropdown as it is now disabled
                this.setOpenState(false);
            }
            this.isDisabled = !!isDisabled;
        }
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.toggleOpenState = function () {
        this.setOpenState(!this.isOpen);
    };
    /**
     * @param {?} child
     * @return {?}
     */
    DropdownService.prototype.registerChild = function (child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    };
    /**
     * @param {?} child
     * @return {?}
     */
    DropdownService.prototype.isChildRegistered = function (child) {
        return this === child || !!this.children
            .find(function (c) { return !!c.children
            .find(function (c) { return c.isChildRegistered(child); }); });
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.clearChildren = function () {
        this.children.forEach(function (c) {
            c.parent = null;
        });
        this.children = [];
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    DropdownService.prototype.delay = function (callback) {
        setTimeout(function () { return callback(); });
    };
    return DropdownService;
}());
export { DropdownService };
function DropdownService_tsickle_Closure_declarations() {
    /** @type {?} */
    DropdownService.prototype.isOpen;
    /** @type {?} */
    DropdownService.prototype.isOpenChange;
    /** @type {?} */
    DropdownService.prototype.isDisabled;
    /** @type {?} */
    DropdownService.prototype.autoCloseMode;
    /** @type {?} */
    DropdownService.prototype.parent;
    /** @type {?} */
    DropdownService.prototype.children;
}
//# sourceMappingURL=dropdown.service.js.map