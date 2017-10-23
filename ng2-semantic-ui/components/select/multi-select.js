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
import { Component, HostBinding, ElementRef, Renderer, EventEmitter, Output, Input, ViewChildren, Directive } from '@angular/core';
import { SuiSelectBase } from './select-base';
import { SuiMultiSelectLabel } from './multi-select-label';
import { KeyCode } from '../util/util';
import { customValueAccessorFactory, CustomValueAccessor } from '../util/custom-value-accessor';
var SuiMultiSelect = (function (_super) {
    __extends(SuiMultiSelect, _super);
    /**
     * @param {?} element
     * @param {?} renderer
     */
    function SuiMultiSelect(element, renderer) {
        var _this = _super.call(this, element, renderer) || this;
        _this.placeholder = "Select...";
        _this.selectedOptions = [];
        _this.selectedOptionsChange = new EventEmitter();
        _this._renderedSelectedSubscriptions = [];
        _this._multiSelectClasses = true;
        return _this;
    }
    /**
     * @return {?}
     */
    SuiMultiSelect.prototype.optionsUpdateHook = function () {
        var _this = this;
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions.map(function (v) { return _this.searchService.options.find(function (o) { return v == _this.valueGetter(o); }); });
            if (this.selectedOptions.length == this._writtenOptions.length) {
                this._writtenOptions = null;
            }
        }
    };
    Object.defineProperty(SuiMultiSelect.prototype, "availableOptions", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            if (this.maxSelectedReached) {
                // If we have reached the maximum number of selections, then empty the results completely.
                return [];
            }
            // Returns the search results \ selected options.
            return this.searchService.results
                .filter(function (r) { return !_this.selectedOptions.find(function (o) { return r == o; }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedReached", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.maxSelected == null) {
                // If there is no maximum then we can immediately return.
                return false;
            }
            return this.selectedOptions.length == this.maxSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.selectOption = function (option) {
        var _this = this;
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        // The search delay is set to the transition duration to ensure results aren't rendered as the select closes as that causes a sudden flash.
        this.searchService.searchDelay = this._menu.menuTransitionDuration;
        this.searchService.updateQuery("");
        // Automatically refocus the search input for better keyboard accessibility.
        this.focusInput();
    };
    /**
     * @param {?} values
     * @return {?}
     */
    SuiMultiSelect.prototype.writeValue = function (values) {
        var _this = this;
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values.map(function (v) { return _this.findOption(_this.searchService.options, v); });
            }
            if (values.length > 0 && this.selectedOptions.length == 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService.itemsLookup(values)
                        .then(function (r) { return _this.selectedOptions = r; });
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOptions = values;
                }
            }
            if (values.length === 0) {
                this.selectedOptions = [];
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiMultiSelect.prototype.deselectOption = function (option) {
        var _this = this;
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(function (so) { return so != option; });
        this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focusInput();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiMultiSelect.prototype.onQueryInputKeydown = function (event) {
        if (event.keyCode == KeyCode.Backspace && this.query == "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    };
    /**
     * @return {?}
     */
    SuiMultiSelect.prototype.ngAfterViewInit = function () {
        var _this = this;
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onSelectedOptionsRendered();
        this._renderedSelectedOptions.changes.subscribe(function () { return _this.onSelectedOptionsRendered(); });
    };
    /**
     * @return {?}
     */
    SuiMultiSelect.prototype.onSelectedOptionsRendered = function () {
        var _this = this;
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSelectedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
        this._renderedSelectedSubscriptions = [];
        this._renderedSelectedOptions.forEach(function (ro) {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(function () { return _this.initialiseRenderedOption(ro); });
            _this._renderedSelectedSubscriptions.push(ro.onDeselected.subscribe(function () { return _this.deselectOption(ro.value); }));
        });
    };
    return SuiMultiSelect;
}(SuiSelectBase));
export { SuiMultiSelect };
SuiMultiSelect.decorators = [
    { type: Component, args: [{
                selector: 'sui-multi-select',
                template: "\n<i class=\"dropdown icon\"></i>\n<!-- Multi-select labels -->\n<sui-multi-select-label *ngFor=\"let selected of selectedOptions;\" [value]=\"selected\"></sui-multi-select-label>\n<!-- Query input -->\n<input [hidden]=\"!isSearchable\" class=\"search\" type=\"text\" autocomplete=\"off\" [(ngModel)]=\"query\" (keydown)=\"onQueryInputKeydown($event)\" #queryInput>\n<!-- Placeholder text -->\n<div class=\"default text\" [class.filtered]=\"!!query\">{{ placeholder }}</div>\n<!-- Select dropdown menu -->\n<div class=\"menu\" suiDropdownMenu [menuAutoSelectFirst]=\"true\">\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"availableOptions.length == 0 \">\n        <div *ngIf=\"!maxSelectedReached\" class=\"message\">{{ noResultsMessage }}</div>\n        <div *ngIf=\"maxSelectedReached\" class=\"message\">Max {{ maxSelected }} selections</div>\n    </ng-container>\n</div>\n",
                styles: ["\n:host input.search {\n    width: 12em !important;\n}\n    "]
            },] },
];
/**
 * @nocollapse
 */
SuiMultiSelect.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
SuiMultiSelect.propDecorators = {
    '_renderedSelectedOptions': [{ type: ViewChildren, args: [SuiMultiSelectLabel,] },],
    'selectedOptionsChange': [{ type: Output },],
    'maxSelected': [{ type: Input },],
    '_multiSelectClasses': [{ type: HostBinding, args: ['class.multiple',] },],
};
function SuiMultiSelect_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiMultiSelect.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiMultiSelect.ctorParameters;
    /** @type {?} */
    SuiMultiSelect.propDecorators;
    /** @type {?} */
    SuiMultiSelect.prototype.selectedOptions;
    /** @type {?} */
    SuiMultiSelect.prototype._writtenOptions;
    /** @type {?} */
    SuiMultiSelect.prototype._renderedSelectedOptions;
    /** @type {?} */
    SuiMultiSelect.prototype._renderedSelectedSubscriptions;
    /** @type {?} */
    SuiMultiSelect.prototype.selectedOptionsChange;
    /** @type {?} */
    SuiMultiSelect.prototype.maxSelected;
    /** @type {?} */
    SuiMultiSelect.prototype._multiSelectClasses;
}
var SuiMultiSelectValueAccessor = (function (_super) {
    __extends(SuiMultiSelectValueAccessor, _super);
    /**
     * @param {?} host
     */
    function SuiMultiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiMultiSelectValueAccessor;
}(CustomValueAccessor));
export { SuiMultiSelectValueAccessor };
SuiMultiSelectValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'sui-multi-select',
                host: { '(selectedOptionsChange)': 'onChange($event)' },
                providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor)]
            },] },
];
/**
 * @nocollapse
 */
SuiMultiSelectValueAccessor.ctorParameters = function () { return [
    { type: SuiMultiSelect, },
]; };
function SuiMultiSelectValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiMultiSelectValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiMultiSelectValueAccessor.ctorParameters;
}
//# sourceMappingURL=multi-select.js.map