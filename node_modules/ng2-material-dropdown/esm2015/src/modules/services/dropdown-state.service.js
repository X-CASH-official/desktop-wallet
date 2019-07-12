/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Ng2DropdownState } from './ng2-dropdown-state';
export class DropdownStateService {
    constructor() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            /**
             * @return {?}
             */
            toString() {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
}
DropdownStateService.decorators = [
    { type: Injectable },
];
function DropdownStateService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DropdownStateService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DropdownStateService.ctorParameters;
    /** @type {?} */
    DropdownStateService.prototype.menuState;
    /** @type {?} */
    DropdownStateService.prototype.dropdownState;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQsTUFBTTs7eUJBQ2lCO1lBQ2YsU0FBUyxvQkFBVyxLQUFLLENBQUE7Ozs7WUFDekIsUUFBUTtnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ3pEO1NBQ0o7NkJBRXdDLElBQUksZ0JBQWdCLEVBQUU7Ozs7WUFUbEUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duU3RhdGUgfSBmcm9tICcuL25nMi1kcm9wZG93bi1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blN0YXRlU2VydmljZSB7XG4gICAgcHVibGljIG1lbnVTdGF0ZSA9IHtcbiAgICAgICAgaXNWaXNpYmxlOiA8Ym9vbGVhbj5mYWxzZSxcbiAgICAgICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9PT0gdHJ1ZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkcm9wZG93blN0YXRlOiBOZzJEcm9wZG93blN0YXRlID0gbmV3IE5nMkRyb3Bkb3duU3RhdGUoKTtcbn1cbiJdfQ==