import { EventEmitter } from '@angular/core';
import { SuiAccordionService } from "./accordion.service";
import { TransitionController } from '../transition/transition-controller';
export declare class SuiAccordionPanel {
    private _service;
    transitionController: TransitionController;
    service: SuiAccordionService;
    isDisabled: boolean;
    private _isOpen;
    isOpen: boolean;
    readonly transitionDuration: number;
    isOpenChange: EventEmitter<boolean>;
    constructor();
    toggle(): void;
}
