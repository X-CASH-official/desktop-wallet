import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Size } from '../model/size.interface';
/**
 * Directive to change the size of an element.
 */
export declare class SizeDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    /**
     * Object of type `Size` to resize the element.
     */
    sizeConfig: Size;
    constructor(renderer: Renderer2, el: ElementRef);
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    ngOnInit(): void;
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    ngOnChanges(): void;
    /**
     * Private method to change both width and height of an element.
     */
    private applyStyle();
}
