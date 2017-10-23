import { EventEmitter, AfterContentInit, ElementRef } from '@angular/core';
import { DropdownService, DropdownAutoCloseType } from './dropdown.service';
import { HandledMouseEvent, HandledKeyboardEvent } from '../util/util';
export declare class SuiDropdown implements AfterContentInit {
    private _element;
    service: DropdownService;
    private _menu;
    private _children;
    readonly children: SuiDropdown[];
    readonly isOpenChange: EventEmitter<boolean>;
    readonly isActive: boolean;
    isOpen: boolean;
    isDisabled: boolean;
    readonly tabIndex: number;
    autoClose: DropdownAutoCloseType;
    constructor(_element: ElementRef);
    ngAfterContentInit(): void;
    private childrenUpdated();
    onClick(e: HandledMouseEvent): void;
    onKeypress(e: HandledKeyboardEvent): void;
    onDocumentClick(e: MouseEvent): void;
}
