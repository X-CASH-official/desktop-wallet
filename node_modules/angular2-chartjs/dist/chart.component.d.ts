import { ElementRef, OnInit, OnChanges, SimpleChanges, EventEmitter, NgZone } from '@angular/core';
export declare class ChartComponent implements OnInit, OnChanges {
    private elementRef;
    private ngZone;
    chart: any;
    type: string;
    data: any;
    options: any;
    clickCanvas: EventEmitter<{}>;
    clickDataset: EventEmitter<{}>;
    clickElements: EventEmitter<{}>;
    clickElement: EventEmitter<{}>;
    private canvas;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private create();
}
