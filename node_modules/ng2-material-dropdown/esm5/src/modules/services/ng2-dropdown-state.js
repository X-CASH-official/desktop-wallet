/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new EventEmitter();
        this.onItemClicked = new EventEmitter();
        this.onItemDestroyed = new EventEmitter();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    Ng2DropdownState.prototype.select = /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());
export { Ng2DropdownState };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyb3Bkb3duLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLElBQUE7OzhCQUN1RCxJQUFJLFlBQVksRUFBZTs2QkFDaEMsSUFBSSxZQUFZLEVBQWU7K0JBQzdCLElBQUksWUFBWSxFQUFlOzswQkFReEUsMENBQVk7Ozs7Ozs7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7Ozs7O0lBT3ZCLGlDQUFNOzs7Ozs7Y0FBQyxJQUE2QixFQUFFLGFBQW9CO1FBQXBCLDhCQUFBLEVBQUEsb0JBQW9CO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBTzVCLG1DQUFROzs7Ozs7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7MkJBdEN2QztJQXdDQyxDQUFBO0FBdENELDRCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcbmV4cG9ydCBjbGFzcyBOZzJEcm9wZG93blN0YXRlIHtcbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4oKTtcbiAgICBwdWJsaWMgb25JdGVtRGVzdHJveWVkOiBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4oKTtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkSXRlbTogTmcyTWVudUl0ZW07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RlZEl0ZW1cbiAgICAgKiBAZGVzYyBnZXR0ZXIgZm9yIF9zZWxlY3RlZEl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBOZzJNZW51SXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0cyBhIG1lbnUgaXRlbSBhbmQgZW1pdHMgZXZlbnRcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoaXRlbTogTmcyTWVudUl0ZW0gfCB1bmRlZmluZWQsIGRpc3BhdGNoRXZlbnQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgICAgaWYgKCFkaXNwYXRjaEV2ZW50IHx8ICFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVuc2VsZWN0XG4gICAgICogQGRlc2Mgc2V0cyBfc2VsZWN0ZWRJdGVtIGFzIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyB1bnNlbGVjdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiJdfQ==