var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { NavigationMode } from './navigation-mode.interface';
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var FreeNavigationMode = /** @class */ (function (_super) {
    __extends(FreeNavigationMode, _super);
    /**
     * Constructor
     *
     * @param {WizardState} wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function FreeNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {number} destinationIndex The index of the destination wizard step
     * @returns {boolean} True if the destination wizard step can be entered, false otherwise
     */
    FreeNavigationMode.prototype.canGoToStep = function (destinationIndex) {
        var _this = this;
        var hasStep = this.wizardState.hasStep(destinationIndex);
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        var canExitCurrentStep = function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        var canEnterDestinationStep = function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {number} destinationIndex The index of the destination wizard step, which should be entered
     * @param {EventEmitter<void>} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {EventEmitter<void>} postFinalize An event emitter, to be called after the step has been transitioned
     */
    FreeNavigationMode.prototype.goToStep = function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        });
    };
    FreeNavigationMode.prototype.isNavigable = function (destinationIndex) {
        return true;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    FreeNavigationMode.prototype.reset = function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(function (step) {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return FreeNavigationMode;
}(NavigationMode));
export { FreeNavigationMode };
//# sourceMappingURL=free-navigation-mode.js.map