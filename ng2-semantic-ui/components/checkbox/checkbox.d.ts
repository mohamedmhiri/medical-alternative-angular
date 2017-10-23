import { EventEmitter } from '@angular/core';
import { CustomValueAccessorHost, CustomValueAccessor } from '../util/custom-value-accessor';
export declare class SuiCheckbox implements CustomValueAccessorHost<boolean> {
    private _checkboxClasses;
    name: string;
    isChecked: boolean;
    checkChange: EventEmitter<boolean>;
    isDisabled: boolean;
    isReadonly: boolean;
    readonly checkedAttribute: string;
    readonly isDisabledAttribute: string;
    constructor();
    onClick(): void;
    toggle(): void;
    writeValue(value: boolean): void;
}
export declare class SuiCheckboxValueAccessor extends CustomValueAccessor<boolean, SuiCheckbox> {
    constructor(host: SuiCheckbox);
}
