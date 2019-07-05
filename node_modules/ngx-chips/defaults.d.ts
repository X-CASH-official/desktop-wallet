import { Observable } from 'rxjs';
import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { TagModel } from './core/accessor';
export interface TagInputOptions {
    separatorKeys: string[];
    separatorKeyCodes: number[];
    maxItems: number;
    placeholder: string;
    secondaryPlaceholder: string;
    validators: ValidatorFn[];
    asyncValidators: AsyncValidatorFn[];
    onlyFromAutocomplete: boolean;
    errorMessages: {
        [key: string]: string;
    };
    theme: string;
    onTextChangeDebounce: number;
    inputId: string | null;
    inputClass: string;
    clearOnBlur: boolean;
    hideForm: boolean;
    addOnBlur: boolean;
    addOnPaste: boolean;
    pasteSplitPattern: string | RegExp;
    blinkIfDupe: boolean;
    removable: boolean;
    editable: boolean;
    allowDupes: boolean;
    modelAsStrings: boolean;
    trimTags: boolean;
    ripple: boolean;
    tabIndex: string;
    disable: boolean;
    dragZone: string;
    onRemoving?: (tag: TagModel) => Observable<TagModel>;
    onAdding?: (tag: TagModel) => Observable<TagModel>;
    displayBy: string;
    identifyBy: string;
    animationDuration: {
        enter: string;
        leave: string;
    };
}
export interface TagInputDropdownOptions {
    displayBy: string;
    identifyBy: string;
    appendToBody: boolean;
    offset: string;
    focusFirstElement: boolean;
    showDropdownIfEmpty: boolean;
    minimumTextLength: number;
    limitItemsTo: number;
    keepOpen: boolean;
    zIndex: number;
    dynamicUpdate: boolean;
    matchingFn: (value: string, target: TagModel) => boolean;
}
export declare const defaults: {
    tagInput: TagInputOptions;
    dropdown: TagInputDropdownOptions;
};
