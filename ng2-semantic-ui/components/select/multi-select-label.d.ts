import { EventEmitter, ViewContainerRef, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SuiTransition } from '../transition/transition';
import { ISelectRenderedOption } from './select-option';
import { HandledMouseEvent } from '../util/util';
export declare class SuiMultiSelectLabel<T> extends SuiTransition implements ISelectRenderedOption<T> {
    private _labelClasses;
    private _transitionController;
    value: T;
    onDeselected: EventEmitter<T>;
    readLabel: (obj: T) => string;
    usesTemplate: boolean;
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer, element: ElementRef, changeDetector: ChangeDetectorRef);
    deselectOption(e: HandledMouseEvent): void;
    onClick(e: HandledMouseEvent): void;
}
