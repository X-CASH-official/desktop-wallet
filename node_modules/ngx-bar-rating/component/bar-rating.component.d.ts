import { EventEmitter, OnInit, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
export declare class BarRatingComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    private changeDetectorRef;
    contexts: any[];
    nextRate: number;
    disabled: boolean;
    /** Current rating. Can be a decimal value like 3.14 */
    rate: any;
    /** Maximal rating that can be given using this widget. */
    max: number;
    /** A flag indicating if rating can be updated. */
    readOnly: boolean;
    /** Set the theme */
    theme: string;
    /** Show rating title */
    showText: boolean;
    /** Replace rate value with a title */
    titles: any[];
    /** A flag indicating if rating is required for form validation. */
    required: boolean;
    /** An event fired when a user is hovering over a given rating.
     * Event's payload equals to the rating being hovered over. */
    hover: EventEmitter<number>;
    /** An event fired when a user stops hovering over a given rating.
     * Event's payload equals to the rating of the last item being hovered over. */
    leave: EventEmitter<number>;
    /** An event fired when a user selects a new rating.
     * Event's payload equals to the newly selected rating. */
    rateChange: EventEmitter<number>;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    update(newRate: number, internalChange?: boolean): void;
    /** Reset rate value */
    reset(): void;
    private updateState(nextValue);
    private handleClick(e, value);
    private handleEnter(index);
    /** This is the initial value set to the component */
    writeValue(value: number): void;
    validate(c: FormControl): {
        required: boolean;
    };
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
}
