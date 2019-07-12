import { EventEmitter, ElementRef } from '@angular/core';
export declare class Ng2DropdownButton {
    private element;
    onMenuToggled: EventEmitter<boolean>;
    showCaret: boolean;
    constructor(element: ElementRef);
    /**
     * @name toggleMenu
     * @desc emits event to toggle menu
     */
    toggleMenu(): void;
    /**
     * @name getPosition
     * @desc returns position of the button
     */
    getPosition(): ClientRect;
}
