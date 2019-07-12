import { EventEmitter } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `nextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button nextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
export declare class NextStepDirective {
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
     * A convenience name for `preFinalize`
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
     * After this method is called the wizard will try to transition to the next step
     */
    onClick(): void;
}
