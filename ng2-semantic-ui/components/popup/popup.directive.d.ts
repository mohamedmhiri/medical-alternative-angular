import { ElementRef, ComponentFactoryResolver, ViewContainerRef, TemplateRef } from '@angular/core';
import { SuiPopup } from './popup';
import { PositioningPlacement } from '../util/positioning.service';
import { TemplateRefContext } from '../util/util';
export declare type PopupTrigger = "hover" | "click" | "outsideClick" | "focus" | "manual";
export interface IPopup {
    open(): void;
    close(): void;
    toggle(): void;
}
export declare const PopupTrigger: {
    Hover: PopupTrigger;
    Click: PopupTrigger;
    OutsideClick: PopupTrigger;
    Focus: PopupTrigger;
    Manual: PopupTrigger;
};
export declare class SuiPopupDirective implements IPopup {
    private _element;
    private _viewContainerRef;
    private _componentFactoryResolver;
    private _config;
    private _placement;
    popupTemplate: TemplateRef<TemplateRefContext<SuiPopup>>;
    popupHeader: string;
    popupText: string;
    popupInverted: boolean;
    popupBasic: boolean;
    popupTransition: string;
    popupTransitionDuration: number;
    popupPlacement: PositioningPlacement;
    popupTrigger: PopupTrigger;
    private _popupComponentRef;
    private readonly _popup;
    constructor(_element: ElementRef, _viewContainerRef: ViewContainerRef, _componentFactoryResolver: ComponentFactoryResolver);
    private copyConfig();
    open(): void;
    close(): void;
    toggle(): void;
    private onMouseEnter();
    private onMouseLeave();
    private onClick();
    onDocumentClick(e: MouseEvent): void;
    private onFocus();
    private onFocusOut();
}
