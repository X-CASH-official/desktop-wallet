import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
/**
 * Directive to change the flex-direction of an element, based on two inputs (`direction` and `justify`).
 */
export declare class DirectionDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    /**
     * String input to set the css flex-direction of an element.
     */
    direction: string;
    /**
     * String input to set the css justify-content of an element.
     */
    justify: string;
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
     * Private method to change both direction and justify of an element.
     */
    private applyStyle();
}
