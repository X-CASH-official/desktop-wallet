/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { OptionList } from './option-list';
export class SelectDropdownComponent {
    /**
     * @param {?} hostElement
     */
    constructor(hostElement) {
        this.hostElement = hostElement;
        this.optionClicked = new EventEmitter();
        this.optionsListClick = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterFocus = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    ngOnInit() {
        this.optionsReset();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    onOptionsListClick() {
        this.optionsListClick.emit(null);
    }
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.singleFilterClick.emit(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterInput(event) {
        this.singleFilterInput.emit(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.singleFilterKeydown.emit(event);
    }
    /**
     * @return {?}
     */
    onSingleFilterFocus() {
        this.singleFilterFocus.emit(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onOptionsWheel(event) {
        this.handleOptionsWheel(event);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionMouseover(option) {
        this.optionList.highlightOption(option);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionClick(option) {
        this.optionClicked.emit(option);
    }
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    optionsReset() {
        this.optionList.filter('');
        this.optionList.highlight();
    }
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    getOptionStyle(option) {
        if (option.highlighted) {
            /** @type {?} */
            let style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    }
    /**
     * @return {?}
     */
    moveHighlightedIntoView() {
        /** @type {?} */
        let list = this.optionsList.nativeElement;
        /** @type {?} */
        let listHeight = list.offsetHeight;
        /** @type {?} */
        let itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            let item = list.children[0].children[itemIndex];
            /** @type {?} */
            let itemHeight = item.offsetHeight;
            /** @type {?} */
            let itemTop = itemIndex * itemHeight;
            /** @type {?} */
            let itemBottom = itemTop + itemHeight;
            /** @type {?} */
            let viewTop = list.scrollTop;
            /** @type {?} */
            let viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    handleOptionsWheel(e) {
        /** @type {?} */
        let div = this.optionsList.nativeElement;
        /** @type {?} */
        let atTop = div.scrollTop === 0;
        /** @type {?} */
        let atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    }
}
SelectDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-dropdown',
                template: "<div\n    [ngClass]=\"{'below': isBelow, 'above': !isBelow}\"\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            autocomplete=\"off\"\n            [placeholder]=\"placeholder\"\n            (click)=\"onSingleFilterClick()\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\"\n            (focus)=\"onSingleFilterFocus()\">\n    </div>\n\n    <div class=\"options\"\n        (click)=\"onOptionsListClick()\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: option.wrappedOption}\"></ng-container>\n                <span *ngIf=\"!optionTemplate\">{{option.label}}</span>\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["select-dropdown,select-dropdown *{box-sizing:border-box}select-dropdown>div{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;position:absolute;z-index:1}select-dropdown>div.above{border-bottom:none}select-dropdown>div.below{border-top:none}select-dropdown>div .filter{padding:3px;width:100%}select-dropdown>div .filter input{border:1px solid #eee;box-sizing:border-box;padding:4px;width:100%}select-dropdown>div .options{max-height:200px;overflow-y:auto}select-dropdown>div .options ul{list-style:none;margin:0;padding:0}select-dropdown>div .options ul li{padding:4px 8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}select-dropdown .selected{background-color:#e0e0e0}select-dropdown .highlighted,select-dropdown .selected.highlighted{background-color:#2196f3;color:#fff}select-dropdown .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}"]
            }] }
];
/** @nocollapse */
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef }
];
SelectDropdownComponent.propDecorators = {
    filterEnabled: [{ type: Input }],
    highlightColor: [{ type: Input }],
    highlightTextColor: [{ type: Input }],
    left: [{ type: Input }],
    multiple: [{ type: Input }],
    notFoundMsg: [{ type: Input }],
    optionList: [{ type: Input }],
    isBelow: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    placeholder: [{ type: Input }],
    optionTemplate: [{ type: Input }],
    optionClicked: [{ type: Output }],
    optionsListClick: [{ type: Output }],
    singleFilterClick: [{ type: Output }],
    singleFilterFocus: [{ type: Output }],
    singleFilterInput: [{ type: Output }],
    singleFilterKeydown: [{ type: Output }],
    filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
    optionsList: [{ type: ViewChild, args: ['optionsList', { static: true },] }]
};
if (false) {
    /** @type {?} */
    SelectDropdownComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.left;
    /** @type {?} */
    SelectDropdownComponent.prototype.multiple;
    /** @type {?} */
    SelectDropdownComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionList;
    /** @type {?} */
    SelectDropdownComponent.prototype.isBelow;
    /** @type {?} */
    SelectDropdownComponent.prototype.top;
    /** @type {?} */
    SelectDropdownComponent.prototype.width;
    /** @type {?} */
    SelectDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionTemplate;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionClicked;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionsListClick;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterClick;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterFocus;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterKeydown;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionsList;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFOUosT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVN6QyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBNkJoQyxZQUNXLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBZHhCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLeEQsa0JBQWEsR0FBVyxNQUFNLENBQUM7UUFDL0Isc0JBQWlCLEdBQVcsUUFBUSxDQUFDO0lBSWxDLENBQUM7Ozs7O0lBSUosUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFZO1FBQ3BCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBYztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUlPLFlBQVk7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFJRCxjQUFjLENBQUMsTUFBYztRQUN6QixJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7O2dCQUNoQixLQUFLLEdBQVEsRUFBRTtZQUVuQixJQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDbkQ7WUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsRUFBRTtnQkFDaEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUM1QztZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQ0k7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQzs7OztJQUVELHVCQUF1Qjs7WUFFZixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhOztZQUNyQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7O1lBRTlCLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFO1FBRXJELElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFOztnQkFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOztnQkFDM0MsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZOztnQkFFOUIsT0FBTyxHQUFHLFNBQVMsR0FBRyxVQUFVOztnQkFDaEMsVUFBVSxHQUFHLE9BQU8sR0FBRyxVQUFVOztnQkFFakMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTOztnQkFDeEIsVUFBVSxHQUFHLE9BQU8sR0FBRyxVQUFVO1lBRXJDLElBQUksVUFBVSxHQUFHLFVBQVUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQzVDO2lCQUNJLElBQUksT0FBTyxHQUFHLE9BQU8sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7YUFDNUI7U0FDSjtJQUNMLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLENBQU07O1lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7O1lBQ3BDLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxLQUFLLENBQUM7O1lBQzNCLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLFlBQVk7UUFFcEUsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3RCO2FBQ0ksSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7O1lBMUpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixnOENBQTZDO2dCQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7Ozs7WUFUaUMsVUFBVTs7OzRCQWN2QyxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFFTCxNQUFNOytCQUNOLE1BQU07Z0NBQ04sTUFBTTtnQ0FDTixNQUFNO2dDQUNOLE1BQU07a0NBQ04sTUFBTTswQkFFTixTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTswQkFDMUMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFyQjFDLGdEQUFnQzs7SUFDaEMsaURBQWdDOztJQUNoQyxxREFBb0M7O0lBQ3BDLHVDQUFzQjs7SUFDdEIsMkNBQTJCOztJQUMzQiw4Q0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsMENBQTBCOztJQUMxQixzQ0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIsOENBQTZCOztJQUM3QixpREFBMEM7O0lBRTFDLGdEQUFxRDs7SUFDckQsbURBQXNEOztJQUN0RCxvREFBdUQ7O0lBQ3ZELG9EQUF1RDs7SUFDdkQsb0RBQXlEOztJQUN6RCxzREFBd0Q7O0lBRXhELDhDQUE4RDs7SUFDOUQsOENBQTZEOztJQUU3RCxnREFBK0I7O0lBQy9CLG9EQUFxQzs7SUFHakMsOENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3B0aW9ufSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQge09wdGlvbkxpc3R9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1kcm9wZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnRcbiAgICAgICAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBmaWx0ZXJFbmFibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGVmdDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmc7XG4gICAgQElucHV0KCkgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgICBASW5wdXQoKSBpc0JlbG93OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvcDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBPdXRwdXQoKSBvcHRpb25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxPcHRpb24+KCk7XG4gICAgQE91dHB1dCgpIG9wdGlvbnNMaXN0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIHNpbmdsZUZpbHRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyS2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsdGVySW5wdXQ6IGFueTtcbiAgICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIG9wdGlvbnNMaXN0OiBhbnk7XG5cbiAgICBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XG4gICAgZGlzYWJsZWRUZXh0Q29sb3I6IHN0cmluZyA9ICc5ZTllOWUnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICAgICkge31cblxuICAgIC8qKiBFdmVudCBoYW5kbGVycy4gKiovXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbkxpc3QnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uc0xpc3RDbGljaygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zTGlzdENsaWNrLmVtaXQobnVsbCk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJDbGljay5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBvblNpbmdsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNpbmdsZUZpbHRlcktleWRvd24uZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJGb2N1cygpIHtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJGb2N1cy5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVPcHRpb25zV2hlZWwoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uTW91c2VvdmVyKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZC5lbWl0KG9wdGlvbik7XG4gICAgfVxuXG4gICAgLyoqIEluaXRpYWxpemF0aW9uLiAqKi9cblxuICAgIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKCcnKTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIC8qKiBWaWV3LiAqKi9cblxuICAgIGdldE9wdGlvblN0eWxlKG9wdGlvbjogT3B0aW9uKTogYW55IHtcbiAgICAgICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodENvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVsnY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKSB7XG5cbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBsaXN0SGVpZ2h0ID0gbGlzdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5nZXRIaWdobGlnaHRlZEluZGV4KCk7XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgICAgICAgIGxldCBpdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBpdGVtVG9wID0gaXRlbUluZGV4ICogaXRlbUhlaWdodDtcbiAgICAgICAgICAgIGxldCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCB2aWV3VG9wID0gbGlzdC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBsZXQgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoaXRlbUJvdHRvbSA+IHZpZXdCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Cb3R0b20gLSBsaXN0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbVRvcCA8IHZpZXdUb3ApIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Ub3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICAgICAgbGV0IGRpdiA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IGF0VG9wID0gZGl2LnNjcm9sbFRvcCA9PT0gMDtcbiAgICAgICAgbGV0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGF0VG9wICYmIGUuZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0Qm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19