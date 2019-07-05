import { OnInit } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `optionalStep` directive can be used to define an optional `wizard-step`.
 * An optional `wizard-step` is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-step optionalStep>
 *     ...
 * </wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-step stepTitle="Second step" optionalStep>
 *     ...
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
export declare class OptionalStepDirective implements OnInit {
    private wizardStep;
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    constructor(wizardStep: WizardStep);
    /**
     * Initialization work
     */
    ngOnInit(): void;
}
