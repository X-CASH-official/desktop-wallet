import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
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
var PreviousStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function PreviousStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         *
         * @type {EventEmitter}
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: function () {
            return this.preFinalize;
        },
        /**
         * A convenience field for `preFinalize`
         *
         * @param {EventEmitter<void>} emitter The [[EventEmitter]] to be set
         */
        set: function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    PreviousStepDirective.prototype.onClick = function () {
        this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize);
    };
    PreviousStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[previousStep]'
                },] },
    ];
    /** @nocollapse */
    PreviousStepDirective.ctorParameters = function () { return [
        { type: WizardState, },
    ]; };
    PreviousStepDirective.propDecorators = {
        'preFinalize': [{ type: Output },],
        'postFinalize': [{ type: Output },],
        'finalize': [{ type: Output },],
        'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return PreviousStepDirective;
}());
export { PreviousStepDirective };
//# sourceMappingURL=previous-step.directive.js.map