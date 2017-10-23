import { ElementRef, Renderer, EventEmitter, AfterViewInit } from '@angular/core';
import { SuiSelectBase } from './select-base';
import { CustomValueAccessor, CustomValueAccessorHost } from '../util/custom-value-accessor';
export declare class SuiMultiSelect<T, U> extends SuiSelectBase<T, U> implements AfterViewInit, CustomValueAccessorHost<U[]> {
    selectedOptions: T[];
    private _writtenOptions;
    private _renderedSelectedOptions;
    private _renderedSelectedSubscriptions;
    selectedOptionsChange: EventEmitter<U[]>;
    protected optionsUpdateHook(): void;
    readonly availableOptions: T[];
    maxSelected: number;
    readonly maxSelectedReached: boolean;
    private _multiSelectClasses;
    constructor(element: ElementRef, renderer: Renderer);
    selectOption(option: T): void;
    writeValue(values: U[]): void;
    deselectOption(option: T): void;
    onQueryInputKeydown(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
    private onSelectedOptionsRendered();
}
export declare class SuiMultiSelectValueAccessor<T, U> extends CustomValueAccessor<U[], SuiMultiSelect<T, U>> {
    constructor(host: SuiMultiSelect<T, U>);
}
