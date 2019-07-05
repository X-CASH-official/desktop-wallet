import { EventEmitter } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `previousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button previousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
export declare class PreviousStepDirective {
    private wizardState;
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     *
     * @type {EventEmitter}
     */
    preFinalize: EventEmitter<void>;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     *
     * @type {EventEmitter}
     */
    postFinalize: EventEmitter<void>;
    /**
     * A convenience field for `preFinalize`
     */
    /**
     * A convenience field for `preFinalize`
     *
     * @param {EventEmitter<void>} emitter The [[EventEmitter]] to be set
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
     * @param wizardState The state of the wizard
     */
    constructor(wizardState: WizardState);
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    onClick(): void;
}
