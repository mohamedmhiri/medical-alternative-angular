import Popper from 'popper.js';
// Creates essentially a 'string' enum.
export var /** @type {?} */ PositioningPlacement = {
    Inherit: /** @type {?} */ ("inherit"),
    TopLeft: /** @type {?} */ ("top-start"),
    TopCenter: /** @type {?} */ ("top"),
    TopRight: /** @type {?} */ ("top-end"),
    LeftTop: /** @type {?} */ ("left-start"),
    LeftCenter: /** @type {?} */ ("left"),
    LeftBottom: /** @type {?} */ ("left-end"),
    BottomLeft: /** @type {?} */ ("bottom-start"),
    BottomCenter: /** @type {?} */ ("bottom"),
    BottomRight: /** @type {?} */ ("bottom-end"),
    RightTop: /** @type {?} */ ("right-start"),
    RightCenter: /** @type {?} */ ("right"),
    RightBottom: /** @type {?} */ ("right-end")
};
var PositioningService = (function () {
    /**
     * @param {?} anchor
     * @param {?} subject
     * @param {?} placement
     * @param {?=} arrowSelector
     */
    function PositioningService(anchor, subject, placement, arrowSelector) {
        var _this = this;
        this.anchor = anchor;
        this.subject = subject;
        var modifiers = {
            applyStyle: {
                gpuAcceleration: false
            },
            preventOverflow: {
                boundariesElement: document.body
            }
        };
        if (arrowSelector) {
            modifiers.arrow = {
                element: arrowSelector
            };
        }
        this._popper = new Popper(anchor.nativeElement, subject.nativeElement, {
            placement: placement,
            modifiers: modifiers,
            onCreate: function (initial) { return _this._popperState = initial; },
            onUpdate: function (update) { return _this._popperState = update; }
        });
    }
    Object.defineProperty(PositioningService.prototype, "placement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._popper.options.placement;
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        set: function (placement) {
            this._popper.options.placement = placement;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositioningService.prototype, "state", {
        /**
         * @return {?}
         */
        get: function () {
            return this._popperState;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PositioningService.prototype.update = function () {
        this._popper.update();
    };
    return PositioningService;
}());
export { PositioningService };
function PositioningService_tsickle_Closure_declarations() {
    /** @type {?} */
    PositioningService.prototype.anchor;
    /** @type {?} */
    PositioningService.prototype.subject;
    /** @type {?} */
    PositioningService.prototype._popper;
    /** @type {?} */
    PositioningService.prototype._popperState;
}
//# sourceMappingURL=positioning.service.js.map