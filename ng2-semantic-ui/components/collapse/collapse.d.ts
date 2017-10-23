import { ElementRef, Renderer } from '@angular/core';
import "web-animations-js";
export declare class SuiCollapse {
    private _element;
    private _renderer;
    private _isExpanded;
    private readonly isCollapsed;
    private _isCollapsing;
    private _pristine;
    private suiCollapse;
    collapseDuration: number;
    constructor(_element: ElementRef, _renderer: Renderer);
    hide(): void;
    show(): void;
    private animate(startHeight, endHeight, callback);
}
