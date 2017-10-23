var SuiAccordionService = (function () {
    function SuiAccordionService() {
        this.closeOthers = true;
        this.transitionDuration = 350;
        this.panels = [];
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    SuiAccordionService.prototype.addPanel = function (panel) {
        panel.service = this;
        this.panels.push(panel);
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    SuiAccordionService.prototype.closeOtherPanels = function (panel) {
        if (!this.closeOthers) {
            return;
        }
        this.panels.forEach(function (p) {
            if (p !== panel) {
                p.isOpen = false;
            }
        });
    };
    return SuiAccordionService;
}());
export { SuiAccordionService };
function SuiAccordionService_tsickle_Closure_declarations() {
    /** @type {?} */
    SuiAccordionService.prototype.closeOthers;
    /** @type {?} */
    SuiAccordionService.prototype.transitionDuration;
    /** @type {?} */
    SuiAccordionService.prototype.panels;
}
//# sourceMappingURL=accordion.service.js.map