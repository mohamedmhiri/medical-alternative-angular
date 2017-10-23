import { readValue } from '../util/util';
var SearchService = (function () {
    /**
     * @param {?=} allowEmptyQuery
     */
    function SearchService(allowEmptyQuery) {
        if (allowEmptyQuery === void 0) { allowEmptyQuery = false; }
        this._options = [];
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    Object.defineProperty(SearchService.prototype, "options", {
        /**
         * @return {?}
         */
        get: function () {
            return this._options;
        },
        /**
         * @param {?} options
         * @return {?}
         */
        set: function (options) {
            this._options = options || [];
            // We cannot use both local & remote options simultaneously.
            this._optionsLookup = null;
            // Reset entire service with new options.
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "optionsLookup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._optionsLookup;
        },
        /**
         * @param {?} lookupFn
         * @return {?}
         */
        set: function (lookupFn) {
            this._optionsLookup = lookupFn;
            // As before, cannot use local & remote options simultaneously.
            this._options = [];
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "queryLookup", {
        /**
         * @return {?}
         */
        get: function () {
            return (this._optionsLookup);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "hasItemLookup", {
        /**
         * @return {?}
         */
        get: function () {
            return this.optionsLookup && this.optionsLookup.length == 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template U
     * @param {?} initial
     * @return {?}
     */
    SearchService.prototype.itemLookup = function (initial) {
        return ((this._optionsLookup))(undefined, initial);
    };
    /**
     * @template U
     * @param {?} initial
     * @return {?}
     */
    SearchService.prototype.itemsLookup = function (initial) {
        return ((this._optionsLookup))(undefined, initial);
    };
    Object.defineProperty(SearchService.prototype, "optionsField", {
        /**
         * @return {?}
         */
        get: function () {
            return this._optionsField;
        },
        /**
         * @param {?} field
         * @return {?}
         */
        set: function (field) {
            this._optionsField = field;
            // We need to reset otherwise we would now be showing invalid search results.
            this.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "results", {
        /**
         * @return {?}
         */
        get: function () {
            return this._results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "query", {
        /**
         * @return {?}
         */
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "isSearching", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQueryDelayed = function (query, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(function () {
            _this.updateQuery(query, callback);
        }, this.searchDelay);
    };
    /**
     * @param {?} query
     * @param {?=} callback
     * @return {?}
     */
    SearchService.prototype.updateQuery = function (query, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this._query = query;
        if (this._query == "" && !this.allowEmptyQuery) {
            // Don't update if the new query is empty (and we don't allow empty queries).
            // Don't reset so that when animating closed we don't get a judder.
            return callback(null);
        }
        if (this._resultsCache.hasOwnProperty(this._query)) {
            // If the query is already cached, make use of it.
            this._results = this._resultsCache[this._query];
            return callback(null);
        }
        if (this._optionsLookup) {
            this._isSearching = true;
            this.queryLookup(this._query)
                .then(function (results) {
                // Unset 'loading' state, and display & cache the results.
                _this._isSearching = false;
                _this.updateResults(results);
                return callback(null);
            })
                .catch(function (error) {
                // Unset 'loading' state, and throw the returned error without updating the results.
                _this._isSearching = false;
                return callback(error);
            });
            return;
        }
        // Convert the query string to a RegExp.
        var /** @type {?} */ regex = this.toRegex(this._query);
        if (regex instanceof RegExp) {
            // Only update the results if the query was valid regex.
            // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
            this.updateResults(this._options
                .filter(function (o) { return readValue(o, _this._optionsField)
                .toString()
                .match(regex); }));
        }
        return callback(null);
    };
    /**
     * @param {?} results
     * @return {?}
     */
    SearchService.prototype.updateResults = function (results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    SearchService.prototype.toRegex = function (query) {
        try {
            return new RegExp(query, 'i');
        }
        catch (e) {
            return query;
        }
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SearchService.prototype.highlightMatches = function (text) {
        var /** @type {?} */ regex = this.toRegex(this._query);
        if (regex instanceof RegExp) {
            return text.replace(regex, function (match) { return "<b>" + match + "</b>"; });
        }
        return text;
    };
    /**
     * @return {?}
     */
    SearchService.prototype.reset = function () {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    };
    return SearchService;
}());
export { SearchService };
function SearchService_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchService.prototype._options;
    /** @type {?} */
    SearchService.prototype._optionsLookup;
    /** @type {?} */
    SearchService.prototype._optionsField;
    /** @type {?} */
    SearchService.prototype._results;
    /** @type {?} */
    SearchService.prototype._resultsCache;
    /** @type {?} */
    SearchService.prototype._query;
    /** @type {?} */
    SearchService.prototype.allowEmptyQuery;
    /** @type {?} */
    SearchService.prototype.searchDelay;
    /** @type {?} */
    SearchService.prototype._searchDelayTimeout;
    /** @type {?} */
    SearchService.prototype._isSearching;
}
//# sourceMappingURL=search.service.js.map