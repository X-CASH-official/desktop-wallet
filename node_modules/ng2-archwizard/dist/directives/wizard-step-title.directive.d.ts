/**
 * Created by marc on 01.06.17.
 */
import { TemplateRef } from '@angular/core';
/**
 * The `wizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template wizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardStepTitleDirective {
    templateRef: TemplateRef<any>;
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    constructor(templateRef: TemplateRef<any>);
}
