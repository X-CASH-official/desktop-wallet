import { Size } from './size.interface';
/**
 * Interface `PlainGalleryConfig` to configure plain-gallery features.
 */
export interface PlainGalleryConfig {
    strategy: PlainGalleryStrategy;
    layout: PlainGalleryLayout;
    advanced?: AdvancedConfig;
}
/**
 * Interface `PlainGalleryLayout` to configure the layout. This interface isn't used directly, instead
 * refers to either `LineLayout`, `GridLayout` or `AdvancedLayout`.
 */
export interface PlainGalleryLayout {
}
/**
 * Class `LineLayout` to configure a linear plain gallery.
 */
export declare class LineLayout implements PlainGalleryLayout {
    breakConfig: BreakConfig;
    justify: string;
    size: Size;
    constructor(size: Size, breakConfig: BreakConfig, justify: string);
}
/**
 * Class `GridLayout` to configure a grid plain gallery.
 */
export declare class GridLayout implements PlainGalleryLayout {
    breakConfig: BreakConfig;
    size: Size;
    constructor(size: Size, breakConfig: BreakConfig);
}
/**
 * Class `AdvancedLayout` to configure a fully custom plain gallery.
 */
export declare class AdvancedLayout implements PlainGalleryLayout {
    modalOpenerByIndex: number;
    hideDefaultPlainGallery: boolean;
    constructor(modalOpenerByIndex: number, hideDefaultPlainGallery: boolean);
}
/**
 * Enum `PlainGalleryStrategy` to choose the behaviour of the plain gallery.
 */
export declare enum PlainGalleryStrategy {
    ROW = 1,
    COLUMN = 2,
    GRID = 3,
    CUSTOM = 4,
}
/**
 * Interface `BreakConfig` to limit the number of items of the plain gallery or to force it to fill other lines.
 */
export interface BreakConfig {
    length: number;
    wrap: boolean;
}
/**
 * Interface `AdvancedConfig` to use `<a>` tags instead of `<img>`.
 * It also contains a string property to customize the css background property.
 * For more info check here https://www.w3schools.com/cssref/css3_pr_background.asp
 */
export interface AdvancedConfig {
    aTags: boolean;
    additionalBackground: string;
}
