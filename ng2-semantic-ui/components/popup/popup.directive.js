import { Directive, Input, ElementRef, ComponentFactoryResolver, ViewContainerRef, HostListener } from '@angular/core';
import { SuiPopup } from './popup';
import { PositioningPlacement } from '../util/positioning.service';
// Creates essentially a 'string' enum.
export var /** @type {?} */ PopupTrigger = {
    Hover: /** @type {?} */ ("hover"),
    Click: /** @type {?} */ ("click"),
    OutsideClick: /** @type {?} */ ("outsideClick"),
    Focus: /** @type {?} */ ("focus"),
    Manual: /** @type {?} */ ("manual")
};
var SuiPopupDirective = (function () {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _componentFactoryResolver
     */
    function SuiPopupDirective(_element, _viewContainerRef, _componentFactoryResolver) {
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._config = {};
        this.popupTrigger = PopupTrigger.Hover;
        this.popupPlacement = PositioningPlacement.TopLeft;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        /**
         * @param {?} template
         * @return {?}
         */
        set: function (template) {
            this._config.template = template;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        /**
         * @param {?} header
         * @return {?}
         */
        set: function (header) {
            this._config.header = header;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        /**
         * @param {?} text
         * @return {?}
         */
        set: function (text) {
            this._config.text = text;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        /**
         * @param {?} inverted
         * @return {?}
         */
        set: function (inverted) {
            if (typeof inverted == "string") {
                inverted = true;
            }
            this._config.inverted = inverted;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        /**
         * @param {?} basic
         * @return {?}
         */
        set: function (basic) {
            if (typeof basic == "string") {
                basic = true;
            }
            this._config.basic = basic;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        /**
         * @param {?} transition
         * @return {?}
         */
        set: function (transition) {
            this._config.transition = transition;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        /**
         * @param {?} duration
         * @return {?}
         */
        set: function (duration) {
            this._config.transitionDuration = duration;
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        /**
         * @param {?} placement
         * @return {?}
         */
        set: function (placement) {
            if (!placement) {
                return;
            }
            var _a = placement.split(" "), direction = _a[0], alignment = _a[1];
            var /** @type {?} */ chosenPlacement = [direction];
            switch (alignment) {
                case "top":
                case "left":
                    chosenPlacement.push("start");
                    break;
                case "bottom":
                case "right":
                    chosenPlacement.push("end");
                    break;
            }
            this._placement = (chosenPlacement.join("-"));
            this.copyConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "_popup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._popupComponentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.copyConfig = function () {
        if (this._popupComponentRef) {
            Object.assign(this._popup.config, this._config);
            if (this.hasOwnProperty("_placement")) {
                this._popup.placement = this._placement;
            }
        }
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.open = function () {
        var _this = this;
        if (!this._popupComponentRef) {
            var /** @type {?} */ factory = this._componentFactoryResolver.resolveComponentFactory(SuiPopup);
            this._popupComponentRef = this._viewContainerRef.createComponent(factory);
            // Move the generated element to the body to avoid any positioning issues.
            document.querySelector("body").appendChild(this._popupComponentRef.location.nativeElement);
            this._popup.onClose.subscribe(function () {
                _this._popupComponentRef.destroy();
                _this._popupComponentRef = null;
            });
            this.copyConfig();
            this._popup.anchor = this._element;
        }
        this._popup.open();
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.close = function () {
        this._popup.close();
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.toggle = function () {
        if (!this._popupComponentRef || (this._popupComponentRef && !this._popup.isOpen)) {
            return this.open();
        }
        return this.close();
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.onMouseEnter = function () {
        if (this.popupTrigger == PopupTrigger.Hover) {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.onMouseLeave = function () {
        if (this.popupTrigger == PopupTrigger.Hover) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.onClick = function () {
        if (this.popupTrigger == PopupTrigger.Click || this.popupTrigger == PopupTrigger.OutsideClick) {
            this.toggle();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SuiPopupDirective.prototype.onDocumentClick = function (e) {
        if (this._popupComponentRef && this.popupTrigger == PopupTrigger.OutsideClick) {
            var /** @type {?} */ target = (e.target);
            // Replacement for e.stopPropagation();
            if (!((this._element.nativeElement)).contains(target)) {
                this.close();
            }
        }
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.onFocus = function () {
        if (this.popupTrigger == PopupTrigger.Focus) {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    SuiPopupDirective.prototype.onFocusOut = function () {
        if (this.popupTrigger == PopupTrigger.Focus) {
            this.close();
        }
    };
    return SuiPopupDirective;
}());
export { SuiPopupDirective };
SuiPopupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[suiPopup]',
                exportAs: 'suiPopup'
            },] },
];
/**
 * @nocollapse
 */
SuiPopupDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
]; };
SuiPopupDirective.propDecorators = {
    'popupTemplate': [{ type: Input },],
    'popupHeader': [{ type: Input },],
    'popupText': [{ type: Input },],
    'popupInverted': [{ type: Input },],
    'popupBasic': [{ type: Input },],
    'popupTransition': [{ type: Input },],
    'popupTransitionDuration': [{ type: Input },],
    'popupPlacement': [{ type: Input },],
    'popupTrigger': [{ type: Input },],
    'onMouseEnter': [{ type: HostListener, args: ["mouseenter",] },],
    'onMouseLeave': [{ type: HostListener, args: ["mouseleave",] },],
    'onClick': [{ type: HostListener, args: ["click",] },],
    'onDocumentClick': [{ type: HostListener, args: ["document:click", ["$event"],] },],
    'onFocus': [{ type: HostListener, args: ["focus",] },],
    'onFocusOut': [{ type: HostListener, args: ["focusout",] },],
};
function SuiPopupDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiPopupDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiPopupDirective.ctorParameters;
    /** @type {?} */
    SuiPopupDirective.propDecorators;
    /** @type {?} */
    SuiPopupDirective.prototype._config;
    /** @type {?} */
    SuiPopupDirective.prototype._placement;
    /** @type {?} */
    SuiPopupDirective.prototype.popupTrigger;
    /** @type {?} */
    SuiPopupDirective.prototype._popupComponentRef;
    /** @type {?} */
    SuiPopupDirective.prototype._element;
    /** @type {?} */
    SuiPopupDirective.prototype._viewContainerRef;
    /** @type {?} */
    SuiPopupDirective.prototype._componentFactoryResolver;
}
//# sourceMappingURL=popup.directive.js.map