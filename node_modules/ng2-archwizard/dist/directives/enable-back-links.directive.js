import { Directive, EventEmitter, Host, Output } from '@angular/core';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `enableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-completion-step enableBackLinks (stepExit)="exit function">
 *     ...
 * </wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-completion-step stepTitle="Final step" enableBackLinks>
 *     ...
 * </wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         *
         * @type {EventEmitter<MovingDirection>}
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Initialization work
     */
    EnableBackLinksDirective.prototype.ngOnInit = function () {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    };
    EnableBackLinksDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[enableBackLinks]'
                },] },
    ];
    /** @nocollapse */
    EnableBackLinksDirective.ctorParameters = function () { return [
        { type: WizardCompletionStep, decorators: [{ type: Host },] },
    ]; };
    EnableBackLinksDirective.propDecorators = {
        'stepExit': [{ type: Output },],
    };
    return EnableBackLinksDirective;
}());
export { EnableBackLinksDirective };
//# sourceMappingURL=enable-back-links.directive.js.map