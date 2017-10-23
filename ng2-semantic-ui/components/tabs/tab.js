var Tab = (function () {
    /**
     * @param {?} header
     * @param {?} content
     */
    function Tab(header, content) {
        var _this = this;
        this.id = header.id;
        this.header = header;
        this.content = content;
        // So that the header and content isActive properties are always in sync.
        this.header.isActiveChange
            .subscribe(function () { return _this.content.isActive = _this.isActive; });
    }
    Object.defineProperty(Tab.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.header.isActive;
        },
        /**
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            // Use `setActiveState` so as not to fire 'external changes' event.
            this.header.setActiveState(active);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this.header.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
export { Tab };
function Tab_tsickle_Closure_declarations() {
    /** @type {?} */
    Tab.prototype.id;
    /** @type {?} */
    Tab.prototype.header;
    /** @type {?} */
    Tab.prototype.content;
    /** @type {?} */
    Tab.prototype.index;
}
//# sourceMappingURL=tab.js.map