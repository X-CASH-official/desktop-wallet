/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HostListener, Component, ContentChild, Output, EventEmitter, Input } from '@angular/core';
import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { DropdownStateService } from '../../services/dropdown-state.service';
export class Ng2Dropdown {
    /**
     * @param {?} state
     */
    constructor(state) {
        this.state = state;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new EventEmitter();
        this.onItemSelected = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.state.dropdownState.onItemClicked.subscribe(item => {
            this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            this.hide.call(this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(() => {
                this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(item => {
            this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe((item) => {
            let /** @type {?} */ newSelectedItem;
            const /** @type {?} */ items = this.menu.items.toArray();
            if (item !== this.state.dropdownState.selectedItem) {
                return;
            }
            if (this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }
            this.state.dropdownState.select(newSelectedItem);
        });
    }
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    toggleMenu(position = this.button.getPosition()) {
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    }
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    hide() {
        this.menu.hide();
        this.onHide.emit(this);
    }
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    show(position = this.button.getPosition()) {
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    }
    /**
     * \@name scrollListener
     * @return {?}
     */
    scrollListener() {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    }
}
Ng2Dropdown.decorators = [
    { type: Component, args: [{
                selector: 'ng2-dropdown',
                template: `<div class="ng2-dropdown-container">
    <ng-content select="ng2-dropdown-button"></ng-content>
    <ng-content select="ng2-dropdown-menu"></ng-content>
</div>
`,
                providers: [DropdownStateService]
            },] },
];
/** @nocollapse */
Ng2Dropdown.ctorParameters = () => [
    { type: DropdownStateService, },
];
Ng2Dropdown.propDecorators = {
    "button": [{ type: ContentChild, args: [Ng2DropdownButton,] },],
    "menu": [{ type: ContentChild, args: [Ng2DropdownMenu,] },],
    "dynamicUpdate": [{ type: Input },],
    "onItemClicked": [{ type: Output },],
    "onItemSelected": [{ type: Output },],
    "onShow": [{ type: Output },],
    "onHide": [{ type: Output },],
    "scrollListener": [{ type: HostListener, args: ['window:scroll',] },],
};
function Ng2Dropdown_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Ng2Dropdown.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Ng2Dropdown.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Ng2Dropdown.propDecorators;
    /** @type {?} */
    Ng2Dropdown.prototype.button;
    /** @type {?} */
    Ng2Dropdown.prototype.menu;
    /** @type {?} */
    Ng2Dropdown.prototype.dynamicUpdate;
    /** @type {?} */
    Ng2Dropdown.prototype.onItemClicked;
    /** @type {?} */
    Ng2Dropdown.prototype.onItemSelected;
    /** @type {?} */
    Ng2Dropdown.prototype.onShow;
    /** @type {?} */
    Ng2Dropdown.prototype.onHide;
    /** @type {?} */
    Ng2Dropdown.prototype.state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvY29tcG9uZW50cy9kcm9wZG93bi9uZzItZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFZN0UsTUFBTTs7OztJQWFGLFlBQW9CLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCOzZCQVJmLElBQUk7OzZCQUdtQixJQUFJLFlBQVksRUFBVTs4QkFDekIsSUFBSSxZQUFZLEVBQVU7c0JBQzdCLElBQUksWUFBWSxFQUFlO3NCQUMvQixJQUFJLFlBQVksRUFBZTtLQUVqQzs7OztJQUU1QyxRQUFRO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDO2FBQ1Y7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWlCLEVBQUUsRUFBRTtZQUNyRSxxQkFBSSxlQUF3QyxDQUFDO1lBQzdDLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDO2FBQ1Y7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDOUIsZUFBZSxHQUFHLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pGO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3BELENBQUMsQ0FBQzs7Ozs7Ozs7SUFPQSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7O0lBT2hFLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7OztJQVFwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQU9wQixjQUFjO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDs7OztZQS9GUixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7OztDQUliO2dCQUNHLFNBQVMsRUFBRSxDQUFFLG9CQUFvQixDQUFFO2FBQ3RDOzs7O1lBWFEsb0JBQW9COzs7dUJBY3hCLFlBQVksU0FBQyxpQkFBaUI7cUJBQzlCLFlBQVksU0FBQyxlQUFlOzhCQUU1QixLQUFLOzhCQUdMLE1BQU07K0JBQ04sTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07K0JBdUVOLFlBQVksU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZzJEcm9wZG93bkJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9uZzItZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4uL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUnO1xuaW1wb3J0IHsgRHJvcGRvd25TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLWNvbnRhaW5lclwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5nMi1kcm9wZG93bi1idXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmcyLWRyb3Bkb3duLW1lbnVcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgcHJvdmlkZXJzOiBbIERyb3Bkb3duU3RhdGVTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd24ge1xuICAgIC8vIGdldCBjaGlsZHJlbiBjb21wb25lbnRzXG4gICAgQENvbnRlbnRDaGlsZChOZzJEcm9wZG93bkJ1dHRvbikgcHVibGljIGJ1dHRvbjogTmcyRHJvcGRvd25CdXR0b247XG4gICAgQENvbnRlbnRDaGlsZChOZzJEcm9wZG93bk1lbnUpIHB1YmxpYyBtZW51OiBOZzJEcm9wZG93bk1lbnU7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgZHluYW1pY1VwZGF0ZSA9IHRydWU7XG5cbiAgICAvLyBvdXRwdXRzXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblNob3c6IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25IaWRlOiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IERyb3Bkb3duU3RhdGVTZXJ2aWNlKSB7fVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtQ2xpY2tlZC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uSXRlbUNsaWNrZWQuZW1pdChpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJldmVudENsb3NlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhpZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5vbk1lbnVUb2dnbGVkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5vbkl0ZW1TZWxlY3RlZC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5vbkl0ZW1EZXN0cm95ZWQuc3Vic2NyaWJlKChpdGVtOiBOZzJNZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1NlbGVjdGVkSXRlbTogTmcyTWVudUl0ZW0gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMubWVudS5pdGVtcy50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtICE9PSB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5tZW51LmZvY3VzRmlyc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWRJdGVtID0gaXRlbSA9PT0gaXRlbXNbMF0gJiYgaXRlbXMubGVuZ3RoID4gMSA/IGl0ZW1zWzFdIDogaXRlbXNbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3QobmV3U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIHRvZ2dsZXMgbWVudSB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUocG9zaXRpb24gPSB0aGlzLmJ1dHRvbi5nZXRQb3NpdGlvbigpKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIGhpZGVzIGRyb3Bkb3duXG4gICAgICogQG5hbWUgaGlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUuaGlkZSgpO1xuICAgICAgICB0aGlzLm9uSGlkZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gc2hvd3MgZHJvcGRvd25cbiAgICAgKiBAbmFtZSBzaG93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHVibGljIHNob3cocG9zaXRpb24gPSB0aGlzLmJ1dHRvbi5nZXRQb3NpdGlvbigpKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVudS5zaG93KHBvc2l0aW9uLCB0aGlzLmR5bmFtaWNVcGRhdGUpO1xuICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNjcm9sbExpc3RlbmVyXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcpXG4gICAgcHVibGljIHNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24gJiYgdGhpcy5keW5hbWljVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUudXBkYXRlUG9zaXRpb24odGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=