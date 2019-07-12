import { ViewContainerRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AmazingTimePickerService } from './atp-time-picker.service';
export declare class AtpDirective implements ControlValueAccessor {
    viewContainerRef: ViewContainerRef;
    private atp;
    myClick: EventEmitter<{}>;
    private elementRef;
    private onChange;
    constructor(viewContainerRef: ViewContainerRef, atp: AmazingTimePickerService);
    onClick(e: any): void;
    onInput(e: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
