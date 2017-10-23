import { EventEmitter } from '@angular/core';
import { CustomValueAccessor, CustomValueAccessorHost } from '../util/custom-value-accessor';
export declare class SuiRating implements CustomValueAccessorHost<number> {
    private _ratingClasses;
    value: number;
    valueChange: EventEmitter<number>;
    private _maximum;
    maximum: number;
    isReadonly: boolean;
    readonly icons: any[];
    private _hoveredIndex;
    constructor();
    private onClick(i);
    private onMouseover(i);
    private onMouseout();
    writeValue(value: number): void;
}
export declare class SuiRatingValueAccessor extends CustomValueAccessor<number, SuiRating> {
    constructor(host: SuiRating);
}
