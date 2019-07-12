import { Directive, Host } from '@angular/core';
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
var OptionalStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    function OptionalStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    OptionalStepDirective.prototype.ngOnInit = function () {
        this.wizardStep.optional = true;
    };
    OptionalStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[optionalStep]'
                },] },
    ];
    /** @nocollapse */
    OptionalStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host },] },
    ]; };
    return OptionalStepDirective;
}());
export { OptionalStepDirective };
//# sourceMappingURL=optional-step.directive.js.map