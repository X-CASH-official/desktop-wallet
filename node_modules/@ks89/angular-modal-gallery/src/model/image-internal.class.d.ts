import { Image, ModalImage, PlainImage } from './image.class';
/**
 * Internal representation of an image adding other fields
 * to the public `Image` class.
 */
export declare class InternalLibImage extends Image {
    previouslyLoaded: boolean;
    constructor(id: number, modal: ModalImage, plain?: PlainImage, previouslyLoaded?: boolean);
}
