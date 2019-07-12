/**
 * Created by marc on 09.01.17.
 */
import { EventEmitter } from '@angular/core';
import { StepOffset } from '../util/step-offset.interface';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `goToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [goToStep]="absolute step index" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [goToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step
 *
 * ```html
 * <button [goToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
export declare class GoToStepDirective {
    private wizardState;
    private wizardStep;
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
     * The destination step, to which the wizard should navigate, after the component, having this directive has been activated.
     * This destination step can be given either as a [[WizardStep]] containing the step directly,
     * a [[StepOffset]] between the current step and the `wizardStep`, in which this directive has been used,
     * or a step index as a number or string
     */
    goToStep: WizardStep | StepOffset | number | string;
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
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    constructor(wizardState: WizardState, wizardStep: WizardStep);
    /**
     * Returns the destination step of this directive as an absolute step index inside the wizard
     *
     * @returns {number} The index of the destination step
     * @throws If `goToStep` is of an unknown type an `Error` is thrown
     */
    readonly destinationStep: number;
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    onClick(): void;
}
