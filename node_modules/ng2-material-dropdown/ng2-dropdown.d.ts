import { EventEmitter } from '@angular/core';
import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { DropdownStateService } from '../../services/dropdown-state.service';
export declare class Ng2Dropdown {
    private state;
    button: Ng2DropdownButton;
    menu: Ng2DropdownMenu;
    dynamicUpdate: boolean;
    onItemClicked: EventEmitter<string>;
    onItemSelected: EventEmitter<string>;
    onShow: EventEmitter<Ng2Dropdown>;
    onHide: EventEmitter<Ng2Dropdown>;
    constructor(state: DropdownStateService);
    ngOnInit(): void;
    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    toggleMenu(position?: ClientRect): void;
    /**
     * - hides dropdown
     * @name hide
     */
    hide(): void;
    /**
     * - shows dropdown
     * @name show
     * @param position
     */
    show(position?: ClientRect): void;
    /**
     * @name scrollListener
     */
    scrollListener(): void;
}
