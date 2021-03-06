import { Component, ContentChildren } from '@angular/core';
import { SuiTabHeader } from './tab-header';
import { SuiTabContent } from './tab-content';
import { Tab } from './tab';
var SuiTabset = (function () {
    function SuiTabset() {
        this.tabs = [];
        this._barrierCount = 0;
    }
    Object.defineProperty(SuiTabset.prototype, "activeTab", {
        /**
         * @return {?}
         */
        get: function () {
            return this._activeTab;
        },
        /**
         * @param {?} tab
         * @return {?}
         */
        set: function (tab) {
            this._activeTab = tab;
            tab.isActive = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiTabset.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Fire `internalComponentsUpdated` when the query lists change.
        this._tabHeaders.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
        this._tabContents.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
        // Initially load the tabs.
        this.loadTabs();
    };
    /**
     * @return {?}
     */
    SuiTabset.prototype.internalComponentsUpdated = function () {
        // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
        // This is so that both the headers and contents query lists can update before we run code that matches the two up.
        this._barrierCount++;
        if (this._barrierCount == 2) {
            // Reset the barrier so it can be called again.
            this._barrierCount = 0;
            // Update the tabs.
            this.loadTabs();
        }
    };
    /**
     * @return {?}
     */
    SuiTabset.prototype.loadTabs = function () {
        var _this = this;
        // Remove any tabs that no longer have an associated header.
        this.tabs = this.tabs.filter(function (t) { return !!_this._tabHeaders.find(function (tH) { return tH == t.header; }); });
        this._tabHeaders
            .filter(function (tH) { return !_this.tabs.find(function (t) { return t.header == tH; }); })
            .forEach(function (tH) {
            // Create a new tab instance for this header & content combo.
            var /** @type {?} */ tab = new Tab(tH, _this._tabContents.find(function (tC) { return tC.id == tH.id; }));
            if (!tab.content) {
                // Error if an associated tab content cannot be found for the given header.
                throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
            }
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(function () { return _this.onHeaderActiveChanged(tab); });
            // Add the new instance to the list of tabs.
            _this.tabs.push(tab);
        });
        // Assign each tab an index (which denotes the order they physically appear in).
        this._tabHeaders
            .forEach(function (tH, i) { return _this.tabs.find(function (t) { return t.header == tH; }).index = i; });
        // Sort the tabs by their index.
        this.tabs.sort(function (a, b) { return a.index - b.index; });
        // Check if there are no current existing active tabs.
        if (!this.activeTab) {
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(function (t) { return t == _this.activeTab; })) {
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(function () { return _this.activateClosestTab(_this.activeTab); });
        }
        if (this.tabs.length == 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.onHeaderActiveChanged = function (tab) {
        // If the tab has become activated, but was not previously the active tab:
        if (tab.isActive && this.activeTab != tab) {
            // Deactivate all of the tabs.
            this.tabs.filter(function (t) { return t != tab; }).forEach(function (t) { return t.isActive = false; });
            // Set the currently active tab to this one.
            this.activeTab = tab;
        }
        // If the tab has become deactivated, but was previously the active tab:
        if (!tab.isActive && this.activeTab == tab) {
            // Activate the closest tab to it.
            this.activateClosestTab(tab);
        }
    };
    /**
     * @return {?}
     */
    SuiTabset.prototype.activateFirstTab = function () {
        console.log("1");
        this.activeTab = this.tabs[0];
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    SuiTabset.prototype.activateClosestTab = function (tab) {
        console.log("n");
        var /** @type {?} */ nextAvailable;
        // When the exited tab's index is higher than all available tabs,
        if (tab.index >= this.tabs.length) {
            // Activate the last tab.
            nextAvailable = this.tabs[this.tabs.length - 1];
        }
        // If that didn't work, try the following cases:
        if (!nextAvailable) {
            // When the exited tab no longer exists,
            if (!this.tabs.find(function (t) { return t == tab; })) {
                // Replace it with a tab at the same index.
                nextAvailable = this.tabs[tab.index];
            }
            else {
                // Go to the tab immediately to the left.
                nextAvailable = this.tabs[Math.max(tab.index - 1, 0)];
            }
        }
        // However, if the chosen tab is disabled,
        if (nextAvailable.isDisabled) {
            // Activate the closest available tab to it.
            return this.activateClosestTab(nextAvailable);
        }
        this.activeTab = nextAvailable;
    };
    return SuiTabset;
}());
export { SuiTabset };
SuiTabset.decorators = [
    { type: Component, args: [{
                selector: 'sui-tabset',
                template: "<ng-content></ng-content>"
            },] },
];
/**
 * @nocollapse
 */
SuiTabset.ctorParameters = function () { return []; };
SuiTabset.propDecorators = {
    '_tabHeaders': [{ type: ContentChildren, args: [SuiTabHeader,] },],
    '_tabContents': [{ type: ContentChildren, args: [SuiTabContent,] },],
};
function SuiTabset_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiTabset.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiTabset.ctorParameters;
    /** @type {?} */
    SuiTabset.propDecorators;
    /** @type {?} */
    SuiTabset.prototype._tabHeaders;
    /** @type {?} */
    SuiTabset.prototype._tabContents;
    /** @type {?} */
    SuiTabset.prototype.tabs;
    /** @type {?} */
    SuiTabset.prototype._activeTab;
    /** @type {?} */
    SuiTabset.prototype._barrierCount;
}
//# sourceMappingURL=tabset.js.map