import { AfterViewInit, EventEmitter, ElementRef } from '@angular/core';
import { DropdownService } from '../dropdown/dropdown.service';
import { SearchService, LookupFn } from './search.service';
import { CustomValueAccessor, CustomValueAccessorHost } from '../util/custom-value-accessor';
export declare class SuiSearch<T> implements AfterViewInit, CustomValueAccessorHost<T> {
    private _element;
    dropdownService: DropdownService;
    searchService: SearchService<T>;
    private _menu;
    private _searchClasses;
    readonly isActive: boolean;
    hasIcon: boolean;
    placeholder: string;
    query: string;
    options: T[] | LookupFn<T>;
    optionsField: string;
    searchDelay: number;
    readonly isSearching: boolean;
    readonly results: T[];
    selectedItem: T;
    itemSelected: EventEmitter<T>;
    constructor(_element: ElementRef);
    ngAfterViewInit(): void;
    select(item: T): void;
    onClick(e: MouseEvent): void;
    onDocumentClick(e: MouseEvent): void;
    readValue(object: T): string;
    writeValue(item: T): void;
}
export declare class SuiSearchValueAccessor<T> extends CustomValueAccessor<T, SuiSearch<T>> {
    constructor(host: SuiSearch<T>);
}
