import { ViewContainerRef, ComponentFactoryResolver, OnInit, ApplicationRef, EventEmitter } from '@angular/core';
import { TimePickerConfig } from '../definitions';
export declare class AtpTimePickerComponent implements OnInit {
    private resolver;
    private appRef;
    container: ViewContainerRef;
    timeSelected: EventEmitter<string>;
    config: TimePickerConfig;
    constructor(resolver: ComponentFactoryResolver, appRef: ApplicationRef);
    ngOnInit(): void;
}
