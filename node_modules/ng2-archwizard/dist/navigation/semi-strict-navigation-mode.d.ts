import { NavigationMode } from './navigation-mode.interface';
import { WizardState } from './wizard-state.model';
import { EventEmitter } from '@angular/core';
/**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
export declare class SemiStrictNavigationMode extends NavigationMode {
    /**
     * Constructor
     *
     * @param {WizardState} wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    constructor(wizardState: WizardState);
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param {number} destinationIndex The index of the destination wizard step
     * @returns {boolean} True if the destination wizard step can be entered, false otherwise
     */
    canGoToStep(destinationIndex: number): Promise<boolean>;
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {number} destinationIndex The index of the destination wizard step, which should be entered
     * @param {EventEmitter<void>} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {EventEmitter<void>} postFinalize An event emitter, to be called after the step has been transitioned
     */
    goToStep(destinationIndex: number, preFinalize?: EventEmitter<void>, postFinalize?: EventEmitter<void>): void;
    /**
     * @inheritDoc
     */
    isNavigable(destinationIndex: number): boolean;
    /**
     * @inheritDoc
     */
    reset(): void;
}
