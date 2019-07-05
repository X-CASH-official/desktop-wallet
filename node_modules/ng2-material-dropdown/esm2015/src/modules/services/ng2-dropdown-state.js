/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
export class Ng2DropdownState {
    constructor() {
        this.onItemSelected = new EventEmitter();
        this.onItemClicked = new EventEmitter();
        this.onItemDestroyed = new EventEmitter();
    }
    /**
     * \@name selectedItem
     * @desc getter for _selectedItem
     * @return {?}
     */
    get selectedItem() {
        return this._selectedItem;
    }
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    select(item, dispatchEvent = true) {
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    }
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    unselect() {
        this._selectedItem = undefined;
    }
}
function Ng2DropdownState_tsickle_Closure_declarations() {
    /** @type {?} */
    Ng2DropdownState.prototype.onItemSelected;
    /** @type {?} */
    Ng2DropdownState.prototype.onItemClicked;
    /** @type {?} */
    Ng2DropdownState.prototype.onItemDestroyed;
    /** @type {?} */
    Ng2DropdownState.prototype._selectedItem;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyb3Bkb3duLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE1BQU07OzhCQUNpRCxJQUFJLFlBQVksRUFBZTs2QkFDaEMsSUFBSSxZQUFZLEVBQWU7K0JBQzdCLElBQUksWUFBWSxFQUFlOzs7Ozs7O1FBUXhFLFlBQVk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7O0lBT3ZCLE1BQU0sQ0FBQyxJQUE2QixFQUFFLGFBQWEsR0FBRyxJQUFJO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBTzVCLFFBQVE7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7Q0FFdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25TdGF0ZSB7XG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4oKTtcbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG4gICAgcHVibGljIG9uSXRlbURlc3Ryb3llZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RlZEl0ZW06IE5nMk1lbnVJdGVtO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRJdGVtXG4gICAgICogQGRlc2MgZ2V0dGVyIGZvciBfc2VsZWN0ZWRJdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogTmcyTWVudUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdHMgYSBtZW51IGl0ZW0gYW5kIGVtaXRzIGV2ZW50XG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KGl0ZW06IE5nMk1lbnVJdGVtIHwgdW5kZWZpbmVkLCBkaXNwYXRjaEV2ZW50ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXG4gICAgICAgIGlmICghZGlzcGF0Y2hFdmVudCB8fCAhaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5mb2N1cygpO1xuXG4gICAgICAgIHRoaXMub25JdGVtU2VsZWN0ZWQuZW1pdChpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB1bnNlbGVjdFxuICAgICAqIEBkZXNjIHNldHMgX3NlbGVjdGVkSXRlbSBhcyB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgdW5zZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iXX0=