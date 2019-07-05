/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
export class Ng2DropdownButton {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.onMenuToggled = new EventEmitter();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    toggleMenu() {
        this.onMenuToggled.emit(true);
    }
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    getPosition() {
        return this.element.nativeElement.getBoundingClientRect();
    }
}
Ng2DropdownButton.decorators = [
    { type: Component, args: [{
                selector: 'ng2-dropdown-button',
                styles: [`.ng2-dropdown-button{font-family:Roboto,"Helvetica Neue",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}`],
                template: `<button class='ng2-dropdown-button' type="button" (click)="toggleMenu()" tabindex="0s">
    <span class="ng2-dropdown-button__label">
        <ng-content></ng-content>
    </span>

    <span class="ng2-dropdown-button__caret" *ngIf="showCaret">
        <svg enable-background="new 0 0 32 32" height="16px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z" fill="#121313" id="Expand_More"/><g/><g/><g/><g/><g/><g/></svg>
    </span>
</button>
`
            },] },
];
/** @nocollapse */
Ng2DropdownButton.ctorParameters = () => [
    { type: ElementRef, },
];
Ng2DropdownButton.propDecorators = {
    "onMenuToggled": [{ type: Output },],
    "showCaret": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyb3Bkb3duLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NvbXBvbmVudHMvYnV0dG9uL25nMi1kcm9wZG93bi1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBQ1osVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBZ0J2QixNQUFNOzs7O0lBSUYsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs2QkFIaUIsSUFBSSxZQUFZLEVBQVc7eUJBQzlDLElBQUk7S0FFRTs7Ozs7O0lBTXBDLFVBQVU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU8zQixXQUFXO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7O1lBakMvRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsTUFBTSxFQUFFLENBQUMsbzJCQUFvMkIsQ0FBQztnQkFDOTJCLFFBQVEsRUFBRTs7Ozs7Ozs7O0NBU2I7YUFDQTs7OztZQWhCRyxVQUFVOzs7OEJBa0JULE1BQU07MEJBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE91dHB1dCxcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24tYnV0dG9uJyxcbiAgICBzdHlsZXM6IFtgLm5nMi1kcm9wZG93bi1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWw7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6LjQ1cmVtIC4yNXJlbTtmb250LXNpemU6MTRweDtsZXR0ZXItc3BhY2luZzouMDhyZW07Y29sb3I6IzQ0NDtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6NDAwO2JvcmRlcjpub25lO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZmVmZWY7dGV4dC1hbGlnbjpsZWZ0O21pbi13aWR0aDoxMDBweDt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7bWF4LXdpZHRoOjE1MHB4fS5uZzItZHJvcGRvd24tYnV0dG9uOmhvdmVye2NvbG9yOiMyMjJ9Lm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZlLC5uZzItZHJvcGRvd24tYnV0dG9uOmZvY3Vze2NvbG9yOiMyMjI7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzIxOTZmM30ubmcyLWRyb3Bkb3duLWJ1dHRvbl9fbGFiZWx7ZmxleDoxIDEgOTUlfS5uZzItZHJvcGRvd24tYnV0dG9uX19jYXJldHt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSA2JX06aG9zdC1jb250ZXh0KC5uZzItZHJvcGRvd24tYnV0dG9uLS1pY29uKSAubmcyLWRyb3Bkb3duLWJ1dHRvbntib3JkZXI6bm9uZTttaW4td2lkdGg6NDBweDt3aWR0aDo0MHB4O2JvcmRlci1yYWRpdXM6MTAwJTt0cmFuc2l0aW9uOmFsbCAuMnM7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjQwcHg7cGFkZGluZzouNWVtfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIpfWBdLFxuICAgIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz0nbmcyLWRyb3Bkb3duLWJ1dHRvbicgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVNZW51KClcIiB0YWJpbmRleD1cIjBzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJuZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJuZzItZHJvcGRvd24tYnV0dG9uX19jYXJldFwiICpuZ0lmPVwic2hvd0NhcmV0XCI+XG4gICAgICAgIDxzdmcgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDMyIDMyXCIgaGVpZ2h0PVwiMTZweFwiIGlkPVwi0KHQu9C+0LlfMVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgd2lkdGg9XCIxNnB4XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+PHBhdGggZD1cIk0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6XCIgZmlsbD1cIiMxMjEzMTNcIiBpZD1cIkV4cGFuZF9Nb3JlXCIvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjwvc3ZnPlxuICAgIDwvc3Bhbj5cbjwvYnV0dG9uPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBOZzJEcm9wZG93bkJ1dHRvbiB7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbk1lbnVUb2dnbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgQElucHV0KCkgcHVibGljIHNob3dDYXJldDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0b2dnbGVNZW51XG4gICAgICogQGRlc2MgZW1pdHMgZXZlbnQgdG8gdG9nZ2xlIG1lbnVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1lbnVUb2dnbGVkLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0UG9zaXRpb25cbiAgICAgKiBAZGVzYyByZXR1cm5zIHBvc2l0aW9uIG9mIHRoZSBidXR0b25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogQ2xpZW50UmVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxufVxuIl19