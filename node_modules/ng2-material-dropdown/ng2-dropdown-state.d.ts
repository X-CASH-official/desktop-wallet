import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../components/menu-item/ng2-menu-item';
export declare class Ng2DropdownState {
    onItemSelected: EventEmitter<Ng2MenuItem>;
    onItemClicked: EventEmitter<Ng2MenuItem>;
    onItemDestroyed: EventEmitter<Ng2MenuItem>;
    private _selectedItem;
    /**
     * @name selectedItem
     * @desc getter for _selectedItem
     */
    readonly selectedItem: Ng2MenuItem;
    /**
     * @name selects a menu item and emits event
     * @param item
     */
    select(item: Ng2MenuItem | undefined, dispatchEvent?: boolean): void;
    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    unselect(): void;
}
