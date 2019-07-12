/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Ng2DropdownState } from './ng2-dropdown-state';
var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            toString: /**
             * @return {?}
             */
            function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService.decorators = [
        { type: Injectable },
    ];
    return DropdownStateService;
}());
export { DropdownStateService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFJakM7WUFDZixTQUFTLG9CQUFXLEtBQUssQ0FBQTtZQUN6QixRQUFROzs7WUFBUjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ3pEO1NBQ0o7NkJBRXdDLElBQUksZ0JBQWdCLEVBQUU7OztnQkFUbEUsVUFBVTs7K0JBSFg7O1NBSWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbWVudVN0YXRlID0ge1xuICAgICAgICBpc1Zpc2libGU6IDxib29sZWFuPmZhbHNlLFxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID09PSB0cnVlID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRyb3Bkb3duU3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUgPSBuZXcgTmcyRHJvcGRvd25TdGF0ZSgpO1xufVxuIl19