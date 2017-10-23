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
import { Component, ViewChild, HostBinding, Input, HostListener, EventEmitter, Output, Directive, ElementRef } from '@angular/core';
import { DropdownService } from '../dropdown/dropdown.service';
import { SuiDropdownMenu } from '../dropdown/dropdown-menu';
import { SearchService } from './search.service';
import { readValue } from '../util/util';
import { customValueAccessorFactory, CustomValueAccessor } from '../util/custom-value-accessor';
var SuiSearch = (function () {
    /**
     * @param {?} _element
     */
    function SuiSearch(_element) {
        this._element = _element;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this._searchClasses = true;
        this.hasIcon = true;
        this.placeholder = "Search...";
        this.searchDelay = 200;
        this.itemSelected = new EventEmitter();
    }
    Object.defineProperty(SuiSearch.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "query", {
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
            var _this = this;
            this.selectedItem = null;
            // Initialise a delayed search.
            this.searchService.updateQueryDelayed(query, function () {
                // Set the results open state depending on whether a query has been entered.
                return _this.dropdownService.setOpenState(_this.searchService.query.length > 0);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "options", {
        /**
         * @param {?} options
         * @return {?}
         */
        set: function (options) {
            if (typeof options == "function") {
                this.searchService.optionsLookup = options;
                return;
            }
            this.searchService.options = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsField", {
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
    Object.defineProperty(SuiSearch.prototype, "searchDelay", {
        /**
         * @param {?} delay
         * @return {?}
         */
        set: function (delay) {
            this.searchService.searchDelay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "isSearching", {
        /**
         * @return {?}
         */
        get: function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "results", {
        /**
         * @return {?}
         */
        get: function () {
            return this.searchService.results;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSearch.prototype.ngAfterViewInit = function () {
        this._menu.service = this.dropdownService;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SuiSearch.prototype.select = function (item) {
        this.writeValue(item);
        this.itemSelected.emit(item);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSearch.prototype.onClick = function (e) {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiSearch.prototype.onDocumentClick = function (e) {
        if (!this._element.nativeElement.contains(e.target)) {
            this.dropdownService.setOpenState(false);
        }
    };
    /**
     * @param {?} object
     * @return {?}
     */
    SuiSearch.prototype.readValue = function (object) {
        return readValue(object, this.searchService.optionsField);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SuiSearch.prototype.writeValue = function (item) {
        this.selectedItem = item;
        this.searchService.updateQuery(item ? (this.readValue(item)) : "");
    };
    return SuiSearch;
}());
export { SuiSearch };
SuiSearch.decorators = [
    { type: Component, args: [{
                selector: 'sui-search',
                template: "\n<div class=\"ui input\" [class.icon]=\"hasIcon\">\n    <input class=\"prompt\" type=\"text\" [attr.placeholder]=\"placeholder\" autocomplete=\"off\" [(ngModel)]=\"query\">\n    <i *ngIf=\"hasIcon\" class=\"search icon\"></i>\n  </div>\n<div class=\"results\" suiDropdownMenu menuTransition=\"scale\" menuSelectedItemClass=\"active\">\n    <a class=\"result item\" *ngFor=\"let r of results\" (click)=\"select(r)\">\n        <span *ngIf=\"!searchService.optionsLookup\" [innerHTML]=\"searchService.highlightMatches(r)\"></span>\n        <span *ngIf=\"searchService.optionsLookup\">{{ readValue(r) }}</span>\n    </a>\n    <div *ngIf=\"results.length == 0\" class=\"message empty\">\n        <div class=\"header\">No Results</div>\n        <div class=\"description\">Your search returned no results.</div>\n    </div>\n</div>\n",
                styles: ["\n/* Ensures results div has margin. */\n:host {\n    display: inline-block;\n}\n\n/* Fixes positioning when results are pushed above the search. */\n.results {\n    margin-bottom: .5em;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiSearch.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SuiSearch.propDecorators = {
    '_menu': [{ type: ViewChild, args: [SuiDropdownMenu,] },],
    '_searchClasses': [{ type: HostBinding, args: ['class.ui',] }, { type: HostBinding, args: ['class.search',] },],
    'isActive': [{ type: HostBinding, args: ['class.active',] },],
    'hasIcon': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'options': [{ type: Input },],
    'optionsField': [{ type: Input },],
    'searchDelay': [{ type: Input },],
    'isSearching': [{ type: HostBinding, args: ['class.loading',] },],
    'itemSelected': [{ type: Output },],
    'onClick': [{ type: HostListener, args: ["click", ['$event'],] },],
    'onDocumentClick': [{ type: HostListener, args: ["document:click", ["$event"],] },],
};
function SuiSearch_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSearch.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSearch.ctorParameters;
    /** @type {?} */
    SuiSearch.propDecorators;
    /** @type {?} */
    SuiSearch.prototype.dropdownService;
    /** @type {?} */
    SuiSearch.prototype.searchService;
    /** @type {?} */
    SuiSearch.prototype._menu;
    /** @type {?} */
    SuiSearch.prototype._searchClasses;
    /** @type {?} */
    SuiSearch.prototype.hasIcon;
    /** @type {?} */
    SuiSearch.prototype.placeholder;
    /** @type {?} */
    SuiSearch.prototype.selectedItem;
    /** @type {?} */
    SuiSearch.prototype.itemSelected;
    /** @type {?} */
    SuiSearch.prototype._element;
}
var SuiSearchValueAccessor = (function (_super) {
    __extends(SuiSearchValueAccessor, _super);
    /**
     * @param {?} host
     */
    function SuiSearchValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiSearchValueAccessor;
}(CustomValueAccessor));
export { SuiSearchValueAccessor };
SuiSearchValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'sui-search',
                host: { '(onItemSelected)': 'onChange($event)' },
                providers: [customValueAccessorFactory(SuiSearchValueAccessor)]
            },] },
];
/**
 * @nocollapse
 */
SuiSearchValueAccessor.ctorParameters = function () { return [
    { type: SuiSearch, },
]; };
function SuiSearchValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSearchValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSearchValueAccessor.ctorParameters;
}
//# sourceMappingURL=search.js.map