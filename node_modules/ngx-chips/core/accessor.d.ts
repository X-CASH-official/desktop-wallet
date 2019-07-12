import { ControlValueAccessor } from '@angular/forms';
import { TagInputDropdown } from '../components/dropdown/tag-input-dropdown.component';
export declare class TagModelClass {
    [key: string]: any;
}
export declare type TagModel = string | TagModelClass;
export declare function isObject(obj: any): boolean;
export declare class TagInputAccessor implements ControlValueAccessor {
    private _items;
    private _onTouchedCallback;
    private _onChangeCallback;
    dropdown: TagInputDropdown;
    /**
     * @name displayBy
     */
    displayBy: string;
    /**
     * @name identifyBy
     */
    identifyBy: string;
    items: TagModel[];
    onTouched(): void;
    writeValue(items: any[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    /**
     * @name getItemValue
     * @param item
     * @param fromDropdown
     */
    getItemValue(item: TagModel, fromDropdown?: boolean): string;
    /**
     * @name getItemDisplay
     * @param item
     * @param fromDropdown
     */
    getItemDisplay(item: TagModel, fromDropdown?: boolean): string;
    /**
     * @name getItemsWithout
     * @param index
     */
    protected getItemsWithout(index: number): TagModel[];
}
