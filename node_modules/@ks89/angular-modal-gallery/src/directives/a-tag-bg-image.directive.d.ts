import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Image } from '../model/image.class';
/**
 * Directive to add an image to an `<a>` tag with some additional custom properties.
 */
export declare class ATagBgImageDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    /**
     * Object of type `Image` that represents the image to add to the `<a>` tag.
     */
    image: Image;
    /**
     * Additional style to customize the background attribute.
     * Empty string by default.
     */
    style: string;
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
     * Private method to add an image as background of an `<a>` tag.
     */
    private applyStyle();
}
