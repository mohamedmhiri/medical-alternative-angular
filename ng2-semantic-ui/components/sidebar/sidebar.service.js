import { EventEmitter } from '@angular/core';
export var /** @type {?} */ SidebarTransition = {
    Overlay: /** @type {?} */ ("overlay"),
    Push: /** @type {?} */ ("push"),
    ScaleDown: /** @type {?} */ ("scale down"),
    Uncover: /** @type {?} */ ("uncover"),
    SlideAlong: /** @type {?} */ ("slide along"),
    SlideOut: /** @type {?} */ ("slide out")
};
export var /** @type {?} */ SidebarDirection = {
    Left: /** @type {?} */ ("left"),
    Right: /** @type {?} */ ("right"),
    Top: /** @type {?} */ ("top"),
    Bottom: /** @type {?} */ ("bottom")
};
var SidebarService = (function () {
    /**
     * @param {?=} isVisible
     */
    function SidebarService(isVisible) {
        if (isVisible === void 0) { isVisible = false; }
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = SidebarTransition.Uncover;
    }
    Object.defineProperty(SidebarService.prototype, "width", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.direction == SidebarDirection.Left) {
                return this._width;
            }
            if (this.direction == SidebarDirection.Right) {
                return -this._width;
            }
            return 0;
        },
        /**
         * @param {?} width
         * @return {?}
         */
        set: function (width) {
            this._width = width;
            this.widthChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarService.prototype, "height", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.direction == SidebarDirection.Top) {
                return this._height;
            }
            if (this.direction == SidebarDirection.Bottom) {
                return -this._height;
            }
            return 0;
        },
        /**
         * @param {?} height
         * @return {?}
         */
        set: function (height) {
            this._height = height;
            this.heightChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isVisible
     * @return {?}
     */
    SidebarService.prototype.setVisibleState = function (isVisible) {
        var _this = this;
        if (this.isVisible != isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(function () { return _this.wasJustOpened = false; });
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(function () { return _this.isAnimating = false; }, 500);
        }
    };
    /**
     * @return {?}
     */
    SidebarService.prototype.toggleVisibleState = function () {
        this.setVisibleState(!this.isVisible);
    };
    return SidebarService;
}());
export { SidebarService };
function SidebarService_tsickle_Closure_declarations() {
    /** @type {?} */
    SidebarService.prototype.isVisible;
    /** @type {?} */
    SidebarService.prototype.isAnimating;
    /** @type {?} */
    SidebarService.prototype.wasJustOpened;
    /** @type {?} */
    SidebarService.prototype.direction;
    /** @type {?} */
    SidebarService.prototype._width;
    /** @type {?} */
    SidebarService.prototype._height;
    /** @type {?} */
    SidebarService.prototype.isVisibleChange;
    /** @type {?} */
    SidebarService.prototype.widthChange;
    /** @type {?} */
    SidebarService.prototype.heightChange;
    /** @type {?} */
    SidebarService.prototype._isAnimatingTimeout;
    /** @type {?} */
    SidebarService.prototype.transition;
}
//# sourceMappingURL=sidebar.service.js.map