import { Renderer, ElementRef, EventEmitter } from '@angular/core';
import { SidebarService, SidebarTransition, SidebarDirection } from './sidebar.service';
export declare class SuiSidebar {
    private _renderer;
    private _element;
    service: SidebarService;
    private _sidebarClasses;
    transition: SidebarTransition;
    direction: SidebarDirection;
    isVisible: boolean;
    readonly isVisibleChange: EventEmitter<boolean>;
    readonly isAnimating: boolean;
    constructor(_renderer: Renderer, _element: ElementRef);
    private updateDimensions();
    private setClass(className, isAdd?);
    open(): void;
    close(): void;
    toggle(): void;
}
