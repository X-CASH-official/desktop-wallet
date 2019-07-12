import { Directive, Host } from '@angular/core';
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
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    SelectedStepDirective.prototype.ngOnInit = function () {
        this.wizardStep.defaultSelected = true;
    };
    SelectedStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectedStep]'
                },] },
    ];
    /** @nocollapse */
    SelectedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host },] },
    ]; };
    return SelectedStepDirective;
}());
export { SelectedStepDirective };
//# sourceMappingURL=selected-step.directive.js.map