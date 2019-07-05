import { EventEmitter } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `resetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button resetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
export declare class ResetWizardDirective {
    private wizardState;
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     */
    finalize: EventEmitter<void>;
    /**
     * The navigation mode
     *
     * @returns {NavigationMode}
     */
    private readonly navigationMode;
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    constructor(wizardState: WizardState);
    /**
     * Resets the wizard
     */
    onClick(): void;
}
