/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { OptionList } from './option-list';
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(hostElement) {
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
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionsListClick.emit(null);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this.singleFilterFocus.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted) {
            /** @type {?} */
            var style = {};
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
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        /** @type {?} */
        var listHeight = list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-dropdown',
                    template: "<div\n    [ngClass]=\"{'below': isBelow, 'above': !isBelow}\"\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            autocomplete=\"off\"\n            [placeholder]=\"placeholder\"\n            (click)=\"onSingleFilterClick()\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\"\n            (focus)=\"onSingleFilterFocus()\">\n    </div>\n\n    <div class=\"options\"\n        (click)=\"onOptionsListClick()\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: option.wrappedOption}\"></ng-container>\n                <span *ngIf=\"!optionTemplate\">{{option.label}}</span>\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["select-dropdown,select-dropdown *{box-sizing:border-box}select-dropdown>div{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;position:absolute;z-index:1}select-dropdown>div.above{border-bottom:none}select-dropdown>div.below{border-top:none}select-dropdown>div .filter{padding:3px;width:100%}select-dropdown>div .filter input{border:1px solid #eee;box-sizing:border-box;padding:4px;width:100%}select-dropdown>div .options{max-height:200px;overflow-y:auto}select-dropdown>div .options ul{list-style:none;margin:0;padding:0}select-dropdown>div .options ul li{padding:4px 8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}select-dropdown .selected{background-color:#e0e0e0}select-dropdown .highlighted,select-dropdown .selected.highlighted{background-color:#2196f3;color:#fff}select-dropdown .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SelectDropdownComponent;
}());
export { SelectDropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFOUosT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QztJQW9DSSxpQ0FDVyxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWR4QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0MscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM1QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBS3hELGtCQUFhLEdBQVcsTUFBTSxDQUFDO1FBQy9CLHNCQUFpQixHQUFXLFFBQVEsQ0FBQztJQUlsQyxDQUFDO0lBRUosdUJBQXVCOzs7OztJQUV2QiwwQ0FBUTs7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQVk7UUFDcEIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsdUJBQXVC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U0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBQzFDLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQTRIOUMsOEJBQUM7Q0FBQSxBQTNKRCxJQTJKQztTQXBKWSx1QkFBdUI7OztJQUdoQyxnREFBZ0M7O0lBQ2hDLGlEQUFnQzs7SUFDaEMscURBQW9DOztJQUNwQyx1Q0FBc0I7O0lBQ3RCLDJDQUEyQjs7SUFDM0IsOENBQTZCOztJQUM3Qiw2Q0FBZ0M7O0lBQ2hDLDBDQUEwQjs7SUFDMUIsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsaURBQTBDOztJQUUxQyxnREFBcUQ7O0lBQ3JELG1EQUFzRDs7SUFDdEQsb0RBQXVEOztJQUN2RCxvREFBdUQ7O0lBQ3ZELG9EQUF5RDs7SUFDekQsc0RBQXdEOztJQUV4RCw4Q0FBOEQ7O0lBQzlELDhDQUE2RDs7SUFFN0QsZ0RBQStCOztJQUMvQixvREFBcUM7O0lBR2pDLDhDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09wdGlvbn0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHtPcHRpb25MaXN0fSBmcm9tICcuL29wdGlvbi1saXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3Bkb3duQ29tcG9uZW50XG4gICAgICAgIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBub3RGb3VuZE1zZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gICAgQElucHV0KCkgaXNCZWxvdzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0b3A6IG51bWJlcjtcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAT3V0cHV0KCkgb3B0aW9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xuICAgIEBPdXRwdXQoKSBvcHRpb25zTGlzdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcklucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcktleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbHRlcklucHV0OiBhbnk7XG4gICAgQFZpZXdDaGlsZCgnb3B0aW9uc0xpc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBvcHRpb25zTGlzdDogYW55O1xuXG4gICAgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gJyNmZmYnO1xuICAgIGRpc2FibGVkVGV4dENvbG9yOiBzdHJpbmcgPSAnOWU5ZTllJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgICApIHt9XG5cbiAgICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk9wdGlvbnNMaXN0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc0xpc3RDbGljay5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVyQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2luZ2xlRmlsdGVyQ2xpY2suZW1pdChudWxsKTtcbiAgICB9XG5cbiAgICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJJbnB1dC5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2luZ2xlRmlsdGVyRm9jdXMuZW1pdChudWxsKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbnNXaGVlbChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlT3B0aW9uc1doZWVsKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbk1vdXNlb3ZlcihvcHRpb246IE9wdGlvbikge1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgb25PcHRpb25DbGljayhvcHRpb246IE9wdGlvbikge1xuICAgICAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdChvcHRpb24pO1xuICAgIH1cblxuICAgIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgICBwcml2YXRlIG9wdGlvbnNSZXNldCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcignJyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvKiogVmlldy4gKiovXG5cbiAgICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgICAgIGlmIChvcHRpb24uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZTogYW55ID0ge307XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5oaWdobGlnaHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5oaWdobGlnaHRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5oaWdobGlnaHRUZXh0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KCkge1xuXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgbGlzdEhlaWdodCA9IGxpc3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGxldCBpdGVtSW5kZXggPSB0aGlzLm9wdGlvbkxpc3QuZ2V0SGlnaGxpZ2h0ZWRJbmRleCgpO1xuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBsaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2l0ZW1JbmRleF07XG4gICAgICAgICAgICBsZXQgaXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgaXRlbVRvcCA9IGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICAgICAgICBsZXQgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtSGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgdmlld1RvcCA9IGxpc3Quc2Nyb2xsVG9wO1xuICAgICAgICAgICAgbGV0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgICAgICAgaWYgKGl0ZW1Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtQm90dG9tIC0gbGlzdEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW1Ub3AgPCB2aWV3VG9wKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVPcHRpb25zV2hlZWwoZTogYW55KSB7XG4gICAgICAgIGxldCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBhdFRvcCA9IGRpdi5zY3JvbGxUb3AgPT09IDA7XG4gICAgICAgIGxldCBhdEJvdHRvbSA9IGRpdi5vZmZzZXRIZWlnaHQgKyBkaXYuc2Nyb2xsVG9wID09PSBkaXYuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICAgIGlmIChhdFRvcCAmJiBlLmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==