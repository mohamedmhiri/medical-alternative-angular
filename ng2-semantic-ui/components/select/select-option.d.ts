import { EventEmitter, ViewContainerRef, Renderer, ElementRef } from '@angular/core';
import { SuiDropdownMenuItem } from '../dropdown/dropdown-menu';
import { HandledMouseEvent } from '../util/util';
export declare type PropertyReader<T> = (obj: T) => string;
export interface ISelectRenderedOption<T> {
    value: T;
    isActive?: boolean;
    readLabel: PropertyReader<T>;
    usesTemplate: boolean;
    templateSibling: ViewContainerRef;
}
export declare class SuiSelectOption<T> extends SuiDropdownMenuItem implements ISelectRenderedOption<T> {
    private _optionClasses;
    value: T;
    onSelected: EventEmitter<T>;
    isActive: boolean;
    readLabel: (obj: T) => string;
    usesTemplate: boolean;
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer, element: ElementRef);
    onClick(e: HandledMouseEvent): void;
}
