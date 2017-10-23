import { Component, Input, HostBinding } from '@angular/core';
var SuiPopupArrow = (function () {
    function SuiPopupArrow() {
    }
    Object.defineProperty(SuiPopupArrow.prototype, "direction", {
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
    Object.defineProperty(SuiPopupArrow.prototype, "alignment", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.position) {
                var /** @type {?} */ alignment = this.position.placement.split("-").pop();
                if (alignment == this.direction) {
                    return "center";
                }
                return alignment;
            }
        },
        enumerable: true,
        configurable: true
    });
    return SuiPopupArrow;
}());
export { SuiPopupArrow };
SuiPopupArrow.decorators = [
    { type: Component, args: [{
                selector: 'sui-popup-arrow',
                template: "\n<ng-container *ngIf=\"!basic\">\n    <div class=\"dynamic arrow\" [attr.direction]=\"direction\" *ngIf=\"alignment == 'center'\"></div>\n    <div class=\"static arrow\" [attr.direction]=\"direction\" [attr.alignment]=\"alignment\" *ngIf=\"alignment != 'center'\"></div>\n</ng-container>\n",
                styles: ["\n.arrow {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n:host.inverted .arrow {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"start\"],\n.static.arrow[direction=\"top\"][alignment=\"start\"] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"start\"],\n.static.arrow[direction=\"right\"][alignment=\"start\"] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"end\"],\n.static.arrow[direction=\"top\"][alignment=\"end\"] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"end\"],\n.static.arrow[direction=\"right\"][alignment=\"end\"] {\n    top: auto;\n    bottom: 1em;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
SuiPopupArrow.ctorParameters = function () { return []; };
SuiPopupArrow.propDecorators = {
    'position': [{ type: Input },],
    'inverted': [{ type: HostBinding, args: ["class.inverted",] }, { type: Input },],
    'basic': [{ type: Input },],
};
function SuiPopupArrow_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiPopupArrow.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SuiPopupArrow.ctorParameters;
    /** @type {?} */
    SuiPopupArrow.propDecorators;
    /** @type {?} */
    SuiPopupArrow.prototype.position;
    /** @type {?} */
    SuiPopupArrow.prototype.inverted;
    /** @type {?} */
    SuiPopupArrow.prototype.basic;
}
//# sourceMappingURL=popup-arrow.js.map