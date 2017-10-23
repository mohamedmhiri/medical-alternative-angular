import { Component, HostBinding, Input, Output, Renderer, ElementRef } from '@angular/core';
import { SidebarService, SidebarTransition, SidebarDirection } from './sidebar.service';
var SuiSidebar = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    function SuiSidebar(_renderer, _element) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(function () { return _this.updateDimensions(); });
        this.service.isVisibleChange.subscribe(function () { return _this.updateDimensions(); });
        this._sidebarClasses = true;
    }
    Object.defineProperty(SuiSidebar.prototype, "transition", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.transition;
        },
        /**
         * @param {?} transition
         * @return {?}
         */
        set: function (transition) {
            var _this = this;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, false); });
            this.service.transition = transition;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, true); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.direction;
        },
        /**
         * @param {?} direction
         * @return {?}
         */
        set: function (direction) {
            this.setClass(this.service.direction, false);
            this.service.direction = direction;
            this.setClass(this.service.direction, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.isVisible;
        },
        /**
         * @param {?} isVisible
         * @return {?}
         */
        set: function (isVisible) {
            this.service.setVisibleState(isVisible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisibleChange", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.isVisibleChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isAnimating", {
        /**
         * @return {?}
         */
        get: function () {
            return this.service.isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSidebar.prototype.updateDimensions = function () {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    };
    /**
     * @param {?} className
     * @param {?=} isAdd
     * @return {?}
     */
    SuiSidebar.prototype.setClass = function (className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        this._renderer.setElementClass(this._element.nativeElement, className, isAdd);
    };
    /**
     * @return {?}
     */
    SuiSidebar.prototype.open = function () {
        this.service.setVisibleState(true);
    };
    /**
     * @return {?}
     */
    SuiSidebar.prototype.close = function () {
        this.service.setVisibleState(false);
    };
    /**
     * @return {?}
     */
    SuiSidebar.prototype.toggle = function () {
        this.service.toggleVisibleState();
    };
    return SuiSidebar;
}());
export { SuiSidebar };
SuiSidebar.decorators = [
    { type: Component, args: [{
                selector: 'sui-sidebar',
                template: "<ng-content></ng-content>"
            },] },
];
/**
 * @nocollapse
 */
SuiSidebar.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
SuiSidebar.propDecorators = {
    '_sidebarClasses': [{ type: HostBinding, args: ["class.ui",] }, { type: HostBinding, args: ["class.sidebar",] }, { type: HostBinding, args: ["class.menu",] },],
    'transition': [{ type: Input },],
    'direction': [{ type: Input },],
    'isVisible': [{ type: HostBinding, args: ["class.visible",] }, { type: Input },],
    'isVisibleChange': [{ type: Output },],
    'isAnimating': [{ type: HostBinding, args: ["class.animating",] },],
};
function SuiSidebar_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSidebar.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSidebar.ctorParameters;
    /** @type {?} */
    SuiSidebar.propDecorators;
    /** @type {?} */
    SuiSidebar.prototype.service;
    /** @type {?} */
    SuiSidebar.prototype._sidebarClasses;
    /** @type {?} */
    SuiSidebar.prototype._renderer;
    /** @type {?} */
    SuiSidebar.prototype._element;
}
//# sourceMappingURL=sidebar.js.map