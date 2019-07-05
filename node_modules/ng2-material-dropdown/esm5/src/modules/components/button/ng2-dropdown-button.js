/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new EventEmitter();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-dropdown-button',
                    styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                    template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    Ng2DropdownButton.propDecorators = {
        "onMenuToggled": [{ type: Output },],
        "showCaret": [{ type: Input },],
    };
    return Ng2DropdownButton;
}());
export { Ng2DropdownButton };
function Ng2DropdownButton_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Ng2DropdownButton.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Ng2DropdownButton.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Ng2DropdownButton.propDecorators;
    /** @type {?} */
    Ng2DropdownButton.prototype.onMenuToggled;
    /** @type {?} */
    Ng2DropdownButton.prototype.showCaret;
    /** @type {?} */
    Ng2DropdownButton.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyb3Bkb3duLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NvbXBvbmVudHMvYnV0dG9uL25nMi1kcm9wZG93bi1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDOztJQW9CbkIsMkJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7NkJBSGlCLElBQUksWUFBWSxFQUFXO3lCQUM5QyxJQUFJO0tBRUU7Ozs7OztJQU1wQyxzQ0FBVTs7Ozs7O1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7SUFPM0IsdUNBQVc7Ozs7OztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7O2dCQWpDL0QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE1BQU0sRUFBRSxDQUFDLHMyQkFBbzJCLENBQUM7b0JBQzkyQixRQUFRLEVBQUUseTJCQVNiO2lCQUNBOzs7O2dCQWhCRyxVQUFVOzs7a0NBa0JULE1BQU07OEJBQ04sS0FBSzs7NEJBeEJWOztTQXNCYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPdXRwdXQsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLWRyb3Bkb3duLWJ1dHRvbicsXG4gICAgc3R5bGVzOiBbYC5uZzItZHJvcGRvd24tYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOi40NXJlbSAuMjVyZW07Zm9udC1zaXplOjE0cHg7bGV0dGVyLXNwYWNpbmc6LjA4cmVtO2NvbG9yOiM0NDQ7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO2ZvbnQtd2VpZ2h0OjQwMDtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWZlZmVmO3RleHQtYWxpZ246bGVmdDttaW4td2lkdGg6MTAwcHg7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O21heC13aWR0aDoxNTBweH0ubmcyLWRyb3Bkb3duLWJ1dHRvbjpob3Zlcntjb2xvcjojMjIyfS5uZzItZHJvcGRvd24tYnV0dG9uOmFjdGl2ZSwubmcyLWRyb3Bkb3duLWJ1dHRvbjpmb2N1c3tjb2xvcjojMjIyO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICMyMTk2ZjN9Lm5nMi1kcm9wZG93bi1idXR0b25fX2xhYmVse2ZsZXg6MSAxIDk1JX0ubmcyLWRyb3Bkb3duLWJ1dHRvbl9fY2FyZXR7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgNiV9Omhvc3QtY29udGV4dCgubmcyLWRyb3Bkb3duLWJ1dHRvbi0taWNvbikgLm5nMi1kcm9wZG93bi1idXR0b257Ym9yZGVyOm5vbmU7bWluLXdpZHRoOjQwcHg7d2lkdGg6NDBweDtib3JkZXItcmFkaXVzOjEwMCU7dHJhbnNpdGlvbjphbGwgLjJzO3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDo0MHB4O3BhZGRpbmc6LjVlbX06aG9zdC1jb250ZXh0KC5uZzItZHJvcGRvd24tYnV0dG9uLS1pY29uKSAubmcyLWRyb3Bkb3duLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yKX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxidXR0b24gY2xhc3M9J25nMi1kcm9wZG93bi1idXR0b24nIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlTWVudSgpXCIgdGFiaW5kZXg9XCIwc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwibmcyLWRyb3Bkb3duLWJ1dHRvbl9fbGFiZWxcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuIGNsYXNzPVwibmcyLWRyb3Bkb3duLWJ1dHRvbl9fY2FyZXRcIiAqbmdJZj1cInNob3dDYXJldFwiPlxuICAgICAgICA8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAzMiAzMlwiIGhlaWdodD1cIjE2cHhcIiBpZD1cItCh0LvQvtC5XzFcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMTZweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNMjQuMjg1LDExLjI4NEwxNiwxOS41NzFsLTguMjg1LTguMjg4Yy0wLjM5NS0wLjM5NS0xLjAzNC0wLjM5NS0xLjQyOSwwICBjLTAuMzk0LDAuMzk1LTAuMzk0LDEuMDM1LDAsMS40M2w4Ljk5OSw5LjAwMmwwLDBsMCwwYzAuMzk0LDAuMzk1LDEuMDM0LDAuMzk1LDEuNDI4LDBsOC45OTktOS4wMDIgIGMwLjM5NC0wLjM5NSwwLjM5NC0xLjAzNiwwLTEuNDMxQzI1LjMxOSwxMC44ODksMjQuNjc5LDEwLjg4OSwyNC4yODUsMTEuMjg0elwiIGZpbGw9XCIjMTIxMzEzXCIgaWQ9XCJFeHBhbmRfTW9yZVwiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25CdXR0b24ge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25NZW51VG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2FyZXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIGVtaXRzIGV2ZW50IHRvIHRvZ2dsZSBtZW51XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25NZW51VG9nZ2xlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldFBvc2l0aW9uXG4gICAgICogQGRlc2MgcmV0dXJucyBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiJdfQ==