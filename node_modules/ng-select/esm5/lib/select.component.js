/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, forwardRef, ElementRef, ContentChild, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { OptionList } from './option-list';
/** @type {?} */
export var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return SelectComponent; })),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(hostElement) {
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
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
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
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.handleInputChanges(changes);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateState();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowBlur = /**
     * @return {?}
     */
    function () {
        this._blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionListClicked = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.filterInputChanged.emit(term);
        this.filter(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown(false);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.writeValue(value);
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Input change handling. **/
    /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.handleInputChanges = /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var optionsChanged = changes.hasOwnProperty('options');
        /** @type {?} */
        var noFilterChanged = changes.hasOwnProperty('noFilter');
        /** @type {?} */
        var placeholderChanged = changes.hasOwnProperty('placeholder');
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
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateFilterEnabled = /**
     * @private
     * @return {?}
     */
    function () {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.updateFilterWidth();
        }));
    };
    /** Select. **/
    /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
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
                function (option) { return option.wrappedOption; })));
            }
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            this.isOpen = true;
            this.updateWidth();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.updatePosition();
                if (_this.multiple && _this.filterEnabled) {
                    _this.filterInput.nativeElement.focus();
                }
                _this.opened.emit(null);
            }));
        }
    };
    /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.filter = /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var key = event.which;
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
                function () { _this.openDropdown(); }));
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype._blur = /**
     * View. *
     * @return {?}
     */
    function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focus = /**
     * @return {?}
     */
    function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focusSelectContainer = /**
     * @return {?}
     */
    function () {
        this.selectionSpan.nativeElement.focus();
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @private
     * @return {?}
     */
    function () {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.dropdown !== 'undefined') {
            /** @type {?} */
            var hostRect = this.hostElement.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var dropRect = this.dropdown.hostElement.nativeElement.firstElementChild.getBoundingClientRect();
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var top_1 = spanRect.top - hostRect.top;
            /** @type {?} */
            var bottom = hostRect.bottom + dropRect.height;
            this.isBelow = bottom < windowHeight;
            this.left = spanRect.left - hostRect.left;
            this.top = this.isBelow ? top_1 + spanRect.height : top_1 - dropRect.height;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
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
    SelectComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SelectComponent;
}());
export { SelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUErQixZQUFZLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RPLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUdwRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV6QyxNQUFNLEtBQU8scUJBQXFCLEdBQXFCO0lBQ25ELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFFRDtJQXVFSSx5QkFDWSxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7UUE3RDFCLFlBQU8sR0FBbUIsRUFBRSxDQUFDOztRQUc3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVcsQ0FBQyxDQUFDOztRQU9yQixnQkFBVyxHQUFXLGtCQUFrQixDQUFDO1FBQ3pDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixVQUFLLEdBQVcsRUFBRSxDQUFDOztRQUdsQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN2QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDckQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDaEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFRbEQsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQWUsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBRzVDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQ3BDLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUN4QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFPL0IsYUFBUTs7OztRQUFHLFVBQUMsQ0FBTSxJQUFNLENBQUMsRUFBQztRQUMxQixjQUFTOzs7UUFBRyxjQUFPLENBQUMsRUFBQzs7OztRQStVckIsU0FBSSxHQUFRO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsRUFBRTtZQUNULEdBQUcsRUFBRSxFQUFFO1lBQ1AsS0FBSyxFQUFFLEVBQUU7WUFDVCxFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztJQW5WQyxDQUFDO0lBRUosdUJBQXVCOzs7OztJQUV2QixrQ0FBUTs7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQseUNBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFHRCxzQ0FBWTs7O0lBRFo7UUFFSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUdELHVDQUFhOzs7SUFEYjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtTQUNKO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFHRCx3Q0FBYzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxnREFBc0I7Ozs7SUFBdEIsVUFBdUIsS0FBVTtRQUM3QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCxnREFBc0I7OztJQUF0QjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELGtEQUF3Qjs7OztJQUF4QixVQUF5QixLQUFVO1FBQy9CLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsNENBQWtCOzs7SUFBbEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsaURBQXVCOzs7O0lBQXZCLFVBQXdCLE1BQWM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7SUFFRCw2Q0FBbUI7OztJQUFuQjtRQUNJLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDZDQUFtQjs7O0lBQW5CO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsdUNBQWE7Ozs7SUFBYixVQUFjLElBQVk7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsK0NBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQVU7UUFDNUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsaURBQXVCOzs7O0lBQXZCLFVBQXdCLEtBQVU7UUFDOUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCwrQ0FBcUI7OztJQUFyQjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELCtDQUFxQjs7OztJQUFyQixVQUFzQixLQUFVO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsK0NBQXFCOzs7O0lBQXJCLFVBQXNCLE1BQWM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWTtJQUVaLDBFQUEwRTs7Ozs7O0lBQzFFLDhCQUFJOzs7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sS0FBNkI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0NBQStDOzs7Ozs7SUFFL0Msb0NBQVU7Ozs7O0lBQVYsVUFBVyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQW9CO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUE4Qjs7Ozs7OztJQUV0Qiw0Q0FBa0I7Ozs7OztJQUExQixVQUEyQixPQUFzQjs7WUFDekMsY0FBYyxHQUFZLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztZQUMzRCxlQUFlLEdBQVksT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7O1lBQzdELGtCQUFrQixHQUFZLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBRXZFLElBQUksY0FBYyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksY0FBYyxJQUFJLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksa0JBQWtCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sMENBQWdCOzs7OztJQUF4QixVQUF5QixPQUF1QjtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyw2Q0FBbUI7Ozs7SUFBM0I7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pFLENBQUM7SUFJRCxzQkFBSSxrQ0FBSztRQUZULGNBQWM7Ozs7O1FBRWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7Ozs7UUFFRCxVQUFVLENBQW9CO1lBQzFCLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEQsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNWO2lCQUNJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUM1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixNQUFNLElBQUksU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7YUFDOUQ7WUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7OztPQWhCQTs7Ozs7SUFrQk8sc0NBQVk7Ozs7SUFBcEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLHFDQUFXOzs7O0lBQW5CO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0UsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlOzs7Ozs7O0lBRVAsc0NBQVk7Ozs7OztJQUFwQixVQUFxQixNQUFjO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyx3Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBYztRQUFyQyxpQkFnQkM7UUFmRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUzQyxVQUFVOzs7WUFBQztnQkFDUCxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2YsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1QixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2IsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO3FCQUMzQztpQkFDSjtZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7OztJQUVPLHdDQUFjOzs7O0lBQXRCOztZQUNRLFNBQVMsR0FBa0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1FBQ3hELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3BEO2lCQUNJO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLGFBQWEsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDLENBQUM7YUFDdkU7U0FDSjtJQUNMLENBQUM7Ozs7OztJQUVPLDRDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsTUFBYztRQUNyQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRU8saURBQXVCOzs7O0lBQS9COztZQUNRLE1BQU0sR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQjtRQUN0RCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxzQ0FBWTs7OztJQUFwQjs7WUFDUSxHQUFHLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztRQUVsRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDWixNQUFNLEdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRUQsaUJBQWlCOzs7Ozs7SUFFVCx3Q0FBYzs7Ozs7SUFBdEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDaEU7SUFDTCxDQUFDOzs7OztJQUVPLHNDQUFZOzs7O0lBQXBCO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixVQUFVOzs7WUFBQztnQkFDUCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO29CQUNyQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDMUM7Z0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Ozs7OztJQUVPLHVDQUFhOzs7OztJQUFyQixVQUFzQixLQUFjO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsZUFBZTs7Ozs7OztJQUVQLGdDQUFNOzs7Ozs7SUFBZCxVQUFlLElBQVk7UUFBM0IsaUJBYUM7UUFaRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjtRQUNELFVBQVU7OztRQUFDOztnQkFDSCxRQUFRLEdBQVksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU8sMENBQWdCOzs7O0lBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUM3QztJQUNMLENBQUM7Ozs7OztJQUVPLGdEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsS0FBYTtRQUN4QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNoRDtJQUNMLENBQUM7Ozs7OztJQWNPLHNEQUE0Qjs7Ozs7SUFBcEMsVUFBcUMsS0FBVTtRQUEvQyxpQkErQ0M7O1lBOUNPLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSztRQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7aUJBQ0ksSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7aUJBQ0ksSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2FBQ2xDO2lCQUNJLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDMUI7YUFDSjtpQkFDSSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQzFCO2FBQ0o7U0FDSjthQUNJO1lBQ0QsdUJBQXVCO1lBQ3ZCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQzlDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFFOUM7Ozs7O21CQUtHO2dCQUNILFVBQVU7OztnQkFBQyxjQUFRLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQzlDO2lCQUNJLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDSjtJQUVMLENBQUM7Ozs7OztJQUVPLHFEQUEyQjs7Ozs7SUFBbkMsVUFBb0MsS0FBVTs7WUFDdEMsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLO1FBRXJCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWE7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sbURBQXlCOzs7OztJQUFqQyxVQUFrQyxLQUFVOztZQUNwQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFFckIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztlQUN2QyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtlQUM5QyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELGFBQWE7Ozs7O0lBRWIsK0JBQUs7Ozs7SUFBTDtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBcUI7OztJQUFyQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRU8scUNBQVc7Ozs7SUFBbkI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU8sd0NBQWM7Ozs7SUFBdEI7UUFDSSxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUU7O2dCQUNoQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2dCQUNqRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2dCQUNuRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFOztnQkFDNUYsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXOztnQkFDakMsS0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUc7O2dCQUNqQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtZQUVoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDM0U7SUFDTCxDQUFDOzs7OztJQUVPLDJDQUFpQjs7OztJQUF6QjtRQUNJLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTs7Z0JBQ3JDLEtBQUssR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLO1lBQ3hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDcEU7SUFDTCxDQUFDOztnQkFsaEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsc2dHQUFvQztvQkFFcEMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ2xDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBbkI0SSxVQUFVOzs7MEJBd0JsSixLQUFLOzZCQUdMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBR0wsS0FBSztxQ0FDTCxLQUFLOzhCQUdMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO3dCQUNMLEtBQUs7eUJBR0wsTUFBTTt5QkFDTixNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTt3QkFDTixNQUFNO3VCQUNOLE1BQU07aUNBQ04sTUFBTTtxQ0FDTixNQUFNO2dDQUVOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUN2QyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFDdkMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7aUNBRTFDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBOENoRCxZQUFZLFNBQUMsYUFBYTtnQ0FLMUIsWUFBWSxTQUFDLGNBQWM7aUNBZTNCLFlBQVksU0FBQyxlQUFlOztJQXNhakMsc0JBQUM7Q0FBQSxBQW5oQkQsSUFtaEJDO1NBM2dCWSxlQUFlOzs7SUFHeEIsa0NBQXNDOztJQUd0QyxxQ0FBcUM7O0lBQ3JDLG1DQUFtQzs7SUFDbkMsbUNBQW1DOztJQUNuQyxtQ0FBOEI7O0lBRzlCLHlDQUFnQzs7SUFDaEMsNkNBQW9DOztJQUdwQyxzQ0FBa0Q7O0lBQ2xELHNDQUFrQzs7SUFDbEMsNENBQXdDOztJQUN4QyxnQ0FBNEI7O0lBRzVCLGlDQUE0Qzs7SUFDNUMsaUNBQTRDOztJQUM1QyxtQ0FBaUQ7O0lBQ2pELHFDQUErRDs7SUFDL0QsZ0NBQTJDOztJQUMzQywrQkFBMEM7O0lBQzFDLHlDQUFzRDs7SUFDdEQsNkNBQTBEOztJQUUxRCx3Q0FBb0U7O0lBQ3BFLG1DQUE0RTs7SUFDNUUsc0NBQXFFOztJQUVyRSx5Q0FBb0Y7Ozs7O0lBRXBGLGlDQUFnQzs7SUFDaEMscUNBQTRDOztJQUc1QyxtQ0FBMEI7O0lBQzFCLGlDQUF3Qjs7SUFDeEIsa0NBQXdCOztJQUV4Qix3Q0FBOEI7O0lBQzlCLDJDQUE2Qjs7Ozs7SUFDN0IscUNBQW9DOztJQUNwQywwQ0FBNkI7Ozs7O0lBRTdCLHVDQUFzQzs7Ozs7SUFDdEMsaURBQWdEOzs7OztJQUNoRCw0Q0FBMkM7Ozs7O0lBQzNDLHdDQUF1Qzs7SUFHdkMsZ0NBQWM7O0lBQ2QsOEJBQVk7O0lBQ1osK0JBQWE7Ozs7O0lBRWIsbUNBQWtDOzs7OztJQUNsQyxvQ0FBNkI7Ozs7OztJQStVN0IsK0JBUUU7Ozs7O0lBcFZFLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEV4aXN0aW5nUHJvdmlkZXIsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTZWxlY3REcm9wZG93bkNvbXBvbmVudH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7SU9wdGlvbn0gZnJvbSAnLi9vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7T3B0aW9ufSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQge09wdGlvbkxpc3R9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX1ZBTFVFX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgICAvLyBEYXRhIGlucHV0LlxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IEFycmF5PElPcHRpb24+ID0gW107XG5cbiAgICAvLyBGdW5jdGlvbmFsaXR5IHNldHRpbmdzLlxuICAgIEBJbnB1dCgpIGFsbG93Q2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgbm9GaWx0ZXI6IG51bWJlciA9IDA7XG5cbiAgICAvLyBTdHlsZSBzZXR0aW5ncy5cbiAgICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuXG4gICAgLy8gVGV4dCBzZXR0aW5ncy5cbiAgICBASW5wdXQoKSBub3RGb3VuZE1zZzogc3RyaW5nID0gJ05vIHJlc3VsdHMgZm91bmQnO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBmaWx0ZXJQbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gT3V0cHV0IGV2ZW50cy5cbiAgICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJT3B0aW9uPigpO1xuICAgIEBPdXRwdXQoKSBkZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJT3B0aW9uIHwgSU9wdGlvbltdPigpO1xuICAgIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgbm9PcHRpb25zRm91bmQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgZmlsdGVySW5wdXRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdzZWxlY3Rpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3Rpb25TcGFuOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJywgeyBzdGF0aWM6IGZhbHNlIH0pIGRyb3Bkb3duOiBTZWxlY3REcm9wZG93bkNvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBDb250ZW50Q2hpbGQoJ29wdGlvblRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIG9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgICBvcHRpb25MaXN0OiBPcHRpb25MaXN0ID0gbmV3IE9wdGlvbkxpc3QoW10pO1xuXG4gICAgLy8gVmlldyBzdGF0ZSB2YXJpYWJsZXMuXG4gICAgaGFzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0JlbG93OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGZpbHRlckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGZpbHRlcklucHV0V2lkdGg6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcGxhY2Vob2xkZXJWaWV3OiBzdHJpbmcgPSAnJztcblxuICAgIHByaXZhdGUgY2xlYXJDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzZWxlY3RDb250YWluZXJDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvcHRpb25MaXN0Q2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgb3B0aW9uQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gV2lkdGggYW5kIHBvc2l0aW9uIGZvciB0aGUgZHJvcGRvd24gY29udGFpbmVyLlxuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICAgIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICAgICkge31cblxuICAgIC8qKiBFdmVudCBoYW5kbGVycy4gKiovXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZXMoY2hhbmdlcyk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJsdXInKVxuICAgIG9uV2luZG93Qmx1cigpIHtcbiAgICAgICAgdGhpcy5fYmx1cigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycpXG4gICAgb25XaW5kb3dDbGljaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgJiZcbiAgICAgICAgICAgICghdGhpcy5vcHRpb25MaXN0Q2xpY2tlZCB8fCAodGhpcy5vcHRpb25MaXN0Q2xpY2tlZCAmJiB0aGlzLm9wdGlvbkNsaWNrZWQpKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKHRoaXMub3B0aW9uQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q29udGFpbmVyQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuY2xlYXJDbGlja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNlbGVjdENvbnRhaW5lckZvY3VzKCkge1xuICAgICAgICB0aGlzLl9mb2N1cygpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudCk7XG4gICAgfVxuXG4gICAgb25PcHRpb25zTGlzdENsaWNrKCkge1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3RDbGlja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkRyb3Bkb3duT3B0aW9uQ2xpY2tlZChvcHRpb246IE9wdGlvbikge1xuICAgICAgICB0aGlzLm9wdGlvbkNsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm11bHRpcGxlID8gdGhpcy50b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uKSA6IHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDb250YWluZXJDbGlja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblNpbmdsZUZpbHRlckZvY3VzKCkge1xuICAgICAgICB0aGlzLl9mb2N1cygpO1xuICAgIH1cblxuICAgIG9uRmlsdGVySW5wdXQodGVybTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXRDaGFuZ2VkLmVtaXQodGVybSk7XG4gICAgICAgIHRoaXMuZmlsdGVyKHRlcm0pO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudCk7XG4gICAgfVxuXG4gICAgb25NdWx0aXBsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmhhbmRsZU11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudCk7XG4gICAgfVxuXG4gICAgb25NdWx0aXBsZUZpbHRlckZvY3VzKCkge1xuICAgICAgICB0aGlzLl9mb2N1cygpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJTZWxlY3Rpb25DbGljayhldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuY2xlYXJDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSk7XG4gICAgfVxuXG4gICAgb25EZXNlbGVjdE9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xlYXJDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIH1cblxuICAgIC8qKiBBUEkuICoqL1xuXG4gICAgLy8gVE9ETyBmaXggaXNzdWVzIHdpdGggZ2xvYmFsIGNsaWNrL2tleSBoYW5kbGVyIHRoYXQgY2xvc2VzIHRoZSBkcm9wZG93bi5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oZmFsc2UpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0KHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSBtZXRob2RzLiAqKi9cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqIElucHV0IGNoYW5nZSBoYW5kbGluZy4gKiovXG5cbiAgICBwcml2YXRlIGhhbmRsZUlucHV0Q2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGxldCBvcHRpb25zQ2hhbmdlZDogYm9vbGVhbiA9IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKTtcbiAgICAgICAgbGV0IG5vRmlsdGVyQ2hhbmdlZDogYm9vbGVhbiA9IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25vRmlsdGVyJyk7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlckNoYW5nZWQ6IGJvb2xlYW4gPSBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpO1xuXG4gICAgICAgIGlmIChvcHRpb25zQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPcHRpb25MaXN0KGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zQ2hhbmdlZCB8fCBub0ZpbHRlckNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyRW5hYmxlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlckNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3B0aW9uTGlzdChvcHRpb25zOiBBcnJheTxJT3B0aW9uPikge1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSBuZXcgT3B0aW9uTGlzdChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJFbmFibGVkKCkge1xuICAgICAgICB0aGlzLmZpbHRlckVuYWJsZWQgPSB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGggPj0gdGhpcy5ub0ZpbHRlcjtcbiAgICB9XG5cbiAgICAvKiogVmFsdWUuICoqL1xuXG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLl92YWx1ZSA6IHRoaXMuX3ZhbHVlWzBdO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycpIHtcbiAgICAgICAgICAgIHYgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHYgPSBbdl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbkxpc3QudmFsdWUgPSB2O1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm9wdGlvbkxpc3QudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMub3B0aW9uTGlzdC5oYXNTZWxlY3RlZCA/ICcnIDogdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBTZWxlY3QuICoqL1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgaWYgKCFvcHRpb24uc2VsZWN0ZWQgJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0LnNlbGVjdChvcHRpb24sIHRoaXMubXVsdGlwbGUpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChvcHRpb24ud3JhcHBlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5kZXNlbGVjdChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KG9wdGlvbi53cmFwcGVkT3B0aW9uKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uOiBBcnJheTxPcHRpb24+ID0gdGhpcy5vcHRpb25MaXN0LnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQoc2VsZWN0aW9uWzBdLndyYXBwZWRPcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQoc2VsZWN0aW9uLm1hcChvcHRpb24gPT4gb3B0aW9uLndyYXBwZWRPcHRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlU2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA/IHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKSA6IHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3RIaWdobGlnaHRlZE9wdGlvbigpIHtcbiAgICAgICAgbGV0IG9wdGlvbjogT3B0aW9uID0gdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodGVkT3B0aW9uO1xuICAgICAgICBpZiAob3B0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXNlbGVjdExhc3QoKSB7XG4gICAgICAgIGxldCBzZWw6IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuXG4gICAgICAgIGlmIChzZWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG9wdGlvbjogT3B0aW9uID0gc2VsW3NlbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TXVsdGlwbGVGaWx0ZXJJbnB1dChvcHRpb24ubGFiZWwgKyAnICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIERyb3Bkb3duLiAqKi9cblxuICAgIHByaXZhdGUgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA/IHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKSA6IHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5Ecm9wZG93bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuZWQuZW1pdChudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZURyb3Bkb3duKGZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcklucHV0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNTZWxlY3RDb250YWluZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2VkLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRmlsdGVyLiAqKi9cblxuICAgIHByaXZhdGUgZmlsdGVyKHRlcm06IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFzU2hvd246IGJvb2xlYW4gPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKHRlcm0pO1xuICAgICAgICAgICAgaWYgKCFoYXNTaG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMubm9PcHRpb25zRm91bmQuZW1pdCh0ZXJtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhckZpbHRlcklucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRNdWx0aXBsZUZpbHRlcklucHV0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogS2V5cy4gKiovXG5cbiAgICBwcml2YXRlIEtFWVM6IGFueSA9IHtcbiAgICAgICAgQkFDS1NQQUNFOiA4LFxuICAgICAgICBUQUI6IDksXG4gICAgICAgIEVOVEVSOiAxMyxcbiAgICAgICAgRVNDOiAyNyxcbiAgICAgICAgU1BBQ0U6IDMyLFxuICAgICAgICBVUDogMzgsXG4gICAgICAgIERPV046IDQwXG4gICAgfTtcblxuICAgIHByaXZhdGUgaGFuZGxlU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIGxldCBrZXkgPSBldmVudC53aGljaDtcblxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5FU0MgfHwgKGtleSA9PT0gdGhpcy5LRVlTLlVQICYmIGV2ZW50LmFsdEtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5UQUIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oZXZlbnQuc2hpZnRLZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2JsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RIaWdobGlnaHRlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuVVApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0UHJldmlvdXNPcHRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5ET1dOKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE5leHRPcHRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBERVBSSUNBVEVEIC0tPiBTUEFDRVxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSIHx8IGtleSA9PT0gdGhpcy5LRVlTLlNQQUNFIHx8XG4gICAgICAgICAgICAgICAgICAgIChrZXkgPT09IHRoaXMuS0VZUy5ET1dOICYmIGV2ZW50LmFsdEtleSkpIHtcblxuICAgICAgICAgICAgICAgIC8qIEZJUkVGT1ggSEFDSzpcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIFRoZSBzZXRUaW1lb3V0IGlzIGFkZGVkIHRvIHByZXZlbnQgdGhlIGVudGVyIGtleWRvd24gZXZlbnRcbiAgICAgICAgICAgICAgICAgKiB0byBiZSB0cmlnZ2VyZWQgZm9yIHRoZSBmaWx0ZXIgaW5wdXQgZmllbGQsIHdoaWNoIGNhdXNlc1xuICAgICAgICAgICAgICAgICAqIHRoZSBkcm9wZG93biB0byBiZSBjbG9zZWQgYWdhaW4uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMub3BlbkRyb3Bkb3duKCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuVEFCKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIGxldCBrZXkgPSBldmVudC53aGljaDtcblxuICAgICAgICBpZiAoa2V5ID09PSB0aGlzLktFWVMuQkFDS1NQQUNFKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25MaXN0Lmhhc1NlbGVjdGVkICYmIHRoaXMuZmlsdGVyRW5hYmxlZCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdExhc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIGxldCBrZXkgPSBldmVudC53aGljaDtcblxuICAgICAgICBpZiAoa2V5ID09PSB0aGlzLktFWVMuRVNDIHx8IGtleSA9PT0gdGhpcy5LRVlTLlRBQlxuICAgICAgICAgICAgICAgIHx8IGtleSA9PT0gdGhpcy5LRVlTLlVQIHx8IGtleSA9PT0gdGhpcy5LRVlTLkRPV05cbiAgICAgICAgICAgICAgICB8fCBrZXkgPT09IHRoaXMuS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBWaWV3LiAqKi9cblxuICAgIF9ibHVyKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgICAgIHRoaXMuYmx1ci5lbWl0KG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb2N1cy5lbWl0KG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzU2VsZWN0Q29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZHJvcGRvd24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5SZWN0ID0gdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wUmVjdCA9IHRoaXMuZHJvcGRvd24uaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHNwYW5SZWN0LnRvcCAtIGhvc3RSZWN0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IGhvc3RSZWN0LmJvdHRvbSArIGRyb3BSZWN0LmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5pc0JlbG93ID0gYm90dG9tIDwgd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gc3BhblJlY3QubGVmdCAtIGhvc3RSZWN0LmxlZnQ7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMuaXNCZWxvdyA/IHRvcCArIHNwYW5SZWN0LmhlaWdodCA6IHRvcCAtIGRyb3BSZWN0LmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRmlsdGVyV2lkdGgoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJJbnB1dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dFdpZHRoID0gdmFsdWUubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgICAgICAxICsgdGhpcy5wbGFjZWhvbGRlclZpZXcubGVuZ3RoICogMTAgOiAxICsgdmFsdWUubGVuZ3RoICogMTA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=