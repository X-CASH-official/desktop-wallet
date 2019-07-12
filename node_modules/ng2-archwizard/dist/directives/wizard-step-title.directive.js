/**
 * Created by marc on 01.06.17.
 */
import { Directive, TemplateRef } from '@angular/core';
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
var WizardStepTitleDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[stepTitle], ng-template[wizardStepTitle]'
                },] },
    ];
    /** @nocollapse */
    WizardStepTitleDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return WizardStepTitleDirective;
}());
export { WizardStepTitleDirective };
//# sourceMappingURL=wizard-step-title.directive.js.map