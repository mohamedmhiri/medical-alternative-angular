import { EventEmitter, ElementRef, Renderer } from '@angular/core';
import { SuiSelectBase } from './select-base';
import { ISelectRenderedOption } from './select-option';
import { CustomValueAccessorHost, CustomValueAccessor } from '../util/custom-value-accessor';
export declare type SingleItemLookup<T, U> = (query: string, initial?: U) => Promise<T>;
export declare class SuiSelect<T, U> extends SuiSelectBase<T, U> implements CustomValueAccessorHost<U> {
    selectedOption: T;
    private _writtenOption;
    private _optionTemplateSibling;
    selectedOptionChange: EventEmitter<U>;
    protected optionsUpdateHook(): void;
    protected queryUpdateHook(): void;
    constructor(element: ElementRef, renderer: Renderer);
    selectOption(option: T): void;
    writeValue(value: U): void;
    protected initialiseRenderedOption(option: ISelectRenderedOption<T>): void;
    private drawSelectedOption();
}
export declare class SuiSelectValueAccessor<T, U> extends CustomValueAccessor<U, SuiSelect<T, U>> {
    constructor(host: SuiSelect<T, U>);
}
