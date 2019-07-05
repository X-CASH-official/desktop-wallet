import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Description } from '../model/description.interface';
/**
 * Directive to customize the description.
 */
export declare class DescriptionDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    /**
     * Object of type `Description` to resize the element.
     */
    description: Description;
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
     * Private method to change description's style.
     */
    private applyStyle();
}
