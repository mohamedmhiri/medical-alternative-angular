import { ControlValueAccessor } from '@angular/forms';
import { InjectionToken, Type } from '@angular/core';
export interface CustomValueAccessorHost<T> {
    writeValue(value: T): void;
}
export declare class CustomValueAccessor<U, T extends CustomValueAccessorHost<U>> implements ControlValueAccessor {
    private _host;
    onChange: () => void;
    onTouched: () => void;
    constructor(_host: T);
    writeValue(value: U): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare function customValueAccessorFactory(type: Function): {
    provide: InjectionToken<ControlValueAccessor>;
    useExisting: Type<any>;
    multi: boolean;
};
