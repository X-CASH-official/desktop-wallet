import { OnInit } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `selectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-step stepTitle="Step title" selected>
 *     ...
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
export declare class SelectedStepDirective implements OnInit {
    private wizardStep;
    /**
     * Constructor
     * @param wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep: WizardStep);
    /**
     * Initialization work
     */
    ngOnInit(): void;
}
