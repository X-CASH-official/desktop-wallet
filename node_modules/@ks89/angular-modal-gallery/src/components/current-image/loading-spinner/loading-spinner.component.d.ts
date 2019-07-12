import { AccessibilityConfig } from '../../../model/accessibility.interface';
import { LoadingConfig, LoadingType } from '../../../model/loading-config.interface';
/**
 * Component with the loading spinner
 */
export declare class LoadingSpinnerComponent {
    /**
     * Object of type `LoadingConfig` exposed to the template.
     * It contains a field to choose a loading spinner.
     */
    loadingConfig: LoadingConfig;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    accessibilityConfig: AccessibilityConfig;
    /**
     * Enum of type `LoadingType` to choose the standard loading spinner.
     * Declared here to be used inside the template.
     */
    loadingStandard: LoadingType;
    /**
     * Enum of type `LoadingType` to choose the bars loading spinner.
     * Declared here to be used inside the template.
     */
    loadingBars: LoadingType;
    /**
     * Enum of type `LoadingType` to choose the circular loading spinner.
     * Declared here to be used inside the template.
     */
    loadingCircular: LoadingType;
    /**
     * Enum of type `LoadingType` to choose the dots loading spinner.
     * Declared here to be used inside the template.
     */
    loadingDots: LoadingType;
    /**
     * Enum of type `LoadingType` to choose the cube flipping loading spinner.
     * Declared here to be used inside the template.
     */
    loadingCubeFlipping: LoadingType;
    /**
     * Enum of type `LoadingType` to choose the circles loading spinner.
     * Declared here to be used inside the template.
     */
    loadingCircles: LoadingType;
    /**
     * Enum of type `LoadingType` to choose the explosing squares loading spinner.
     * Declared here to be used inside the template.
     */
    loadingExplosingSquares: LoadingType;
}
