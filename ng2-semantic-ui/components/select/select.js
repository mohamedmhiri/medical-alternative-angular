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
import { Component, ViewContainerRef, ViewChild, Output, EventEmitter, ElementRef, Renderer, Directive } from '@angular/core';
import { SuiSelectBase } from './select-base';
import { customValueAccessorFactory, CustomValueAccessor } from '../util/custom-value-accessor';
var SuiSelect = (function (_super) {
    __extends(SuiSelect, _super);
    /**
     * @param {?} element
     * @param {?} renderer
     */
    function SuiSelect(element, renderer) {
        var _this = _super.call(this, element, renderer) || this;
        _this.placeholder = "Select one";
        _this.selectedOptionChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SuiSelect.prototype.optionsUpdateHook = function () {
        if (this._writtenOption && this.searchService.options.length > 0) {
            // If there was an value written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOption = this.findOption(this.searchService.options, this._writtenOption);
            if (this.selectedOption) {
                this._writtenOption = null;
                this.drawSelectedOption();
            }
        }
    };
    /**
     * @return {?}
     */
    SuiSelect.prototype.queryUpdateHook = function () {
        // When the query is updated, we just abandon the current selection.
        this.selectedOption = null;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelect.prototype.selectOption = function (option) {
        // Choose and emit the selected option.
        this.selectedOption = option;
        this.selectedOptionChange.emit(this.valueGetter(option));
        this.dropdownService.setOpenState(false);
        // The search delay is set to the transition duration to ensure results aren't rendered as the select closes as that causes a sudden flash.
        this.searchService.searchDelay = this._menu.menuTransitionDuration;
        this.searchService.updateQueryDelayed("");
        this.drawSelectedOption();
        // Automatically refocus the search input for better keyboard accessibility.
        this.focusInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SuiSelect.prototype.writeValue = function (value) {
        var _this = this;
        if (value != null) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel value to an option.
                this.selectedOption = this.findOption(this.searchService.options, value);
            }
            if (!this.selectedOption) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial value.
                    ((this.searchService.itemLookup(value)))
                        .then(function (r) {
                        _this.selectedOption = r;
                        _this.drawSelectedOption();
                    });
                    return;
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOption = value;
                }
            }
        }
        this.drawSelectedOption();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SuiSelect.prototype.initialiseRenderedOption = function (option) {
        _super.prototype.initialiseRenderedOption.call(this, option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = option.value == this.selectedOption;
    };
    /**
     * @return {?}
     */
    SuiSelect.prototype.drawSelectedOption = function () {
        // Updates the active class on the newly selected option.
        if (this._renderedOptions) {
            this.onAvailableOptionsRendered();
        }
        if (this.selectedOption && this.optionTemplate) {
            this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
        }
    };
    return SuiSelect;
}(SuiSelectBase));
export { SuiSelect };
SuiSelect.decorators = [
    { type: Component, args: [{
                selector: 'sui-select',
                template: "\n<i class=\"dropdown icon\"></i>\n<!-- Query input -->\n<input [hidden]=\"!isSearchable\" class=\"search\" type=\"text\" autocomplete=\"off\" [(ngModel)]=\"query\" #queryInput>\n<!-- Placeholder text -->\n<div *ngIf=\"!selectedOption\" class=\"default text\" [class.filtered]=\"!!query\">{{ placeholder }}</div>\n<!-- Selected item -->\n<div class=\"text\" [class.filtered]=\"!!query || !selectedOption\">\n    <span #optionTemplateSibling></span>\n    <span *ngIf=\"!optionTemplate\">{{ labelGetter(selectedOption) }}</span>\n</div>\n<!-- Select dropdown menu -->\n<div class=\"menu\" suiDropdownMenu [menuAutoSelectFirst]=\"isSearchable\">\n    <ng-content></ng-content>\n    <div *ngIf=\"isSearchable && availableOptions.length == 0\" class=\"message\">{{ noResultsMessage }}</div>\n</div>\n"
            },] },
];
/**
 * @nocollapse
 */
SuiSelect.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
SuiSelect.propDecorators = {
    '_optionTemplateSibling': [{ type: ViewChild, args: ['optionTemplateSibling', { read: ViewContainerRef },] },],
    'selectedOptionChange': [{ type: Output },],
};
function SuiSelect_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelect.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSelect.ctorParameters;
    /** @type {?} */
    SuiSelect.propDecorators;
    /** @type {?} */
    SuiSelect.prototype.selectedOption;
    /** @type {?} */
    SuiSelect.prototype._writtenOption;
    /** @type {?} */
    SuiSelect.prototype._optionTemplateSibling;
    /** @type {?} */
    SuiSelect.prototype.selectedOptionChange;
}
var SuiSelectValueAccessor = (function (_super) {
    __extends(SuiSelectValueAccessor, _super);
    /**
     * @param {?} host
     */
    function SuiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    return SuiSelectValueAccessor;
}(CustomValueAccessor));
export { SuiSelectValueAccessor };
SuiSelectValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'sui-select',
                host: { '(selectedOptionChange)': 'onChange($event)' },
                providers: [customValueAccessorFactory(SuiSelectValueAccessor)]
            },] },
];
/**
 * @nocollapse
 */
SuiSelectValueAccessor.ctorParameters = function () { return [
    { type: SuiSelect, },
]; };
function SuiSelectValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSelectValueAccessor.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSelectValueAccessor.ctorParameters;
}
//# sourceMappingURL=select.js.map