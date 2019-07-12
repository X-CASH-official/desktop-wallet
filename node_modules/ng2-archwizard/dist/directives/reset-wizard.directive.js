import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `resetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button resetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    function ResetWizardDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new EventEmitter();
    }
    Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
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
     * Resets the wizard
     */
    ResetWizardDirective.prototype.onClick = function () {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    };
    ResetWizardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[resetWizard]'
                },] },
    ];
    /** @nocollapse */
    ResetWizardDirective.ctorParameters = function () { return [
        { type: WizardState, },
    ]; };
    ResetWizardDirective.propDecorators = {
        'finalize': [{ type: Output },],
        'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return ResetWizardDirective;
}());
export { ResetWizardDirective };
//# sourceMappingURL=reset-wizard.directive.js.map