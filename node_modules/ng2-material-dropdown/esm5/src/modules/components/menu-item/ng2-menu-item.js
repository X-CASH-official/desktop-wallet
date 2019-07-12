/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Renderer, ElementRef } from '@angular/core';
import { DropdownStateService } from '../../services/dropdown-state.service';
var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state, element, renderer) {
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
    Ng2MenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    Ng2MenuItem.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-menu-item',
                    styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                    template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    Ng2MenuItem.propDecorators = {
        "preventClose": [{ type: Input },],
        "value": [{ type: Input },],
    };
    return Ng2MenuItem;
}());
export { Ng2MenuItem };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1lbnUtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0lBNkJ6RSxxQkFBb0IsS0FBMkIsRUFDM0IsU0FDQTtRQUZBLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7OzRCQVZZLEtBQUs7S0FVSDs7OztJQUVuQyxpQ0FBVzs7OztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OzBCQU83QyxtQ0FBVTs7Ozs7OztZQUNqQixNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFPbkQsNEJBQU07Ozs7OztjQUFDLE1BQU87UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMzQjs7Ozs7OztJQU9FLDJCQUFLOzs7Ozs7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFNL0MsMkJBQUs7Ozs7O1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7OztnQkFwRTFGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLENBQUMsdW1CQUFxbUIsQ0FBQztvQkFDL21CLFFBQVEsRUFBRSxxUUFTYjtpQkFDQTs7OztnQkFmUSxvQkFBb0I7Z0JBSnpCLFVBQVU7Z0JBRFYsUUFBUTs7O2lDQTBCUCxLQUFLOzBCQU1MLEtBQUs7O3NCQW5DVjs7U0F3QmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIFJlbmRlcmVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1tZW51LWl0ZW0nLFxuICAgIHN0eWxlczogW2AubmcyLW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTouOWVtO3RleHQtdHJhbnNmb3JtOm5vbmU7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi4wM2VtO2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHg7cGFkZGluZzouM2VtIDEuMjVyZW07dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMjVzfS5uZzItbWVudS1pdGVtLS1zZWxlY3RlZHtiYWNrZ3JvdW5kOnJnYmEoMTU4LDE1OCwxNTgsLjIpO291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTpmb2N1c3tvdXRsaW5lOjB9Lm5nMi1tZW51LWl0ZW06YWN0aXZle2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuNCl9Omhvc3QobmcyLW1lbnUtaXRlbSkgL2RlZXAvIFtuZzItbWVudS1pdGVtLWljb25de3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtmb250LXNpemU6MjhweDt3aWR0aDoxLjVlbTtoZWlnaHQ6MzBweDtjb2xvcjpyZ2JhKDAsMCwwLC40NCl9YF0sXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSduZzItbWVudS1pdGVtJ1xuICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgW2NsYXNzLm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVkXT1cImlzU2VsZWN0ZWRcIlxuICAgICAoa2V5ZG93bi5lbnRlcik9XCJjbGljaygpXCJcbiAgICAgKGNsaWNrKT1cImNsaWNrKClcIlxuICAgICAobW91c2VvdmVyKT1cInNlbGVjdCgpXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBOZzJNZW51SXRlbSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogQHByZXZlbnRDbG9zZVxuICAgICAqIEBkZXNjIGlmIHRydWUsIGNsaWNraW5nIG9uIHRoZSBpdGVtIHdvbid0IGNsb3NlIHRoZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwcmV2ZW50Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHZhbHVlXG4gICAgICogQGRlc2MgYW55IHZhbHVlIGFzc29jaWF0ZWQgdG8gdGhlIGl0ZW1cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IERyb3Bkb3duU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbURlc3Ryb3llZC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzU2VsZWN0ZWRcbiAgICAgKiBAZGVzYyByZXR1cm5zIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KCRldmVudD8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLCB0cnVlKTtcblxuICAgICAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNsaWNrXG4gICAgICogQGRlc2MgZW1pdHMgY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5vbkl0ZW1DbGlja2VkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ2ZvY3VzJyk7XG4gICAgfVxufVxuIl19