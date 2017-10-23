import { Renderer, ElementRef, AfterContentInit, QueryList, ChangeDetectorRef } from '@angular/core';
import { SuiTransition } from '../transition/transition';
import { DropdownService } from './dropdown.service';
import { KeyCode, HandledMouseEvent } from '../util/util';
import "element-closest";
export declare class SuiDropdownMenuItem {
    private _renderer;
    element: ElementRef;
    readonly isDisabled: boolean;
    private _isSelected;
    isSelected: boolean;
    selectedClass: string;
    childDropdownMenu: SuiDropdownMenu;
    readonly hasChildDropdown: boolean;
    constructor(_renderer: Renderer, element: ElementRef);
    performClick(): void;
}
export declare class SuiDropdownMenu extends SuiTransition implements AfterContentInit {
    element: ElementRef;
    private _service;
    private _transitionController;
    menuTransition: string;
    menuTransitionDuration: number;
    service: DropdownService;
    private _itemsQueryInternal;
    private _itemsQueryOverride;
    items: QueryList<SuiDropdownMenuItem>;
    private readonly _itemsQuery;
    private readonly _items;
    selectedItems: SuiDropdownMenuItem[];
    menuAutoSelectFirst: boolean;
    menuSelectedItemClass: string;
    constructor(renderer: Renderer, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(e: HandledMouseEvent): void;
    onDocumentKeydown(e: KeyboardEvent): void;
    resetSelection(): void;
    updateSelection(selectedItem: SuiDropdownMenuItem, keyCode: KeyCode): SuiDropdownMenuItem;
    scrollToItem(item: SuiDropdownMenuItem): void;
    ngAfterContentInit(): void;
    private onItemsChanged();
}
