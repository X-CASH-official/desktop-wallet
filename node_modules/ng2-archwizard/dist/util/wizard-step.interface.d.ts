import { MovingDirection } from './moving-direction.enum';
import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
import { EventEmitter } from '@angular/core';
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 */
export declare abstract class WizardStep {
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is then shown inside the navigation bar.
     * Compared to `stepTitle` this property can contain any html content and not only plain text
     */
    stepTitleTemplate: WizardStepTitleDirective;
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is only shown inside the navigation bar, if `stepTitleTemplate` is not defined or null.
     */
    stepTitle: string;
    /**
     * A symbol property, which contains an optional symbol for the step inside the navigation bar.
     * If no navigation symbol is specified, an empty string should be used
     */
    navigationSymbol: string;
    /**
     * The font family belonging to the `navigationSymbol`.
     * If no font family is specified, null should be used
     */
    navigationSymbolFontFamily: string;
    /**
     * A boolean describing if the wizard step has been completed
     */
    completed: boolean;
    /**
     * A boolean describing if the wizard step is currently selected
     */
    selected: boolean;
    /**
     * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
     */
    defaultSelected: boolean;
    /**
     * A boolean describing if the wizard step is an optional step
     */
    optional: boolean;
    /**
     * A function or boolean deciding, if this step can be entered
     */
    canEnter: ((direction: MovingDirection) => boolean) | ((direction: MovingDirection) => Promise<boolean>) | boolean;
    /**
     * A function or boolean deciding, if this step can be exited
     */
    canExit: ((direction: MovingDirection) => boolean) | ((direction: MovingDirection) => Promise<boolean>) | boolean;
    /**
     * This [[EventEmitter]] is called when the step is entered.
     * The bound method should be used to do initialization work.
     */
    stepEnter: EventEmitter<MovingDirection>;
    /**
     * This [[EventEmitter]] is called when the step is exited.
     * The bound method can be used to do cleanup work.
     */
    stepExit: EventEmitter<MovingDirection>;
    /**
     * Returns if this wizard step should be visible to the user.
     * If the step should be visible to the user false is returned, otherwise true
     *
     * @returns {boolean}
     */
    readonly hidden: boolean;
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    private static canTransitionStep(condition, direction);
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    enter(direction: MovingDirection): void;
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    exit(direction: MovingDirection): void;
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    canEnterStep(direction: MovingDirection): Promise<boolean>;
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns {Promise<boolean>} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    canExitStep(direction: MovingDirection): Promise<boolean>;
}
