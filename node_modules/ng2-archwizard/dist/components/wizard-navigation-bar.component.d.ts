import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
import { NavigationMode } from '../navigation/navigation-mode.interface';
/**
 * The `wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-navigation-bar></wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardNavigationBarComponent {
    wizardState: WizardState;
    /**
     * The direction in which the wizard steps should be shown in the navigation bar.
     * This value can be either `left-to-right` or `right-to-left`
     */
    direction: string;
    /**
     * The navigation mode
     *
     * @returns {NavigationMode}
     */
    readonly navigationMode: NavigationMode;
    /**
     * Constructor
     *
     * @param wizardState The state the wizard currently resides in
     */
    constructor(wizardState: WizardState);
    /**
     * Returns all [[WizardStep]]s contained in the wizard
     *
     * @returns {Array<WizardStep>} An array containing all [[WizardStep]]s
     */
    readonly wizardSteps: Array<WizardStep>;
    /**
     * Returns the number of wizard steps, that need to be displaced in the navigation bar
     *
     * @returns {number} The number of wizard steps to be displayed
     */
    readonly numberOfWizardSteps: number;
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as current
     */
    isCurrent(wizardStep: WizardStep): boolean;
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as done
     */
    isDone(wizardStep: WizardStep): boolean;
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as default
     */
    isDefault(wizardStep: WizardStep): boolean;
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as editing
     */
    isEditing(wizardStep: WizardStep): boolean;
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as optional
     */
    isOptional(wizardStep: WizardStep): boolean;
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {WizardStep} wizardStep The wizard step to be checked
     * @returns {boolean} True if the step can be marked as navigable
     */
    isNavigable(wizardStep: WizardStep): boolean;
}
