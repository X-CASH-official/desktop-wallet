import { Action } from './action.enum';
import { Size } from './size.interface';
import { SafeResourceUrl } from '@angular/platform-browser';
/**
 * Class `Image` that represents an image with both `modal` and `plain` configurations.
 * Both image `id` and `modal` are mandatory, instead `plain` is optional.
 */
export declare class Image {
    id: number;
    modal: ModalImage;
    plain?: PlainImage;
    constructor(id: number, modal: ModalImage, plain?: PlainImage);
}
/**
 * Interface `ImageData` to configure an image, but it isn't used directly.
 * Please, refers to `PlainImage` or `ModalImage`.
 */
export interface ImageData {
    img: string | SafeResourceUrl;
    description?: string;
    title?: string;
    alt?: string;
    ariaLabel?: string;
}
/**
 * Interface `ModalImage` to configure the modal image.
 */
export interface ModalImage extends ImageData {
    extUrl?: string;
    downloadFileName?: string;
}
/**
 * Interface `PlainImage` to configure the plain image.
 */
export interface PlainImage extends ImageData {
    size?: Size;
}
/**
 * Class `ImageModalEvent` that represents the event payload with the result and the triggered action.
 */
export declare class ImageModalEvent {
    action: Action;
    result: number | boolean;
    constructor(action: Action, result: number | boolean);
}
