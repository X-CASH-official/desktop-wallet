import { Renderer, ElementRef, OnDestroy } from '@angular/core';
import { DropdownStateService } from '../../services/dropdown-state.service';
export declare class Ng2MenuItem implements OnDestroy {
    private state;
    private element;
    private renderer;
    /**
     * @preventClose
     * @desc if true, clicking on the item won't close the dropdown
     */
    preventClose: boolean;
    /**
     * @name value
     * @desc any value associated to the item
     */
    value: any;
    constructor(state: DropdownStateService, element: ElementRef, renderer: Renderer);
    ngOnDestroy(): void;
    /**
     * @name isSelected
     * @desc returns current selected item
     */
    readonly isSelected: boolean;
    /**
     * @name click
     * @desc emits select event
     */
    select($event?: any): void;
    /**
     * @name click
     * @desc emits click event
     */
    click(): void;
    /**
     * @name focus
     */
    focus(): void;
}
