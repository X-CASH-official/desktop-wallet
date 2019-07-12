import { LoadingConfig } from './loading-config.interface';
import { Description } from './description.interface';
/**
 * Interface `CurrentImageConfig` to change current image behaviour in modal-gallery.
 */
export interface CurrentImageConfig {
    navigateOnClick?: boolean;
    downloadable?: boolean;
    loadingConfig?: LoadingConfig;
    description?: Description;
    invertSwipe?: boolean;
}
