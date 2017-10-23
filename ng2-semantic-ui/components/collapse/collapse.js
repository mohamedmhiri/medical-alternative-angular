import { Directive, ElementRef, Input, HostBinding, Renderer } from '@angular/core';
import 'web-animations-js';
var SuiCollapse = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     */
    function SuiCollapse(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._pristine = true;
        // Collapse animation duration is 350ms by default.
        this.collapseDuration = 350;
        this._isExpanded = false;
        this._isCollapsing = false;
    }
    Object.defineProperty(SuiCollapse.prototype, "isCollapsed", {
        /**
         * @return {?}
         */
        get: function () {
            return !this._isExpanded && !this._isCollapsing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCollapse.prototype, "suiCollapse", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isExpanded;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.hide();
            }
            else {
                this.show();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiCollapse.prototype.hide = function () {
        var _this = this;
        this._isCollapsing = true;
        this._isExpanded = false;
        // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
        this._renderer.setElementStyle(this._element.nativeElement, 'overflow', 'hidden');
        // Animate the host element from its scroll height to 0.
        this.animate(this._element.nativeElement.scrollHeight, 0, function () {
            _this._isCollapsing = false;
        });
    };
    /**
     * @return {?}
     */
    SuiCollapse.prototype.show = function () {
        var _this = this;
        this._isCollapsing = true;
        // Animate the host element from its offset height to its scroll height.
        this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, function () {
            // Remove the overflow override to enable user styling once again.
            _this._renderer.setElementStyle(_this._element.nativeElement, 'overflow', null);
            _this._isCollapsing = false;
            _this._isExpanded = true;
        });
    };
    /**
     * @param {?} startHeight
     * @param {?} endHeight
     * @param {?} callback
     * @return {?}
     */
    SuiCollapse.prototype.animate = function (startHeight, endHeight, callback) {
        // Animate the collapse using the web animations API.
        this._renderer.invokeElementMethod(this._element.nativeElement, "animate", [
            [
                {
                    height: startHeight + "px"
                },
                {
                    height: endHeight + "px"
                }
            ],
            {
                delay: 0,
                // Disable animation on 1st collapse / expansion.
                duration: this._pristine ? 0 : this.collapseDuration,
                iterations: 1,
                easing: "ease",
                fill: "both"
            }
        ]);
        if (this._pristine) {
            // Remove pristine flag when first hit.
            this._pristine = false;
        }
        setTimeout(function () { return callback(); }, this.collapseDuration);
    };
    return SuiCollapse;
}());
export { SuiCollapse };
SuiCollapse.decorators = [
    { type: Directive, args: [{
                selector: '[suiCollapse]'
            },] },
];
/**
 * @nocollapse
 */
SuiCollapse.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
SuiCollapse.propDecorators = {
    '_isExpanded': [{ type: HostBinding, args: ['class.expanded',] },],
    'isCollapsed': [{ type: HostBinding, args: ['class.collapsed',] },],
    '_isCollapsing': [{ type: HostBinding, args: ['class.collapsing',] },],
    'suiCollapse': [{ type: Input },],
    'collapseDuration': [{ type: Input },],
};
function SuiCollapse_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiCollapse.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiCollapse.ctorParameters;
    /** @type {?} */
    SuiCollapse.propDecorators;
    /** @type {?} */
    SuiCollapse.prototype._isExpanded;
    /** @type {?} */
    SuiCollapse.prototype._isCollapsing;
    /** @type {?} */
    SuiCollapse.prototype._pristine;
    /** @type {?} */
    SuiCollapse.prototype.collapseDuration;
    /** @type {?} */
    SuiCollapse.prototype._element;
    /** @type {?} */
    SuiCollapse.prototype._renderer;
}
//# sourceMappingURL=collapse.js.map