import { Image } from '../model/image.class';
/**
 * Utility function to get the index of the input `image` from `arrayOfImages`
 * @param Image image to get the index. The image 'id' must be a number >= 0
 * @param Image[] arrayOfImages to search the image within it
 * @returns number the index of the image. -1 if not found.
 * @throws an Error if either image or arrayOfImages are not valid,
 *  or if the input image doesn't contain an 'id', or the 'id' is < 0
 */
export declare function getIndex(image: Image, arrayOfImages: Image[]): number;
