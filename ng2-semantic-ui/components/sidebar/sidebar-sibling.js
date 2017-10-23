import { Component, Input, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';
import { SidebarTransition } from './sidebar.service';
var SuiSidebarSibling = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    function SuiSidebarSibling(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this._siblingClasses = true;
    }
    Object.defineProperty(SuiSidebarSibling.prototype, "service", {
        /**
         * @return {?}
         */
        get: function () {
            return this._service;
        },
        /**
         * @param {?} service
         * @return {?}
         */
        set: function (service) {
            var _this = this;
            this._service = service;
            setTimeout(function () { return _this.updateTransform(); });
            this._service.isVisibleChange.subscribe(function () { return _this.updateTransform(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isVisible", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebarSibling.prototype, "isDimmed", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.service) {
                return false;
            }
            return this.service.isVisible && this.isDimmedWhenVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiSidebarSibling.prototype.updateTransform = function () {
        this._renderer.setElementStyle(this._element.nativeElement, "transform", null);
        this._renderer.setElementStyle(this._element.nativeElement, "-webkit-transform", null);
        if (this.service.isVisible && this.service.transition != SidebarTransition.Overlay && this.service.transition != SidebarTransition.ScaleDown) {
            var /** @type {?} */ translate = "translate3d(" + this.service.width + "px, " + this.service.height + "px, 0)";
            this._renderer.setElementStyle(this._element.nativeElement, "transform", translate);
            this._renderer.setElementStyle(this._element.nativeElement, "-webkit-transform", translate);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiSidebarSibling.prototype.onClick = function (event) {
        if (this.service.isVisible && !this.service.wasJustOpened) {
            this.service.setVisibleState(false);
        }
    };
    return SuiSidebarSibling;
}());
export { SuiSidebarSibling };
SuiSidebarSibling.decorators = [
    { type: Component, args: [{
                selector: 'sui-sidebar-sibling',
                template: "<ng-content></ng-content>",
                styles: ["\n:host {\n    display: block;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiSidebarSibling.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
SuiSidebarSibling.propDecorators = {
    'isDimmedWhenVisible': [{ type: Input },],
    'isVisible': [{ type: HostBinding, args: ["class.visible",] },],
    'isDimmed': [{ type: HostBinding, args: ["class.dimmed",] },],
    '_siblingClasses': [{ type: HostBinding, args: ["class.pusher",] },],
    'onClick': [{ type: HostListener, args: ["click", ["$event"],] },],
};
function SuiSidebarSibling_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiSidebarSibling.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiSidebarSibling.ctorParameters;
    /** @type {?} */
    SuiSidebarSibling.propDecorators;
    /** @type {?} */
    SuiSidebarSibling.prototype._service;
    /** @type {?} */
    SuiSidebarSibling.prototype.isDimmedWhenVisible;
    /** @type {?} */
    SuiSidebarSibling.prototype._siblingClasses;
    /** @type {?} */
    SuiSidebarSibling.prototype._renderer;
    /** @type {?} */
    SuiSidebarSibling.prototype._element;
}
//# sourceMappingURL=sidebar-sibling.js.map