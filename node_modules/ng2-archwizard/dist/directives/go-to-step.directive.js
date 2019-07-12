/**
 * Created by marc on 09.01.17.
 */
import { Directive, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { isStepOffset } from '../util/step-offset.interface';
import { isNumber, isString } from 'util';
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
var GoToStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    function GoToStepDirective(wizardState, wizardStep) {
        this.wizardState = wizardState;
        this.wizardStep = wizardStep;
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
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
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
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
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
    Object.defineProperty(GoToStepDirective.prototype, "destinationStep", {
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @returns {number} The index of the destination step
         * @throws If `goToStep` is of an unknown type an `Error` is thrown
         */
        get: function () {
            var destinationStep;
            if (isNumber(this.goToStep)) {
                destinationStep = this.goToStep;
            }
            else if (isString(this.goToStep)) {
                destinationStep = parseInt(this.goToStep, 10);
            }
            else if (isStepOffset(this.goToStep) && this.wizardStep !== null) {
                destinationStep = this.wizardState.getIndexOfStep(this.wizardStep) + this.goToStep.stepOffset;
            }
            else if (this.goToStep instanceof WizardStep) {
                destinationStep = this.wizardState.getIndexOfStep(this.goToStep);
            }
            else {
                throw new Error("Input 'goToStep' is neither a WizardStep, StepOffset, number or string");
            }
            return destinationStep;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    GoToStepDirective.prototype.onClick = function () {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    };
    GoToStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[goToStep]'
                },] },
    ];
    /** @nocollapse */
    GoToStepDirective.ctorParameters = function () { return [
        { type: WizardState, },
        { type: WizardStep, decorators: [{ type: Optional },] },
    ]; };
    GoToStepDirective.propDecorators = {
        'preFinalize': [{ type: Output },],
        'postFinalize': [{ type: Output },],
        'finalize': [{ type: Output },],
        'goToStep': [{ type: Input },],
        'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return GoToStepDirective;
}());
export { GoToStepDirective };
//# sourceMappingURL=go-to-step.directive.js.map