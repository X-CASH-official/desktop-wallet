/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Renderer, ElementRef } from '@angular/core';
import { DropdownStateService } from '../../services/dropdown-state.service';
export class Ng2MenuItem {
    /**
     * @param {?} state
     * @param {?} element
     * @param {?} renderer
     */
    constructor(state, element, renderer) {
        this.state = state;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.state.dropdownState.onItemDestroyed.emit(this);
    }
    /**
     * \@name isSelected
     * @desc returns current selected item
     * @return {?}
     */
    get isSelected() {
        return this === this.state.dropdownState.selectedItem;
    }
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    select($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    }
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    click() {
        this.state.dropdownState.onItemClicked.emit(this);
    }
    /**
     * \@name focus
     * @return {?}
     */
    focus() {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    }
}
Ng2MenuItem.decorators = [
    { type: Component, args: [{
                selector: 'ng2-menu-item',
                styles: [`.ng2-menu-item{font-family:Roboto,"Helvetica Neue",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}`],
                template: `<div class='ng2-menu-item'
     role="button"
     tabindex="0"
     [class.ng2-menu-item--selected]="isSelected"
     (keydown.enter)="click()"
     (click)="click()"
     (mouseover)="select()">
        <ng-content></ng-content>
</div>
`
            },] },
];
/** @nocollapse */
Ng2MenuItem.ctorParameters = () => [
    { type: DropdownStateService, },
    { type: ElementRef, },
    { type: Renderer, },
];
Ng2MenuItem.propDecorators = {
    "preventClose": [{ type: Input },],
    "value": [{ type: Input },],
};
function Ng2MenuItem_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Ng2MenuItem.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Ng2MenuItem.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Ng2MenuItem.propDecorators;
    /**
     * \@preventClose
     * @desc if true, clicking on the item won't close the dropdown
     * @type {?}
     */
    Ng2MenuItem.prototype.preventClose;
    /**
     * \@name value
     * @desc any value associated to the item
     * @type {?}
     */
    Ng2MenuItem.prototype.value;
    /** @type {?} */
    Ng2MenuItem.prototype.state;
    /** @type {?} */
    Ng2MenuItem.prototype.element;
    /** @type {?} */
    Ng2MenuItem.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1lbnUtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFnQjdFLE1BQU07Ozs7OztJQWFGLFlBQW9CLEtBQTJCLEVBQzNCLFNBQ0E7UUFGQSxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFROzs7Ozs0QkFWWSxLQUFLO0tBVUg7Ozs7SUFFbkMsV0FBVztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7UUFPN0MsVUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7SUFPbkQsTUFBTSxDQUFDLE1BQU87UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMzQjs7Ozs7OztJQU9FLEtBQUs7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFNL0MsS0FBSztRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7O1lBcEUxRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLHFtQkFBcW1CLENBQUM7Z0JBQy9tQixRQUFRLEVBQUU7Ozs7Ozs7OztDQVNiO2FBQ0E7Ozs7WUFmUSxvQkFBb0I7WUFKekIsVUFBVTtZQURWLFFBQVE7Ozs2QkEwQlAsS0FBSztzQkFNTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLW1lbnUtaXRlbScsXG4gICAgc3R5bGVzOiBbYC5uZzItbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi45ZW07dGV4dC10cmFuc2Zvcm06bm9uZTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW07aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOi4zZW0gMS4yNXJlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yNXN9Lm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVke2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuMik7b3V0bGluZTowfS5uZzItbWVudS1pdGVtOmZvY3Vze291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDE1OCwxNTgsMTU4LC40KX06aG9zdChuZzItbWVudS1pdGVtKSAvZGVlcC8gW25nMi1tZW51LWl0ZW0taWNvbl17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToyOHB4O3dpZHRoOjEuNWVtO2hlaWdodDozMHB4O2NvbG9yOnJnYmEoMCwwLDAsLjQ0KX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25nMi1tZW51LWl0ZW0nXG4gICAgIHJvbGU9XCJidXR0b25cIlxuICAgICB0YWJpbmRleD1cIjBcIlxuICAgICBbY2xhc3MubmcyLW1lbnUtaXRlbS0tc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgIChrZXlkb3duLmVudGVyKT1cImNsaWNrKClcIlxuICAgICAoY2xpY2spPVwiY2xpY2soKVwiXG4gICAgIChtb3VzZW92ZXIpPVwic2VsZWN0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMk1lbnVJdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBAcHJldmVudENsb3NlXG4gICAgICogQGRlc2MgaWYgdHJ1ZSwgY2xpY2tpbmcgb24gdGhlIGl0ZW0gd29uJ3QgY2xvc2UgdGhlIGRyb3Bkb3duXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKiBAZGVzYyBhbnkgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNTZWxlY3RlZFxuICAgICAqIEBkZXNjIHJldHVybnMgY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjbGlja1xuICAgICAqIEBkZXNjIGVtaXRzIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBjbGljayBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnZm9jdXMnKTtcbiAgICB9XG59XG4iXX0=