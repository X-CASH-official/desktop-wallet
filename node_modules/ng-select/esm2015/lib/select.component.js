/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, forwardRef, ElementRef, ContentChild, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { OptionList } from './option-list';
/** @type {?} */
export const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => SelectComponent)),
    multi: true
};
export class SelectComponent {
    /**
     * @param {?} hostElement
     */
    constructor(hostElement) {
        this.hostElement = hostElement;
        // Data input.
        this.options = [];
        // Functionality settings.
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        // Text settings.
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        // Output events.
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this.filterInputChanged = new EventEmitter();
        this._value = [];
        this.optionList = new OptionList([]);
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * Keys. *
         */
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    ngOnInit() {
        this.placeholderView = this.placeholder;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.handleInputChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateState();
    }
    /**
     * @return {?}
     */
    onWindowBlur() {
        this._blur();
    }
    /**
     * @return {?}
     */
    onWindowClick() {
        if (!this.selectContainerClicked &&
            (!this.optionListClicked || (this.optionListClicked && this.optionClicked))) {
            this.closeDropdown(this.optionClicked);
            if (!this.optionClicked) {
                this._blur();
            }
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.updateWidth();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerClick(event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    }
    /**
     * @return {?}
     */
    onSelectContainerFocus() {
        this._focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerKeydown(event) {
        this.handleSelectContainerKeydown(event);
    }
    /**
     * @return {?}
     */
    onOptionsListClick() {
        this.optionListClicked = true;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onDropdownOptionClicked(option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    }
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.selectContainerClicked = true;
    }
    /**
     * @return {?}
     */
    onSingleFilterFocus() {
        this._focus();
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onFilterInput(term) {
        this.filterInputChanged.emit(term);
        this.filter(term);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.handleSingleFilterKeydown(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterKeydown(event) {
        this.handleMultipleFilterKeydown(event);
    }
    /**
     * @return {?}
     */
    onMultipleFilterFocus() {
        this._focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClearSelectionClick(event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onDeselectOptionClick(option) {
        this.clearClicked = true;
        this.deselectOption(option);
    }
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    open() {
        this.openDropdown();
    }
    /**
     * @return {?}
     */
    close() {
        this.closeDropdown(false);
    }
    /**
     * @return {?}
     */
    clear() {
        this.clearSelection();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.writeValue(value);
    }
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    handleInputChanges(changes) {
        /** @type {?} */
        let optionsChanged = changes.hasOwnProperty('options');
        /** @type {?} */
        let noFilterChanged = changes.hasOwnProperty('noFilter');
        /** @type {?} */
        let placeholderChanged = changes.hasOwnProperty('placeholder');
        if (optionsChanged) {
            this.updateOptionList(changes.options.currentValue);
            this.updateState();
        }
        if (optionsChanged || noFilterChanged) {
            this.updateFilterEnabled();
        }
        if (placeholderChanged) {
            this.updateState();
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    updateOptionList(options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
    }
    /**
     * @private
     * @return {?}
     */
    updateFilterEnabled() {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    }
    /**
     * Value. *
     * @return {?}
     */
    get value() {
        return this.multiple ? this._value : this._value[0];
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (typeof v === 'undefined' || v === null || v === '') {
            v = [];
        }
        else if (typeof v === 'string') {
            v = [v];
        }
        else if (!Array.isArray(v)) {
            throw new TypeError('Value must be a string or an array.');
        }
        this.optionList.value = v;
        this._value = v;
        this.updateState();
    }
    /**
     * @private
     * @return {?}
     */
    valueChanged() {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    }
    /**
     * @private
     * @return {?}
     */
    updateState() {
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.updateFilterWidth();
        }));
    }
    /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    deselectOption(option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.multiple) {
                    this.updatePosition();
                    this.optionList.highlight();
                    if (this.isOpen) {
                        this.dropdown.moveHighlightedIntoView();
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearSelection() {
        /** @type {?} */
        let selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.wrappedOption)));
            }
        }
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    toggleSelectOption(option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    }
    /**
     * @private
     * @return {?}
     */
    selectHighlightedOption() {
        /** @type {?} */
        let option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    }
    /**
     * @private
     * @return {?}
     */
    deselectLast() {
        /** @type {?} */
        let sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            let option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    }
    /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    toggleDropdown() {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    }
    /**
     * @private
     * @return {?}
     */
    openDropdown() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.updateWidth();
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.updatePosition();
                if (this.multiple && this.filterEnabled) {
                    this.filterInput.nativeElement.focus();
                }
                this.opened.emit(null);
            }));
        }
    }
    /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    closeDropdown(focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    }
    /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let hasShown = this.optionList.filter(term);
            if (!hasShown) {
                this.noOptionsFound.emit(term);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearFilterInput() {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setMultipleFilterInput(value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleSelectContainerKeydown(event) {
        /** @type {?} */
        let key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown(event.shiftKey);
                this._blur();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            // DEPRICATED --> SPACE
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout((/**
                 * @return {?}
                 */
                () => { this.openDropdown(); }));
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleMultipleFilterKeydown(event) {
        /** @type {?} */
        let key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleSingleFilterKeydown(event) {
        /** @type {?} */
        let key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    }
    /**
     * View. *
     * @return {?}
     */
    _blur() {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    }
    /**
     * @return {?}
     */
    _focus() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    }
    /**
     * @return {?}
     */
    _focusSelectContainer() {
        this.selectionSpan.nativeElement.focus();
    }
    /**
     * @private
     * @return {?}
     */
    updateWidth() {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    }
    /**
     * @private
     * @return {?}
     */
    updatePosition() {
        if (typeof this.dropdown !== 'undefined') {
            /** @type {?} */
            const hostRect = this.hostElement.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const dropRect = this.dropdown.hostElement.nativeElement.firstElementChild.getBoundingClientRect();
            /** @type {?} */
            const windowHeight = window.innerHeight;
            /** @type {?} */
            const top = spanRect.top - hostRect.top;
            /** @type {?} */
            const bottom = hostRect.bottom + dropRect.height;
            this.isBelow = bottom < windowHeight;
            this.left = spanRect.left - hostRect.left;
            this.top = this.isBelow ? top + spanRect.height : top - dropRect.height;
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateFilterWidth() {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            let value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-select',
                template: "<label\n    *ngIf=\"label !== ''\">\n    {{label}}\n</label>\n<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'above': !isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected\">\n            <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: optionList.selection[0].wrappedOption, onDeselectOptionClick: onDeselectOptionClick}\"></ng-container>\n            <span *ngIf=\"!optionTemplate\">{{optionList.selection[0].label}}</span>\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && optionList.hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!filterEnabled && !optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            autocomplete=\"off\"\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onFilterInput($event.target.value)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"\n            (focus)=\"onMultipleFilterFocus()\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [placeholder]=\"filterPlaceholder\"\n    [isBelow]=\"isBelow\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    [optionTemplate]=\"optionTemplate\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (optionsListClick)=\"onOptionsListClick()\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterFocus)=\"onSingleFilterFocus()\"\n    (singleFilterInput)=\"onFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n",
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                styles: ["ng-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}ng-select *{box-sizing:border-box}ng-select>div{border:1px solid #ddd;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}ng-select>div.disabled{background-color:#eee;color:#aaa;cursor:default;pointer-events:none}ng-select>div>div.single{display:flex;height:30px;width:100%}ng-select>div>div.single>div.placeholder,ng-select>div>div.single>div.value{flex:1;line-height:30px;overflow:hidden;padding:0 10px;white-space:nowrap}ng-select>div>div.single>div.placeholder{color:#757575}ng-select>div>div.single>div.clear,ng-select>div>div.single>div.toggle{color:#aaa;line-height:30px;text-align:center;width:30px}ng-select>div>div.single>div.clear:hover,ng-select>div>div.single>div.toggle:hover{background-color:#ececec}ng-select>div>div.single>div.clear{font-size:18px}ng-select>div>div.single>div.toggle{font-size:14px}ng-select>div>div.multiple{display:flex;flex-flow:row wrap;height:100%;min-height:30px;padding:0 10px;width:100%}ng-select>div>div.multiple>div.option{background-color:#eee;border:1px solid #aaa;border-radius:4px;color:#333;cursor:default;display:inline-block;flex-shrink:0;font-size:14px;line-height:22px;margin:3px 5px 3px 0;padding:0 4px}ng-select>div>div.multiple>div.option span.deselect-option{color:#aaa;cursor:pointer;font-size:14px;height:20px;line-height:20px}ng-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}ng-select>div>div.multiple input{background-color:transparent;border:none;cursor:pointer;height:30px;line-height:30px;padding:0}ng-select>div>div.multiple input:focus{outline:0}ng-select label{color:rgba(0,0,0,.38);display:block;font-size:13px;padding:4px 0}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    allowClear: [{ type: Input }],
    disabled: [{ type: Input }],
    multiple: [{ type: Input }],
    noFilter: [{ type: Input }],
    highlightColor: [{ type: Input }],
    highlightTextColor: [{ type: Input }],
    notFoundMsg: [{ type: Input }],
    placeholder: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    label: [{ type: Input }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    selected: [{ type: Output }],
    deselected: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    noOptionsFound: [{ type: Output }],
    filterInputChanged: [{ type: Output }],
    selectionSpan: [{ type: ViewChild, args: ['selection', { static: true },] }],
    dropdown: [{ type: ViewChild, args: ['dropdown', { static: false },] }],
    filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
    optionTemplate: [{ type: ContentChild, args: ['optionTemplate', { static: false },] }],
    onWindowBlur: [{ type: HostListener, args: ['window:blur',] }],
    onWindowClick: [{ type: HostListener, args: ['window:click',] }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.allowClear;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.multiple;
    /** @type {?} */
    SelectComponent.prototype.noFilter;
    /** @type {?} */
    SelectComponent.prototype.highlightColor;
    /** @type {?} */
    SelectComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectComponent.prototype.placeholder;
    /** @type {?} */
    SelectComponent.prototype.filterPlaceholder;
    /** @type {?} */
    SelectComponent.prototype.label;
    /** @type {?} */
    SelectComponent.prototype.opened;
    /** @type {?} */
    SelectComponent.prototype.closed;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.deselected;
    /** @type {?} */
    SelectComponent.prototype.focus;
    /** @type {?} */
    SelectComponent.prototype.blur;
    /** @type {?} */
    SelectComponent.prototype.noOptionsFound;
    /** @type {?} */
    SelectComponent.prototype.filterInputChanged;
    /** @type {?} */
    SelectComponent.prototype.selectionSpan;
    /** @type {?} */
    SelectComponent.prototype.dropdown;
    /** @type {?} */
    SelectComponent.prototype.filterInput;
    /** @type {?} */
    SelectComponent.prototype.optionTemplate;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype._value;
    /** @type {?} */
    SelectComponent.prototype.optionList;
    /** @type {?} */
    SelectComponent.prototype.hasFocus;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
    /** @type {?} */
    SelectComponent.prototype.isBelow;
    /** @type {?} */
    SelectComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectComponent.prototype.filterInputWidth;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.isDisabled;
    /** @type {?} */
    SelectComponent.prototype.placeholderView;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.clearClicked;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.selectContainerClicked;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.optionListClicked;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.optionClicked;
    /** @type {?} */
    SelectComponent.prototype.width;
    /** @type {?} */
    SelectComponent.prototype.top;
    /** @type {?} */
    SelectComponent.prototype.left;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.onTouched;
    /**
     * Keys. *
     * @type {?}
     * @private
     */
    SelectComponent.prototype.KEYS;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUErQixZQUFZLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RPLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUdwRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV6QyxNQUFNLE9BQU8scUJBQXFCLEdBQXFCO0lBQ25ELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBVUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUErRHhCLFlBQ1ksV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7O1FBN0QxQixZQUFPLEdBQW1CLEVBQUUsQ0FBQzs7UUFHN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFXLENBQUMsQ0FBQzs7UUFPckIsZ0JBQVcsR0FBVyxrQkFBa0IsQ0FBQztRQUN6QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IsVUFBSyxHQUFXLEVBQUUsQ0FBQzs7UUFHbEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFD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QUN0RCw2Q0FBMEQ7O0lBRTFELHdDQUFvRTs7SUFDcEUsbUNBQTRFOztJQUM1RSxzQ0FBcUU7O0lBRXJFLHlDQUFvRjs7Ozs7SUFFcEYsaUNBQWdDOztJQUNoQyxxQ0FBNEM7O0lBRzVDLG1DQUEwQjs7SUFDMUIsaUNBQXdCOztJQUN4QixrQ0FBd0I7O0lBRXhCLHdDQUE4Qjs7SUFDOUIsMkNBQTZCOzs7OztJQUM3QixxQ0FBb0M7O0lBQ3BDLDBDQUE2Qjs7Ozs7SUFFN0IsdUNBQXNDOzs7OztJQUN0QyxpREFBZ0Q7Ozs7O0lBQ2hELDRDQUEyQzs7Ozs7SUFDM0Msd0NBQXVDOztJQUd2QyxnQ0FBYzs7SUFDZCw4QkFBWTs7SUFDWiwrQkFBYTs7Ozs7SUFFYixtQ0FBa0M7Ozs7O0lBQ2xDLG9DQUE2Qjs7Ozs7O0lBK1U3QiwrQkFRRTs7Ozs7SUFwVkUsc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRXhpc3RpbmdQcm92aWRlciwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NlbGVjdERyb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHtJT3B0aW9ufSBmcm9tICcuL29wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7T3B0aW9uTGlzdH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICAgIC8vIERhdGEgaW5wdXQuXG4gICAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8SU9wdGlvbj4gPSBbXTtcblxuICAgIC8vIEZ1bmN0aW9uYWxpdHkgc2V0dGluZ3MuXG4gICAgQElucHV0KCkgYWxsb3dDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBub0ZpbHRlcjogbnVtYmVyID0gMDtcblxuICAgIC8vIFN0eWxlIHNldHRpbmdzLlxuICAgIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG5cbiAgICAvLyBUZXh0IHNldHRpbmdzLlxuICAgIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmcgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG5cbiAgICAvLyBPdXRwdXQgZXZlbnRzLlxuICAgIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24+KCk7XG4gICAgQE91dHB1dCgpIGRlc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24gfCBJT3B0aW9uW10+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBub09wdGlvbnNGb3VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBmaWx0ZXJJbnB1dENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlbGVjdGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIHNlbGVjdGlvblNwYW46IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJvcGRvd246IFNlbGVjdERyb3Bkb3duQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZCgnb3B0aW9uVGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwcml2YXRlIF92YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuICAgIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3QgPSBuZXcgT3B0aW9uTGlzdChbXSk7XG5cbiAgICAvLyBWaWV3IHN0YXRlIHZhcmlhYmxlcy5cbiAgICBoYXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQmVsb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZmlsdGVyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgZmlsdGVySW5wdXRXaWR0aDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwbGFjZWhvbGRlclZpZXc6IHN0cmluZyA9ICcnO1xuXG4gICAgcHJpdmF0ZSBjbGVhckNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdENvbnRhaW5lckNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9wdGlvbkxpc3RDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvcHRpb25DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBXaWR0aCBhbmQgcG9zaXRpb24gZm9yIHRoZSBkcm9wZG93biBjb250YWluZXIuXG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gICAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICAgKSB7fVxuXG4gICAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Ymx1cicpXG4gICAgb25XaW5kb3dCbHVyKCkge1xuICAgICAgICB0aGlzLl9ibHVyKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJylcbiAgICBvbldpbmRvd0NsaWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCAmJlxuICAgICAgICAgICAgKCF0aGlzLm9wdGlvbkxpc3RDbGlja2VkIHx8ICh0aGlzLm9wdGlvbkxpc3RDbGlja2VkICYmIHRoaXMub3B0aW9uQ2xpY2tlZCkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24odGhpcy5vcHRpb25DbGlja2VkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25DbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3RDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICAgIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb250YWluZXJDbGljayhldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5jbGVhckNsaWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0Q29udGFpbmVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbnNMaXN0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdENsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uRHJvcGRvd25PcHRpb25DbGlja2VkKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPyB0aGlzLnRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb24pIDogdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgICAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25GaWx0ZXJJbnB1dCh0ZXJtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dENoYW5nZWQuZW1pdCh0ZXJtKTtcbiAgICAgICAgdGhpcy5maWx0ZXIodGVybSk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk11bHRpcGxlRmlsdGVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25DbGVhclNlbGVjdGlvbkNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKTtcbiAgICB9XG5cbiAgICBvbkRlc2VsZWN0T3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgLyoqIEFQSS4gKiovXG5cbiAgICAvLyBUT0RPIGZpeCBpc3N1ZXMgd2l0aCBnbG9iYWwgY2xpY2sva2V5IGhhbmRsZXIgdGhhdCBjbG9zZXMgdGhlIGRyb3Bkb3duLlxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bihmYWxzZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBzZWxlY3QodmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIG1ldGhvZHMuICoqL1xuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvKiogSW5wdXQgY2hhbmdlIGhhbmRsaW5nLiAqKi9cblxuICAgIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgbGV0IG9wdGlvbnNDaGFuZ2VkOiBib29sZWFuID0gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpO1xuICAgICAgICBsZXQgbm9GaWx0ZXJDaGFuZ2VkOiBib29sZWFuID0gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbm9GaWx0ZXInKTtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyQ2hhbmdlZDogYm9vbGVhbiA9IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BsYWNlaG9sZGVyJyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbkxpc3QoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnNDaGFuZ2VkIHx8IG5vRmlsdGVyQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJFbmFibGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVPcHRpb25MaXN0KG9wdGlvbnM6IEFycmF5PElPcHRpb24+KSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IG5ldyBPcHRpb25MaXN0KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZpbHRlckVuYWJsZWQoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyRW5hYmxlZCA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aCA+PSB0aGlzLm5vRmlsdGVyO1xuICAgIH1cblxuICAgIC8qKiBWYWx1ZS4gKiovXG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3ZhbHVlIDogdGhpcy5fdmFsdWVbMF07XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCB2ID09PSAnJykge1xuICAgICAgICAgICAgdiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdiA9IFt2XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC52YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMub3B0aW9uTGlzdC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5vcHRpb25MaXN0Lmhhc1NlbGVjdGVkID8gJycgOiB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIFNlbGVjdC4gKiovXG5cbiAgICBwcml2YXRlIHNlbGVjdE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgICAgICBpZiAoIW9wdGlvbi5zZWxlY3RlZCAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0KG9wdGlvbiwgdGhpcy5tdWx0aXBsZSk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KG9wdGlvbi53cmFwcGVkT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0LmRlc2VsZWN0KG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxlY3Rpb246IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChzZWxlY3Rpb25bMF0ud3JhcHBlZE9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24ubWFwKG9wdGlvbiA9PiBvcHRpb24ud3JhcHBlZE9wdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID8gdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pIDogdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdEhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uOiBPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0ZWRPcHRpb247XG4gICAgICAgIGlmIChvcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc2VsZWN0TGFzdCgpIHtcbiAgICAgICAgbGV0IHNlbDogQXJyYXk8T3B0aW9uPiA9IHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb247XG5cbiAgICAgICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uOiBPcHRpb24gPSBzZWxbc2VsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5zZXRNdWx0aXBsZUZpbHRlcklucHV0KG9wdGlvbi5sYWJlbCArICcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRHJvcGRvd24uICoqL1xuXG4gICAgcHJpdmF0ZSB0b2dnbGVEcm9wZG93bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpIDogdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkRyb3Bkb3duKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5lZC5lbWl0KG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlRHJvcGRvd24oZm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVySW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c1NlbGVjdENvbnRhaW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZWQuZW1pdChudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBGaWx0ZXIuICoqL1xuXG4gICAgcHJpdmF0ZSBmaWx0ZXIodGVybTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBoYXNTaG93bjogYm9vbGVhbiA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXIodGVybSk7XG4gICAgICAgICAgICBpZiAoIWhhc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub09wdGlvbnNGb3VuZC5lbWl0KHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyRmlsdGVySW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE11bHRpcGxlRmlsdGVySW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBLZXlzLiAqKi9cblxuICAgIHByaXZhdGUgS0VZUzogYW55ID0ge1xuICAgICAgICBCQUNLU1BBQ0U6IDgsXG4gICAgICAgIFRBQjogOSxcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBFU0M6IDI3LFxuICAgICAgICBTUEFDRTogMzIsXG4gICAgICAgIFVQOiAzOCxcbiAgICAgICAgRE9XTjogNDBcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkVTQyB8fCAoa2V5ID09PSB0aGlzLktFWVMuVVAgJiYgZXZlbnQuYWx0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLlRBQikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bihldmVudC5zaGlmdEtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuRU5URVIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkT3B0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5VUCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRQcmV2aW91c09wdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkRPV04pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0TmV4dE9wdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIERFUFJJQ0FURUQgLS0+IFNQQUNFXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzLktFWVMuRU5URVIgfHwga2V5ID09PSB0aGlzLktFWVMuU1BBQ0UgfHxcbiAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gdGhpcy5LRVlTLkRPV04gJiYgZXZlbnQuYWx0S2V5KSkge1xuXG4gICAgICAgICAgICAgICAgLyogRklSRUZPWCBIQUNLOlxuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogVGhlIHNldFRpbWVvdXQgaXMgYWRkZWQgdG8gcHJldmVudCB0aGUgZW50ZXIga2V5ZG93biBldmVudFxuICAgICAgICAgICAgICAgICAqIHRvIGJlIHRyaWdnZXJlZCBmb3IgdGhlIGZpbHRlciBpbnB1dCBmaWVsZCwgd2hpY2ggY2F1c2VzXG4gICAgICAgICAgICAgICAgICogdGhlIGRyb3Bkb3duIHRvIGJlIGNsb3NlZCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5vcGVuRHJvcGRvd24oKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5UQUIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5CQUNLU1BBQ0UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkxpc3QuaGFzU2VsZWN0ZWQgJiYgdGhpcy5maWx0ZXJFbmFibGVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0TGFzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5FU0MgfHwga2V5ID09PSB0aGlzLktFWVMuVEFCXG4gICAgICAgICAgICAgICAgfHwga2V5ID09PSB0aGlzLktFWVMuVVAgfHwga2V5ID09PSB0aGlzLktFWVMuRE9XTlxuICAgICAgICAgICAgICAgIHx8IGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFZpZXcuICoqL1xuXG4gICAgX2JsdXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5ibHVyLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9jdXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvY3VzLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9jdXNTZWxlY3RDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kcm9wZG93biAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc3BhblJlY3QgPSB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZWN0ID0gdGhpcy5kcm9wZG93bi5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgdG9wID0gc3BhblJlY3QudG9wIC0gaG9zdFJlY3QudG9wO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gaG9zdFJlY3QuYm90dG9tICsgZHJvcFJlY3QuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmlzQmVsb3cgPSBib3R0b20gPCB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBzcGFuUmVjdC5sZWZ0IC0gaG9zdFJlY3QubGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5pc0JlbG93ID8gdG9wICsgc3BhblJlY3QuaGVpZ2h0IDogdG9wIC0gZHJvcFJlY3QuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJXaWR0aCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcklucHV0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0V2lkdGggPSB2YWx1ZS5sZW5ndGggPT09IDAgP1xuICAgICAgICAgICAgICAgIDEgKyB0aGlzLnBsYWNlaG9sZGVyVmlldy5sZW5ndGggKiAxMCA6IDEgKyB2YWx1ZS5sZW5ndGggKiAxMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==