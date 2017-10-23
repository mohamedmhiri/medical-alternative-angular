import { EventEmitter, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SuiTransition } from '../transition/transition';
export declare class SuiDimmer extends SuiTransition {
    private _dimmerClasses;
    private _transitionController;
    private _isDimmed;
    isDimmed: boolean;
    isDimmedChange: EventEmitter<boolean>;
    isClickable: boolean;
    transition: string;
    transitionDuration: number;
    constructor(renderer: Renderer, element: ElementRef, changeDetector: ChangeDetectorRef);
    private onClick();
}
