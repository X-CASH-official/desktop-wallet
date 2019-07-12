import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
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
var NextStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function NextStepDirective(wizardState) {
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
    Object.defineProperty(NextStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
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
    Object.defineProperty(NextStepDirective.prototype, "navigationMode", {
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
     * After this method is called the wizard will try to transition to the next step
     */
    NextStepDirective.prototype.onClick = function () {
        this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize);
    };
    NextStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nextStep]'
                },] },
    ];
    /** @nocollapse */
    NextStepDirective.ctorParameters = function () { return [
        { type: WizardState, },
    ]; };
    NextStepDirective.propDecorators = {
        'preFinalize': [{ type: Output },],
        'postFinalize': [{ type: Output },],
        'finalize': [{ type: Output },],
        'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return NextStepDirective;
}());
export { NextStepDirective };
//# sourceMappingURL=next-step.directive.js.map