import { SuiAccordionPanel } from "./accordion-panel";
export declare class SuiAccordionService {
    closeOthers: boolean;
    transitionDuration: number;
    panels: SuiAccordionPanel[];
    constructor();
    addPanel(panel: SuiAccordionPanel): void;
    closeOtherPanels(panel: SuiAccordionPanel): void;
}
