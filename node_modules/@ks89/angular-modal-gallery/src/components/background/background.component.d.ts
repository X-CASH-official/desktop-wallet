import { AccessibilityConfig } from '../../model/accessibility.interface';
/**
 * Component with the semi-transparent background.
 */
export declare class BackgroundComponent {
    /**
     * Boolean that it is true if the modal gallery is visible,
     * so also this component should be visible.
     */
    isOpen: boolean;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    accessibilityConfig: AccessibilityConfig;
}
