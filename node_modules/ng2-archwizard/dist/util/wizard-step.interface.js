import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
import { ContentChild, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { isBoolean } from 'util';
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 */
var WizardStep = /** @class */ (function () {
    function WizardStep() {
        /**
         * A step title property, which contains the visible header title of the step.
         * This title is then shown inside the navigation bar.
         * Compared to `stepTitle` this property can contain any html content and not only plain text
         */
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * If no navigation symbol is specified, an empty string should be used
         */
        this.navigationSymbol = '';
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    Object.defineProperty(WizardStep.prototype, "hidden", {
        /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         *
         * @returns {boolean}
         */
        get: function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    WizardStep.canTransitionStep = function (condition, direction) {
        if (isBoolean(condition)) {
            return Promise.resolve(condition);
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
        }
    };
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    WizardStep.prototype.enter = function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    WizardStep.prototype.exit = function (direction) {
        this.stepExit.emit(direction);
    };
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    WizardStep.prototype.canEnterStep = function (direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    };
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    WizardStep.prototype.canExitStep = function (direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    };
    WizardStep.propDecorators = {
        'stepTitleTemplate': [{ type: ContentChild, args: [WizardStepTitleDirective,] },],
        'stepTitle': [{ type: Input },],
        'navigationSymbol': [{ type: Input },],
        'navigationSymbolFontFamily': [{ type: Input },],
        'canEnter': [{ type: Input },],
        'canExit': [{ type: Input },],
        'stepEnter': [{ type: Output },],
        'stepExit': [{ type: Output },],
        'hidden': [{ type: HostBinding, args: ['hidden',] },],
    };
    return WizardStep;
}());
export { WizardStep };
//# sourceMappingURL=wizard-step.interface.js.map