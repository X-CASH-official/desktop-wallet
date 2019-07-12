import { Size } from './size.interface';
/**
 * Interface `SlideConfig` to configure sliding features of modal gallery.
 */
export interface SlideConfig {
    infinite?: boolean;
    sidePreviews?: SidePreviewsConfig;
}
/**
 * Interface `SidePreviewsConfig` to configure sliding features of previews in modal gallery.
 */
export interface SidePreviewsConfig {
    show: boolean;
    size: Size;
}
