import { EventEmitter } from '@angular/core';
export interface IMessage {
    dismiss(): void;
}
export declare class SuiMessage implements IMessage {
    isDismissable: boolean;
    onDismiss: EventEmitter<SuiMessage>;
    isDismissed: boolean;
    private _transition;
    transition: string;
    transitionDuration: number;
    private _classes;
    constructor();
    dismiss(): void;
}
