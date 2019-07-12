/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Renderer, ContentChildren, QueryList, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes, state } from '@angular/animations';
import { ACTIONS, arrowKeysHandler } from './actions';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { DropdownStateService } from '../../services/dropdown-state.service';
export class Ng2DropdownMenu {
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
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    show(position, dynamic = true) {
        const /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        const /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.state.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    }
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    hide() {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    }
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    updatePosition(position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    }
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    handleKeypress($event) {
        const /** @type {?} */ key = $event.keyCode;
        const /** @type {?} */ items = this.items.toArray();
        const /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    }
    /**
     * \@name getMenuElement
     * @return {?}
     */
    getMenuElement() {
        return this.element.nativeElement.children[0];
    }
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    calcPositionOffset(position) {
        const /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        const /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        const /** @type {?} */ element = this.getMenuElement();
        const /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        const /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        const /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        const /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        let { top, left } = this.applyOffset(`${position.top + (this.appendToBody ? y - 15 : 0)}px`, `${position.left + x - 5}px`);
        const /** @type {?} */ clientWidth = element.clientWidth;
        const /** @type {?} */ clientHeight = element.clientHeight;
        const /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        const /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        const /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        const /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = `${parseInt(top.replace('px', '')) - clientHeight}px`;
        }
        if (marginFromRight >= windowScrollWidth) {
            const /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = `${parseInt(left.replace('px', '')) - marginRight}px`;
        }
        return { top, left };
    }
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    applyOffset(top, left) {
        if (!this.offset) {
            return { top, left };
        }
        const /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = `${parseInt(top.replace('px', '')) + parseInt(offset[0])}px`;
        left = `${parseInt(left.replace('px', '')) + parseInt(offset[1])}px`;
        return { top, left };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    }
    /**
     * @param {?=} dynamic
     * @return {?}
     */
    updateOnChange(dynamic = true) {
        const /** @type {?} */ element = this.getMenuElement();
        const /** @type {?} */ position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top.toString());
            this.renderer.setElementStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
            this.state.dropdownState.select(this.items.first, false);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    }
}
Ng2DropdownMenu.decorators = [
    { type: Component, args: [{
                selector: 'ng2-dropdown-menu',
                styles: [`:host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}`],
                template: `<!-- MENU -->
<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'
     [class.ng2-dropdown-menu--inside-element]="!appendToBody"
     [class.ng2-dropdown-menu--open]="state.menuState.isVisible"
     [style.z-index]="zIndex"
     [@fade]="state.menuState.toString()">
        <div class="ng2-dropdown-menu__options-container"
             [@opacity]="state.menuState.toString()">
            <ng-content></ng-content>
        </div>
</div>

<!-- BACKDROP -->
<div class="ng2-dropdown-backdrop" *ngIf="state.menuState.isVisible" (click)="hide()"></div>
`,
                animations: [
                    trigger('fade', [
                        state('visible', style({ display: 'block', opacity: 1, height: '*', width: '*' })),
                        state('hidden', style({ display: 'none', opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                        transition('hidden => visible', [
                            animate('250ms ease-in', style({ opacity: 1, height: '*', width: '*' }))
                        ]),
                        transition('visible => hidden', [
                            animate('350ms ease-out', style({ opacity: 0, width: 0, height: 0 }))
                        ])
                    ]),
                    trigger('opacity', [
                        transition('hidden => visible', [
                            animate('450ms ease-in', keyframes([
                                style({ opacity: 0, offset: 0 }),
                                style({ opacity: 1, offset: 1 }),
                            ]))
                        ]),
                        transition('visible => hidden', [
                            animate('250ms ease-out', keyframes([
                                style({ opacity: 1, offset: 0 }),
                                style({ opacity: 0.5, offset: 0.3 }),
                                style({ opacity: 0, offset: 1 }),
                            ]))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
Ng2DropdownMenu.ctorParameters = () => [
    { type: DropdownStateService, },
    { type: ElementRef, },
    { type: Renderer, },
];
Ng2DropdownMenu.propDecorators = {
    "width": [{ type: Input },],
    "focusFirstElement": [{ type: Input },],
    "offset": [{ type: Input },],
    "appendToBody": [{ type: Input },],
    "zIndex": [{ type: Input },],
    "items": [{ type: ContentChildren, args: [Ng2MenuItem,] },],
};
function Ng2DropdownMenu_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Ng2DropdownMenu.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Ng2DropdownMenu.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    Ng2DropdownMenu.propDecorators;
    /**
     * \@name width
     * @type {?}
     */
    Ng2DropdownMenu.prototype.width;
    /**
     * \@description if set to true, the first element of the dropdown will be automatically focused
     * \@name focusFirstElement
     * @type {?}
     */
    Ng2DropdownMenu.prototype.focusFirstElement;
    /**
     * \@description sets dropdown offset from the button
     * \@name offset {string} follow format '<number> <number>' ex. '0 20'
     * @type {?}
     */
    Ng2DropdownMenu.prototype.offset;
    /**
     * \@name appendToBody
     * @type {?}
     */
    Ng2DropdownMenu.prototype.appendToBody;
    /**
     * \@name zIndex
     * @type {?}
     */
    Ng2DropdownMenu.prototype.zIndex;
    /**
     * \@name items
     * @type {?}
     */
    Ng2DropdownMenu.prototype.items;
    /** @type {?} */
    Ng2DropdownMenu.prototype.position;
    /** @type {?} */
    Ng2DropdownMenu.prototype.listeners;
    /** @type {?} */
    Ng2DropdownMenu.prototype.state;
    /** @type {?} */
    Ng2DropdownMenu.prototype.element;
    /** @type {?} */
    Ng2DropdownMenu.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyb3Bkb3duLW1lbnUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFNBQVMsRUFDVCxLQUFLLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXRELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXdEN0UsTUFBTTs7Ozs7O0lBd0NGLFlBQW1CLEtBQTJCLEVBQzFCLFNBQ0E7UUFGRCxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMxQixZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFROzs7O3FCQXRDSSxDQUFDOzs7OztpQ0FNWSxJQUFJOzs7OzRCQVdULElBQUk7Ozs7c0JBS25CLElBQUk7eUJBU1Q7WUFDaEIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsY0FBYyxFQUFFLFNBQVM7U0FDNUI7S0FJeUM7Ozs7Ozs7O0lBTW5DLElBQUksQ0FBQyxRQUFxQixFQUFFLE9BQU8sR0FBRyxJQUFJO1FBQzdDLHVCQUFNLEVBQUUsR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xFLHVCQUFNLEVBQUUsR0FBRyxPQUFPLE1BQU0s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LENBQUM7NkJBQ2pDLENBQUMsQ0FBQzt5QkFDTixDQUFDO3FCQUNMLENBQUM7aUJBQ0w7YUFDSjs7OztZQXZEUSxvQkFBb0I7WUFuQnpCLFVBQVU7WUFDVixRQUFROzs7c0JBOEVQLEtBQUs7a0NBTUwsS0FBSzt1QkFNTCxLQUFLOzZCQUtMLEtBQUs7dUJBS0wsS0FBSztzQkFLTCxlQUFlLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgUmVuZGVyZXIsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICB0cmlnZ2VyLFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb24sXG4gICAgYW5pbWF0ZSxcbiAgICBrZXlmcmFtZXMsXG4gICAgc3RhdGVcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IEFDVElPTlMsIGFycm93S2V5c0hhbmRsZXIgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLWRyb3Bkb3duLW1lbnUnLFxuICAgIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5uZzItZHJvcGRvd24tbWVudXtvdmVyZmxvdy15OmF1dG87Ym94LXNoYWRvdzowIDFweCAycHggMCByZ2JhKDAsMCwwLC4zKTtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOi41ZW0gMDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoxcHg7bWF4LWhlaWdodDo0MDBweDt3aWR0aDoyNjBweDttaW4taGVpZ2h0OjA7ZGlzcGxheTpibG9ja30ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLWluc2lkZS1lbGVtZW50e3Bvc2l0aW9uOmZpeGVkfS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTJ7d2lkdGg6MjAwcHh9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tNHt3aWR0aDoyNjBweH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS02e3dpZHRoOjMyMHB4fS5uZzItZHJvcGRvd24tYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO292ZXJmbG93OmhpZGRlbn06aG9zdCAvZGVlcC8gLm5nMi1tZW51LWRpdmlkZXJ7aGVpZ2h0OjFweDttaW4taGVpZ2h0OjFweDttYXgtaGVpZ2h0OjFweDt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDojZjlmOWY5fWBdLFxuICAgIHRlbXBsYXRlOiBgPCEtLSBNRU5VIC0tPlxuPGRpdiBjbGFzcz0nbmcyLWRyb3Bkb3duLW1lbnUgbmcyLWRyb3Bkb3duLW1lbnUtLS13aWR0aC0te3sgd2lkdGggfX0nXG4gICAgIFtjbGFzcy5uZzItZHJvcGRvd24tbWVudS0taW5zaWRlLWVsZW1lbnRdPVwiIWFwcGVuZFRvQm9keVwiXG4gICAgIFtjbGFzcy5uZzItZHJvcGRvd24tbWVudS0tb3Blbl09XCJzdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlXCJcbiAgICAgW3N0eWxlLnotaW5kZXhdPVwiekluZGV4XCJcbiAgICAgW0BmYWRlXT1cInN0YXRlLm1lbnVTdGF0ZS50b1N0cmluZygpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tbWVudV9fb3B0aW9ucy1jb250YWluZXJcIlxuICAgICAgICAgICAgIFtAb3BhY2l0eV09XCJzdGF0ZS5tZW51U3RhdGUudG9TdHJpbmcoKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbjwvZGl2PlxuXG48IS0tIEJBQ0tEUk9QIC0tPlxuPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1iYWNrZHJvcFwiICpuZ0lmPVwic3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZVwiIChjbGljayk9XCJoaWRlKClcIj48L2Rpdj5cbmAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmYWRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZShcbiAgICAgICAgICAgICAgICB7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKid9XG4gICAgICAgICAgICApKSxcbiAgICAgICAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZShcbiAgICAgICAgICAgICAgICB7ZGlzcGxheTogJ25vbmUnLCBvcGFjaXR5OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicsIGhlaWdodDogMCwgd2lkdGg6IDB9XG4gICAgICAgICAgICApKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiB2aXNpYmxlJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2UtaW4nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKid9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiBoaWRkZW4nLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMzUwbXMgZWFzZS1vdXQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ29wYWNpdHknLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc0NTBtcyBlYXNlLWluJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMH0pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxfSksXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzI1MG1zIGVhc2Utb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMC41LCBvZmZzZXQ6IDAuM30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAxfSksXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25NZW51IHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSB3aWR0aFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gNDtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBpZiBzZXQgdG8gdHJ1ZSwgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGRyb3Bkb3duIHdpbGwgYmUgYXV0b21hdGljYWxseSBmb2N1c2VkXG4gICAgICogQG5hbWUgZm9jdXNGaXJzdEVsZW1lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZm9jdXNGaXJzdEVsZW1lbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHNldHMgZHJvcGRvd24gb2Zmc2V0IGZyb20gdGhlIGJ1dHRvblxuICAgICAqIEBuYW1lIG9mZnNldCB7c3RyaW5nfSBmb2xsb3cgZm9ybWF0ICc8bnVtYmVyPiA8bnVtYmVyPicgZXguICcwIDIwJ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvZmZzZXQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFwcGVuZFRvQm9keVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgekluZGV4XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHpJbmRleCA9IDEwMDA7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpdGVtc1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oTmcyTWVudUl0ZW0pIHB1YmxpYyBpdGVtczogUXVlcnlMaXN0PE5nMk1lbnVJdGVtPjtcblxuICAgIHByaXZhdGUgcG9zaXRpb246IENsaWVudFJlY3Q7XG5cbiAgICBwcml2YXRlIGxpc3RlbmVycyA9IHtcbiAgICAgICAgYXJyb3dIYW5kbGVyOiB1bmRlZmluZWQsXG4gICAgICAgIGhhbmRsZUtleXByZXNzOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHN0YXRlOiBEcm9wZG93blN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzaG93XG4gICAgICogQHNob3dzIG1lbnUgYW5kIHNlbGVjdHMgZmlyc3QgaXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHBvc2l0aW9uPzogQ2xpZW50UmVjdCwgZHluYW1pYyA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGMgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHdkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIC8vIHNldHRpbmcgaGFuZGxlcnNcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmhhbmRsZUtleXByZXNzID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZGMuYm9keSwgJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleXByZXNzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuYXJyb3dIYW5kbGVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4od2QsICdrZXlkb3duJywgYXJyb3dLZXlzSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24ocG9zaXRpb24sIGR5bmFtaWMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGlkZVxuICAgICAqIEBkZXNjIGhpZGVzIG1lbnVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXQgc2VsZWN0ZWQgaXRlbSBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUudW5zZWxlY3QoKTtcblxuICAgICAgICAvLyBjYWxsIGZ1bmN0aW9uIHRvIHVubGlzdGVuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlciA/IHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlcigpIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcyA/IHRoaXMubGlzdGVuZXJzLmhhbmRsZUtleXByZXNzKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdXBkYXRlUG9zaXRpb25cbiAgICAgKiBAZGVzYyB1cGRhdGVzIHRoZSBtZW51IHBvc2l0aW9uIGV2ZXJ5IHRpbWUgaXQgaXMgdG9nZ2xlZFxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiB7Q2xpZW50UmVjdH1cbiAgICAgKiBAcGFyYW0gZHluYW1pYyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUG9zaXRpb24ocG9zaXRpb246IENsaWVudFJlY3QsIGR5bmFtaWM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZU9uQ2hhbmdlKGR5bmFtaWMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhhbmRsZUtleXByZXNzXG4gICAgICogQGRlc2MgZXhlY3V0ZXMgZnVuY3Rpb25zIG9uIGtleVByZXNzIGJhc2VkIG9uIHRoZSBrZXkgcHJlc3NlZFxuICAgICAqIEBwYXJhbSAkZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlS2V5cHJlc3MoJGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleSA9ICRldmVudC5rZXlDb2RlO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmluZGV4T2YodGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgaWYgKCFBQ1RJT05TLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIEFDVElPTlNba2V5XS5jYWxsKHRoaXMsIGluZGV4LCBpdGVtcywgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRNZW51RWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0TWVudUVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjYWxjUG9zaXRpb25PZmZzZXRcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbGNQb3NpdGlvbk9mZnNldChwb3NpdGlvbik6IHsgdG9wOiBzdHJpbmcsIGxlZnQ6IHN0cmluZyB9IHtcbiAgICAgICAgY29uc3Qgd2QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgZGMgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCF3ZCB8fCAhZGMgfHwgIXBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRNZW51RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBzdXBwb3J0UGFnZU9mZnNldCA9IHdkLnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGlzQ1NTMUNvbXBhdCA9ICgoZGMuY29tcGF0TW9kZSB8fCAnJykgPT09ICdDU1MxQ29tcGF0Jyk7XG5cbiAgICAgICAgY29uc3QgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2QucGFnZVhPZmZzZXQgOiBpc0NTUzFDb21wYXQgP1xuICAgICAgICAgICAgZGMuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBkYy5ib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgICAgY29uc3QgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2QucGFnZVlPZmZzZXQgOiBpc0NTUzFDb21wYXQgP1xuICAgICAgICAgICAgZGMuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRjLmJvZHkuc2Nyb2xsVG9wO1xuXG4gICAgICAgIGxldCB7IHRvcCwgbGVmdCB9ID0gdGhpcy5hcHBseU9mZnNldChcbiAgICAgICAgICAgIGAke3Bvc2l0aW9uLnRvcCArICh0aGlzLmFwcGVuZFRvQm9keSA/IHkgLSAxNSA6IDApfXB4YCxcbiAgICAgICAgICAgIGAke3Bvc2l0aW9uLmxlZnQgKyB4IC0gNX1weGBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjbGllbnRXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IG1hcmdpbkZyb21Cb3R0b20gPSBwYXJzZUludCh0b3ApICsgY2xpZW50SGVpZ2h0ICsgKHRoaXMuYXBwZW5kVG9Cb2R5ID8gMCA6IHkgLSAxNSk7XG4gICAgICAgIGNvbnN0IG1hcmdpbkZyb21SaWdodCA9IHBhcnNlSW50KGxlZnQpICsgY2xpZW50V2lkdGg7XG5cbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsSGVpZ2h0ID0gd2QuaW5uZXJIZWlnaHQgKyB3ZC5zY3JvbGxZO1xuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxXaWR0aCA9IHdkLmlubmVyV2lkdGggKyB3ZC5zY3JvbGxYO1xuXG4gICAgICAgIGlmIChtYXJnaW5Gcm9tQm90dG9tID49IHdpbmRvd1Njcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgdG9wID0gYCR7cGFyc2VJbnQodG9wLnJlcGxhY2UoJ3B4JywgJycpKSAtIGNsaWVudEhlaWdodH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWFyZ2luRnJvbVJpZ2h0ID49IHdpbmRvd1Njcm9sbFdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW5SaWdodCA9IG1hcmdpbkZyb21SaWdodCAtIHdpbmRvd1Njcm9sbFdpZHRoICsgMzA7XG4gICAgICAgICAgICBsZWZ0ID0gYCR7cGFyc2VJbnQobGVmdC5yZXBsYWNlKCdweCcsICcnKSkgLSBtYXJnaW5SaWdodH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5T2Zmc2V0KHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcpOiB7IHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcgfSB7XG4gICAgICAgIGlmICghdGhpcy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQuc3BsaXQoJyAnKTtcblxuICAgICAgICBpZiAoIW9mZnNldFsxXSkge1xuICAgICAgICAgICAgb2Zmc2V0WzFdID0gJzAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9wID0gYCR7cGFyc2VJbnQodG9wLnJlcGxhY2UoJ3B4JywgJycpKSArIHBhcnNlSW50KG9mZnNldFswXSl9cHhgO1xuICAgICAgICBsZWZ0ID0gYCR7cGFyc2VJbnQobGVmdC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUludChvZmZzZXRbMV0pfXB4YDtcblxuICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgICAgIC8vIGFwcGVuZCBtZW51IGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgICAgICAgIGRjLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZU9uQ2hhbmdlKGR5bmFtaWMgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldE1lbnVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjUG9zaXRpb25PZmZzZXQodGhpcy5wb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShlbGVtZW50LCAndG9wJywgcG9zaXRpb24udG9wLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudCwgJ2xlZnQnLCBwb3NpdGlvbi5sZWZ0LnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VsZWN0IGZpcnN0IGl0ZW0gdW5sZXNzIHVzZXIgZGlzYWJsZWQgdGhpcyBvcHRpb25cbiAgICAgICAgaWYgKHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuZmlyc3QgJiZcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMuaXRlbXMuZmlyc3QsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLmhhbmRsZUtleXByZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19