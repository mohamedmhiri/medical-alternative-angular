import { ElementRef, Renderer } from '@angular/core';
import { SidebarService } from './sidebar.service';
export declare class SuiSidebarSibling {
    private _renderer;
    private _element;
    private _service;
    service: SidebarService;
    isDimmedWhenVisible: boolean;
    readonly isVisible: boolean;
    readonly isDimmed: boolean;
    private _siblingClasses;
    constructor(_renderer: Renderer, _element: ElementRef);
    private updateTransform();
    onClick(event: MouseEvent): void;
}
