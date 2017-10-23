import { ViewChild, HostBinding, HostListener, Input, ContentChildren } from '@angular/core';
import { DropdownService } from '../dropdown/dropdown.service';
import { SearchService } from '../search/search.service';
import { readValue, KeyCode } from '../util/util';
import { SuiDropdownMenu } from '../dropdown/dropdown-menu';
import { SuiSelectOption } from './select-option';
/**
 * @abstract
 */
var SuiSelectBase = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     */
    function SuiSelectBase(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.dropdownService = new DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new SearchService(true);
        this.isSearchable = false;
        this.noResultsMessage = "No results";
        this._renderedSubscriptions = [];
        this._selectClasses = true;
    }
    Object.defineProperty(SuiSelectBase.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._menu.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "tabIndex", {
        /**
         * @return {?}
         */
        get: function () {
            // Remove from tabindex if searchable or disabled, as if searchable then the input is what needs to be focussed.
            return (this.isSearchable || this.isDisabled) ? -1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this.dropdownService.isDisabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.dropdownService.isDisabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "options", {
        /**
         * @param {?} options
         * @return {?}
         */
        set: function (options) {
            if (typeof options == "function") {
                this.searchService.optionsLookup = options;
            }
            else {
                this.searchService.options = options;
            }
            this.optionsUpdateHook();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.optionsUpdateHook = function () { };
    Object.defineProperty(SuiSelectBase.prototype, "availableOptions", {
        /**
         * @return {?}
         */
        get: function () {
            return this.searchService.results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "query", {
        /**
         * @return {?}
         */
        get: function () {
            return this.searchService.query;
        },
        /**
         * @param {?} query
         * @return {?}
         */
        set: function (query) {
            this.queryUpdateHook();
            this.updateQuery(query);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} query
     * @return {?}
     */
    SuiSelectBase.prototype.updateQuery = function (query) {
        var _this = this;
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, function () {
            return _this.dropdownService.setOpenState(true);
        });
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.queryUpdateHook = function () { };
    Object.defineProperty(SuiSelectBase.prototype, "labelField", {
        /**
         * @return {?}
         */
        get: function () {
            return this.searchService.optionsField;
        },
        /**
         * @param {?} field
         * @return {?}
         */
        set: function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "labelGetter", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            // Helper function to retrieve the label from an item.
            return function (obj) { return readValue(obj, _this.labelField); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSelectBase.prototype, "valueGetter", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            // Helper function to retrieve the value from an item.
            return function (obj) { return readValue(obj, _this.valueField); };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(function () { return _this.onAvailableOptionsRendered(); });
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.onAvailableOptionsRendered = function () {
        var _this = this;
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(function (ro) {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(function () { return _this.initialiseRenderedOption(ro); });
            _this._renderedSubscriptions.push(ro.onSelected.subscribe(function () { return _this.selectOption(ro.value); }));
        });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelectBase.prototype.initialiseRenderedOption = function (option) {
        option.usesTemplate = !!this.optionTemplate;
        option.readLabel = this.labelGetter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelectBase.prototype.selectOption = function (option) {
        // This is implemented individually by the single & multi select variants, but is called within the base class, hence this stub.
        throw new Error("Not implemented");
    };
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.findOption = function (options, value) {
        var _this = this;
        // Tries to find an option in options array
        return options.find(function (o) { return value == _this.valueGetter(o); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            // Immediately focus the search input whenever clicking on the select.
            this.focusInput();
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onKeyPress = function (e) {
        if (e.keyCode == KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            this._renderer.invokeElementMethod(this._element.nativeElement, "click");
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSelectBase.prototype.onDocumentClick = function (e) {
        var /** @type {?} */ target = (e.target);
        if (!this._element.nativeElement.contains(e.target)) {
            this.dropdownService.setOpenState(false);
        }
    };
    /**
     * @return {?}
     */
    SuiSelectBase.prototype.focusInput = function () {
        if (this.isSearchable) {
            // Focusses the search input only when searchable.
            this._renderer.invokeElementMethod(this._queryInput.nativeElement, "focus");
        }
    };
    /**
     * @param {?} siblingRef
     * @param {?} value
     * @return {?}
     */
    SuiSelectBase.prototype.drawTemplate = function (siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, { $implicit: value });
    };
    return SuiSelectBase;
}());
export { SuiSelectBase };
SuiSelectBase.propDecorators = {
    '_menu': [{ type: ViewChild, args: [SuiDropdownMenu,] },],
    '_renderedOptions': [{ type: ContentChildren, args: [SuiSelectOption, { descendants: true },] },],
    '_selectClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.selection',] }, { type: HostBinding, args: ['class.dropdown',] },],
    'isActive': [{ type: HostBinding, args: ['class.active',] },],
    'isVisible': [{ type: HostBinding, args: ['class.visible',] },],
    'isSearchable': [{ type: HostBinding, args: ['class.search',] }, { type: Input },],
    'tabIndex': [{ type: HostBinding, args: ['attr.tabindex',] },],
    'isDisabled': [{ type: HostBinding, args: ['class.disabled',] }, { type: Input },],
    '_queryInput': [{ type: ViewChild, args: ['queryInput',] },],
    'placeholder': [{ type: Input },],
    'options': [{ type: Input },],
    'labelField': [{ type: Input },],
    'valueField': [{ type: Input },],
    'optionTemplate': [{ type: Input },],
    'noResultsMessage': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ["click", ['$event'],] },],
    'onKeyPress': [{ type: HostListener, args: ["keypress", ['$event'],] },],
    'onDocumentClick': [{ type: HostListener, args: ["document:click", ["$event"],] },],
};
function SuiSelectBase_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelectBase.propDecorators;
    /** @type {?} */
    SuiSelectBase.prototype.dropdownService;
    /** @type {?} */
    SuiSelectBase.prototype.searchService;
    /** @type {?} */
    SuiSelectBase.prototype._menu;
    /** @type {?} */
    SuiSelectBase.prototype._renderedOptions;
    /** @type {?} */
    SuiSelectBase.prototype._renderedSubscriptions;
    /** @type {?} */
    SuiSelectBase.prototype._selectClasses;
    /** @type {?} */
    SuiSelectBase.prototype.isSearchable;
    /** @type {?} */
    SuiSelectBase.prototype._queryInput;
    /** @type {?} */
    SuiSelectBase.prototype.placeholder;
    /** @type {?} */
    SuiSelectBase.prototype.valueField;
    /** @type {?} */
    SuiSelectBase.prototype.optionTemplate;
    /** @type {?} */
    SuiSelectBase.prototype.noResultsMessage;
    /** @type {?} */
    SuiSelectBase.prototype._element;
    /** @type {?} */
    SuiSelectBase.prototype._renderer;
}
//# sourceMappingURL=select-base.js.map