import { QueryList, AfterContentInit } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "./accordion.service";
export declare class SuiAccordion implements AfterContentInit {
    accordionClasses: boolean;
    closeOthers: boolean;
    transitionDuration: number;
    protected _service: SuiAccordionService;
    protected panels: QueryList<SuiAccordionPanel>;
    constructor();
    ngAfterContentInit(): void;
    updatePanels(): void;
}
