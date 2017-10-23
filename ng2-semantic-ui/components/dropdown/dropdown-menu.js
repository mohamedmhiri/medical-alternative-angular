var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Directive, ContentChild, forwardRef, Renderer, ElementRef, ContentChildren, Input, HostListener, ChangeDetectorRef } from '@angular/core';
import { SuiTransition, Transition } from '../transition/transition';
import { DropdownAutoCloseType } from './dropdown.service';
import { TransitionController } from '../transition/transition-controller';
import { KeyCode } from '../util/util';
// Polyfill for IE
import 'element-closest';
var SuiDropdownMenuItem = (function () {
    /**
     * @param {?} _renderer
     * @param {?} element
     */
    function SuiDropdownMenuItem(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () {
            // We must use nativeElement as Angular doesn't have a way of reading class information.
            var /** @type {?} */ element = (this.element.nativeElement);
            return element.classList.contains("disabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isSelected", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isSelected;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            // Renderer is used to enable a dynamic class name.
            this._renderer.setElementClass(this.element.nativeElement, this.selectedClass, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "hasChildDropdown", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this.childDropdownMenu;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiDropdownMenuItem.prototype.performClick = function () {
        // Manually click the element. Done via renderer so as to avoid nativeElement changes directly.
        this._renderer.invokeElementMethod(this.element.nativeElement, "click");
    };
    return SuiDropdownMenuItem;
}());
export { SuiDropdownMenuItem };
SuiDropdownMenuItem.decorators = [
    { type: Directive, args: [{
                // We must attach to every '.item' as Angular doesn't support > selectors.
                selector: '.item'
            },] },
];
/**
 * @nocollapse
 */
SuiDropdownMenuItem.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
SuiDropdownMenuItem.propDecorators = {
    'childDropdownMenu': [{ type: ContentChild, args: [forwardRef(function () { return SuiDropdownMenu; }),] },],
};
function SuiDropdownMenuItem_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDropdownMenuItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiDropdownMenuItem.ctorParameters;
    /** @type {?} */
    SuiDropdownMenuItem.propDecorators;
    /** @type {?} */
    SuiDropdownMenuItem.prototype._isSelected;
    /** @type {?} */
    SuiDropdownMenuItem.prototype.selectedClass;
    /** @type {?} */
    SuiDropdownMenuItem.prototype.childDropdownMenu;
    /** @type {?} */
    SuiDropdownMenuItem.prototype._renderer;
    /** @type {?} */
    SuiDropdownMenuItem.prototype.element;
}
var SuiDropdownMenu = (function (_super) {
    __extends(SuiDropdownMenu, _super);
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetector
     */
    function SuiDropdownMenu(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.element = element;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false);
        _this.setTransitionController(_this._transitionController);
        _this.menuTransition = "slide down";
        _this.menuTransitionDuration = 200;
        _this.menuAutoSelectFirst = false;
        _this.menuSelectedItemClass = "selected";
        return _this;
    }
    Object.defineProperty(SuiDropdownMenu.prototype, "service", {
        /**
         * @return {?}
         */
        get: function () {
            return this._service;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var _this = this;
            this._service = value;
            var /** @type {?} */ previousIsOpen = this._service.isOpen;
            this._service.isOpenChange.subscribe(function (isOpen) {
                if (isOpen != previousIsOpen) {
                    // Only run transitions if the open state has changed.
                    _this._transitionController.stopAll();
                    _this._transitionController.animate(new Transition(_this.menuTransition, _this.menuTransitionDuration));
                }
                if (!isOpen) {
                    // Reset the item selections when a nested item is selected to avoid incosistent open states.
                    if (_this.selectedItems.length > 1) {
                        _this.resetSelection();
                    }
                }
                previousIsOpen = isOpen;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "items", {
        /**
         * @param {?} items
         * @return {?}
         */
        set: function (items) {
            this._itemsQueryOverride = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_itemsQuery", {
        /**
         * @return {?}
         */
        get: function () {
            return this._itemsQueryOverride || this._itemsQueryInternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_items", {
        /**
         * @return {?}
         */
        get: function () {
            return this._itemsQuery.filter(function (i) { return !i.isDisabled; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdownMenu.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode == DropdownAutoCloseType.ItemClick) {
                var /** @type {?} */ target = (e.target);
                if (this.element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiDropdownMenu.prototype.onDocumentKeydown = function (e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            var /** @type {?} */ target = (e.target);
            if (!/input/i.test(target.tagName) || e.keyCode == KeyCode.Enter) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            var selected = this.selectedItems.slice(-1)[0];
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            var /** @type {?} */ selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                var selectedParent = this.selectedItems.slice(-2)[0];
                selectedContainer = selectedParent.childDropdownMenu;
            }
            switch (e.keyCode) {
                // Escape : close the entire dropdown.
                case KeyCode.Escape:
                    this._service.setOpenState(false);
                    break;
                // Down : select the next item below the current one, or the 1st if none selected.
                case KeyCode.Down:
                // Up : select the next item above the current one, or the 1st if none selected.
                case KeyCode.Up:
                    this.selectedItems.pop();
                    this.selectedItems.push(selectedContainer.updateSelection(selected, e.keyCode));
                    // Prevent default regardless of whether we are in an input, to stop jumping to the start or end of the query string.
                    e.preventDefault();
                    break;
                // Enter : if the item doesn't contain a nested dropdown, 'click' it. Otherwise, fall through to 'Right' action.
                case KeyCode.Enter:
                    if (selected && !selected.hasChildDropdown) {
                        selected.performClick();
                        break;
                    }
                // Right : if the selected item contains a nested dropdown, open the dropdown & select the 1st item.
                case KeyCode.Right:
                    if (selected && selected.hasChildDropdown) {
                        selected.childDropdownMenu.service.setOpenState(true);
                        this.selectedItems.push(selected.childDropdownMenu.updateSelection(selected, e.keyCode));
                    }
                    break;
                // Left : if the selected item is in a nested dropdown, close it and select the containing item.
                case KeyCode.Left:
                    if (this.selectedItems.length >= 2) {
                        this.selectedItems.pop();
                        var selectedParent = this.selectedItems.slice(-1)[0];
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
            }
        }
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.resetSelection = function () {
        var _this = this;
        this.selectedItems = [];
        this._items.forEach(function (i) {
            i.selectedClass = _this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    };
    /**
     * @param {?} selectedItem
     * @param {?} keyCode
     * @return {?}
     */
    SuiDropdownMenu.prototype.updateSelection = function (selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        var /** @type {?} */ selectedIndex = this._items
            .findIndex(function (i) { return i === selectedItem; });
        var /** @type {?} */ newSelection;
        switch (keyCode) {
            case KeyCode.Enter:
            case KeyCode.Right:
            case KeyCode.Down:
                selectedIndex += 1;
                break;
            case KeyCode.Up:
                if (selectedIndex == -1) {
                    // If none are selected, select the 1st item. Should this be `this.items.last - 1`?
                    selectedIndex = 0;
                    break;
                }
                selectedIndex -= 1;
                break;
        }
        // Select the item at the updated index. The || is to stop us selecting past the start or end of the item list.
        newSelection = this._items[selectedIndex] || selectedItem;
        if (newSelection) {
            // Set the selected status on the newly selected item.
            newSelection.isSelected = true;
        }
        this.scrollToItem(newSelection);
        return newSelection;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SuiDropdownMenu.prototype.scrollToItem = function (item) {
        var /** @type {?} */ menu = this.element.nativeElement;
        var /** @type {?} */ selectedRect = item.element.nativeElement.getBoundingClientRect();
        var /** @type {?} */ menuRect = menu.getBoundingClientRect();
        var /** @type {?} */ scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(function () { return _this.onItemsChanged(); });
    };
    /**
     * @return {?}
     */
    SuiDropdownMenu.prototype.onItemsChanged = function () {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    };
    return SuiDropdownMenu;
}(SuiTransition));
export { SuiDropdownMenu };
SuiDropdownMenu.decorators = [
    { type: Directive, args: [{
                selector: '[suiDropdownMenu]'
            },] },
];
/**
 * @nocollapse
 */
SuiDropdownMenu.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
SuiDropdownMenu.propDecorators = {
    'menuTransition': [{ type: Input },],
    'menuTransitionDuration': [{ type: Input },],
    '_itemsQueryInternal': [{ type: ContentChildren, args: [SuiDropdownMenuItem,] },],
    'menuAutoSelectFirst': [{ type: Input },],
    'menuSelectedItemClass': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ["click", ["$event"],] },],
    'onDocumentKeydown': [{ type: HostListener, args: ["document:keydown", ["$event"],] },],
};
function SuiDropdownMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiDropdownMenu.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiDropdownMenu.ctorParameters;
    /** @type {?} */
    SuiDropdownMenu.propDecorators;
    /** @type {?} */
    SuiDropdownMenu.prototype._service;
    /** @type {?} */
    SuiDropdownMenu.prototype._transitionController;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuTransition;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuTransitionDuration;
    /** @type {?} */
    SuiDropdownMenu.prototype._itemsQueryInternal;
    /** @type {?} */
    SuiDropdownMenu.prototype._itemsQueryOverride;
    /** @type {?} */
    SuiDropdownMenu.prototype.selectedItems;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuAutoSelectFirst;
    /** @type {?} */
    SuiDropdownMenu.prototype.menuSelectedItemClass;
    /** @type {?} */
    SuiDropdownMenu.prototype.element;
}
//# sourceMappingURL=dropdown-menu.js.map