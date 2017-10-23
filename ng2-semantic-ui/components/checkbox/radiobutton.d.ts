import { EventEmitter } from '@angular/core';
import { CustomValueAccessorHost, CustomValueAccessor } from '../util/custom-value-accessor';
export declare class SuiRadioButton<T> implements CustomValueAccessorHost<T> {
    private _radioClasses;
    name: string;
    value: T;
    isChecked: boolean;
    currentValue: T;
    currentValueChange: EventEmitter<T>;
    isDisabled: boolean;
    isReadonly: boolean;
    readonly checkedAttribute: string;
    readonly isDisabledAttribute: string;
    constructor();
    onClick(): void;
    update(): void;
    writeValue(value: T): void;
}
export declare class SuiRadioButtonValueAccessor<T> extends CustomValueAccessor<T, SuiRadioButton<T>> {
    constructor(host: SuiRadioButton<T>);
}
