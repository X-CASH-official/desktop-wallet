import { ElementRef, Renderer, QueryList } from '@angular/core';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { DropdownStateService } from '../../services/dropdown-state.service';
export declare class Ng2DropdownMenu {
    state: DropdownStateService;
    private element;
    private renderer;
    /**
     * @name width
     */
    width: number;
    /**
     * @description if set to true, the first element of the dropdown will be automatically focused
     * @name focusFirstElement
     */
    focusFirstElement: boolean;
    /**
     * @description sets dropdown offset from the button
     * @name offset {string} follow format '<number> <number>' ex. '0 20'
     */
    offset: string;
    /**
     * @name appendToBody
     */
    appendToBody: boolean;
    /**
     * @name zIndex
     */
    zIndex: number;
    /**
     * @name items
     */
    items: QueryList<Ng2MenuItem>;
    private position;
    private listeners;
    constructor(state: DropdownStateService, element: ElementRef, renderer: Renderer);
    /**
     * @name show
     * @shows menu and selects first item
     */
    show(position?: ClientRect, dynamic?: boolean): void;
    /**
     * @name hide
     * @desc hides menu
     */
    hide(): void;
    /**
     * @name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param position {ClientRect}
     * @param dynamic {boolean}
     */
    updatePosition(position: ClientRect, dynamic: boolean): void;
    /**
     * @name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param $event
     */
    handleKeypress($event: any): void;
    /**
     * @name getMenuElement
     */
    private getMenuElement();
    /**
     * @name calcPositionOffset
     * @param position
     */
    private calcPositionOffset(position);
    private applyOffset(top, left);
    ngOnInit(): void;
    updateOnChange(dynamic?: boolean): void;
    ngOnDestroy(): void;
}
