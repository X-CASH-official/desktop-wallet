import { OnChanges, OnInit, EventEmitter, ExistingProvider, ElementRef, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { IOption } from './option.interface';
import { Option } from './option';
import { OptionList } from './option-list';
export declare const SELECT_VALUE_ACCESSOR: ExistingProvider;
export declare class SelectComponent implements ControlValueAccessor, OnChanges, OnInit {
    private hostElement;
    options: Array<IOption>;
    allowClear: boolean;
    disabled: boolean;
    multiple: boolean;
    noFilter: number;
    highlightColor: string;
    highlightTextColor: string;
    notFoundMsg: string;
    placeholder: string;
    filterPlaceholder: string;
    label: string;
    opened: EventEmitter<null>;
    closed: EventEmitter<null>;
    selected: EventEmitter<IOption>;
    deselected: EventEmitter<IOption | IOption[]>;
    focus: EventEmitter<null>;
    blur: EventEmitter<null>;
    noOptionsFound: EventEmitter<string>;
    filterInputChanged: EventEmitter<string>;
    selectionSpan: ElementRef;
    dropdown: SelectDropdownComponent;
    filterInput: ElementRef;
    optionTemplate: TemplateRef<any>;
    private _value;
    optionList: OptionList;
    hasFocus: boolean;
    isOpen: boolean;
    isBelow: boolean;
    filterEnabled: boolean;
    filterInputWidth: number;
    private isDisabled;
    placeholderView: string;
    private clearClicked;
    private selectContainerClicked;
    private optionListClicked;
    private optionClicked;
    width: number;
    top: number;
    left: number;
    private onChange;
    private onTouched;
    constructor(hostElement: ElementRef);
    /** Event handlers. **/
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    onWindowBlur(): void;
    onWindowClick(): void;
    onWindowResize(): void;
    onSelectContainerClick(event: any): void;
    onSelectContainerFocus(): void;
    onSelectContainerKeydown(event: any): void;
    onOptionsListClick(): void;
    onDropdownOptionClicked(option: Option): void;
    onSingleFilterClick(): void;
    onSingleFilterFocus(): void;
    onFilterInput(term: string): void;
    onSingleFilterKeydown(event: any): void;
    onMultipleFilterKeydown(event: any): void;
    onMultipleFilterFocus(): void;
    onClearSelectionClick(event: any): void;
    onDeselectOptionClick(option: Option): void;
    /** API. **/
    open(): void;
    close(): void;
    clear(): void;
    select(value: string | Array<string>): void;
    /** ControlValueAccessor interface methods. **/
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    /** Input change handling. **/
    private handleInputChanges;
    private updateOptionList;
    private updateFilterEnabled;
    /** Value. **/
    value: string | string[];
    private valueChanged;
    private updateState;
    /** Select. **/
    private selectOption;
    private deselectOption;
    private clearSelection;
    private toggleSelectOption;
    private selectHighlightedOption;
    private deselectLast;
    /** Dropdown. **/
    private toggleDropdown;
    private openDropdown;
    private closeDropdown;
    /** Filter. **/
    private filter;
    private clearFilterInput;
    private setMultipleFilterInput;
    /** Keys. **/
    private KEYS;
    private handleSelectContainerKeydown;
    private handleMultipleFilterKeydown;
    private handleSingleFilterKeydown;
    /** View. **/
    _blur(): void;
    _focus(): void;
    _focusSelectContainer(): void;
    private updateWidth;
    private updatePosition;
    private updateFilterWidth;
}
