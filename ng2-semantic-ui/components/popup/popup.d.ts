/// <reference types="popper.js" />
import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { TransitionController } from '../transition/transition-controller';
import { PositioningPlacement } from '../util/positioning.service';
import { TemplateRefContext } from "../util/util";
import Popper from "popper.js";
export interface IPopupConfiguration {
    template?: TemplateRef<TemplateRefContext<SuiPopup>>;
    header?: string;
    text?: string;
    inverted?: boolean;
    basic?: boolean;
    transition?: string;
    transitionDuration?: number;
}
export declare class SuiPopup {
    elementRef: ElementRef;
    transitionController: TransitionController;
    private _templateInjected;
    config: IPopupConfiguration;
    private _position;
    placement: PositioningPlacement;
    anchor: ElementRef;
    readonly position: Popper.Data;
    readonly direction: string;
    private _isOpen;
    private _closingTimeout;
    onClose: EventEmitter<void>;
    readonly isOpen: boolean;
    private _container;
    private _templateSibling;
    constructor(elementRef: ElementRef);
    open(): void;
    close(): void;
    onClick(event: MouseEvent): void;
}
