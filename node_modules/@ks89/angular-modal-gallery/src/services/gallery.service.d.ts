import { EventEmitter } from '@angular/core';
import { Image } from '../model/image.class';
export interface InternalGalleryPayload {
    galleryId: number;
    index: number;
    image?: Image;
}
export declare class GalleryService {
    navigate: EventEmitter<InternalGalleryPayload>;
    close: EventEmitter<number>;
    update: EventEmitter<InternalGalleryPayload>;
    openGallery(galleryId: number | undefined, index: number): void;
    closeGallery(galleryId: number | undefined): void;
    updateGallery(galleryId: number | undefined, index: number, image: Image): void;
}
