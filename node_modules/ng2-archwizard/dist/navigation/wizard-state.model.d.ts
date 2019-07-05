import { QueryList } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { MovingDirection } from '../util/moving-direction.enum';
import { NavigationMode } from './navigation-mode.interface';
/**
 * The internal model/state of a wizard.
 * This model contains:
 * - an array with all steps the wizard contains
 * - the index of the step the wizard currently resides inside
 * - information about the completeness of the wizard
 * - some additional helper methods
 *
 * @author Marc Arndt
 */
export declare class WizardState {
    /**
     * The internal [[QueryList]] with all [[WizardStep]] objects belonging to the wizard model
     */
    private _wizardSteps;
    /**
     * The initial step index, as taken from the [[WizardComponent]]
     */
    private _defaultStepIndex;
    /**
     * An array representation of all wizard steps belonging to this model
     */
    readonly wizardSteps: Array<WizardStep>;
    /**
     * The initial step index.
     * This value can be either:
     * - the index of a wizard step with a `selected` directive, or
     * - the default step index, set in the [[WizardComponent]]
     */
    /**
     * Sets the initial default step.
     * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
     *
     * @param defaultStepIndex The new default wizard step index
     */
    defaultStepIndex: number;
    /**
     * The index of the currently visible and selected step inside the wizardSteps QueryList.
     * If this wizard contains no steps, currentStepIndex is -1
     */
    currentStepIndex: number;
    /**
     * The navigation mode used to navigate inside the wizard
     */
    navigationMode: NavigationMode;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     */
    disableNavigationBar: boolean;
    /**
     * The WizardStep object belonging to the currently visible and selected step.
     * The currentStep is always the currently selected wizard step.
     * The currentStep can be either completed, if it was visited earlier,
     * or not completed, if it is visited for the first time or its state is currently out of date.
     *
     * If this wizard contains no steps, currentStep is null
     */
    readonly currentStep: WizardStep;
    /**
     * The completeness of the wizard.
     * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
     */
    readonly completed: boolean;
    /**
     * Constructor
     */
    constructor();
    /**
     * Initializes the wizard state with the given array of wizard steps.
     * This process contains a reset of the wizard
     *
     * @param {QueryList<WizardStep>} wizardSteps The wizard steps
     * @param {string} navigationMode The name of the navigation mode to be set
     * @param {string} defaultStepIndex The default step index, to be used during the initialisation
     * @param {boolean} disableNavigationBar True, if the navigation bar should be disabled, i.e. not be used for navigating
     */
    initialize(wizardSteps: QueryList<WizardStep>, navigationMode: string, defaultStepIndex: number, disableNavigationBar: boolean): void;
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns {boolean} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    hasStep(stepIndex: number): boolean;
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns {boolean} True if this wizard has a previous step before the current step
     */
    hasPreviousStep(): boolean;
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns {boolean} True if this wizard has a next step after the current step
     */
    hasNextStep(): boolean;
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns {boolean} True if the wizard is currently inside its last step
     */
    isLastStep(): boolean;
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns {undefined|WizardStep} The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    getStepAtIndex(stepIndex: number): WizardStep;
    /**
     * Find the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns {number} The found index of `step` or `-1` if the step is not included in the wizard
     */
    getIndexOfStep(step: WizardStep): number;
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns {MovingDirection} The calculated [[MovingDirection]]
     */
    getMovingDirection(destinationStep: number): MovingDirection;
}
