import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
/**
 * Directive to change the flex-wrap css property of an element.
 */
export declare class WrapDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    /**
     * Boolean input that it's true to add 'flex-wrap: wrap', 'flex-wrap: nowrap' otherwise.
     */
    wrap: boolean;
    /**
     * String input to force the width of the element to be able to see wrapping.
     */
    width: string;
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
     * Private method to change both widht and flex-wrap css properties.
     */
    private applyStyle();
}
