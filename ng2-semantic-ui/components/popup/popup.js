import { Component, ViewChild, ViewContainerRef, ElementRef, EventEmitter, HostListener } from '@angular/core';
import { Transition, TransitionDirection } from '../transition/transition';
import { TransitionController } from '../transition/transition-controller';
import { PositioningService } from '../util/positioning.service';
var SuiPopup = (function () {
    /**
     * @param {?} elementRef
     */
    function SuiPopup(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._templateInjected = false;
        this.config = {
            inverted: false,
            transition: "scale",
            transitionDuration: 200
        };
        this._isOpen = false;
        this.onClose = new EventEmitter();
    }
    Object.defineProperty(SuiPopup.prototype, "anchor", {
        /**
         * @param {?} anchor
         * @return {?}
         */
        set: function (anchor) {
            this._position = new PositioningService(anchor, this._container.element, this.placement, ".dynamic.arrow");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "position", {
        /**
         * @return {?}
         */
        get: function () {
            if (this._position) {
                return this._position.state;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.position) {
                return this.position.placement.split("-").shift();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "isOpen", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SuiPopup.prototype.open = function () {
        var _this = this;
        if (!this._isOpen) {
            clearTimeout(this._closingTimeout);
            if (this.config.template && !this._templateInjected) {
                this._templateSibling.createEmbeddedView(this.config.template, { $implicit: this });
                this._templateInjected = true;
            }
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In));
            setTimeout(function () { return _this._position.update(); });
            this._isOpen = true;
        }
    };
    /**
     * @return {?}
     */
    SuiPopup.prototype.close = function () {
        var _this = this;
        if (this._isOpen) {
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            clearTimeout(this._closingTimeout);
            this._closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
            this._isOpen = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SuiPopup.prototype.onClick = function (event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    };
    return SuiPopup;
}());
export { SuiPopup };
SuiPopup.decorators = [
    { type: Component, args: [{
                selector: 'sui-popup',
                template: "\n<div class=\"ui popup\" [class.inverted]=\"config.inverted\" [class.basic]=\"config.basic\" [suiTransition]=\"transitionController\" [attr.direction]=\"direction\" #container>\n    <ng-container *ngIf=\"!config.template\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n    <sui-popup-arrow [position]=\"position\" [inverted]=\"config.inverted\" [basic]=\"config.basic\"></sui-popup-arrow>\n</div>\n",
                styles: ["\n.ui.popup {\n    right: auto;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    display: none;\n}\n\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 1em;\n    margin-right: 1em;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiPopup.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SuiPopup.propDecorators = {
    '_container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
    '_templateSibling': [{ type: ViewChild, args: ['templateSibling', { read: ViewContainerRef },] },],
    'onClick': [{ type: HostListener, args: ["click", ["$event"],] },],
};
function SuiPopup_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiPopup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiPopup.ctorParameters;
    /** @type {?} */
    SuiPopup.propDecorators;
    /** @type {?} */
    SuiPopup.prototype.transitionController;
    /** @type {?} */
    SuiPopup.prototype._templateInjected;
    /** @type {?} */
    SuiPopup.prototype.config;
    /** @type {?} */
    SuiPopup.prototype._position;
    /** @type {?} */
    SuiPopup.prototype.placement;
    /** @type {?} */
    SuiPopup.prototype._isOpen;
    /** @type {?} */
    SuiPopup.prototype._closingTimeout;
    /** @type {?} */
    SuiPopup.prototype.onClose;
    /** @type {?} */
    SuiPopup.prototype._container;
    /** @type {?} */
    SuiPopup.prototype._templateSibling;
    /** @type {?} */
    SuiPopup.prototype.elementRef;
}
//# sourceMappingURL=popup.js.map