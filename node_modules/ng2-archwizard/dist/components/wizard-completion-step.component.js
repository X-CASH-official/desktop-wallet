/**
 * Created by marc on 20.05.17.
 */
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
import { Component, forwardRef } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `wizard-completion-step` automatically sets the `wizard` amd all steps inside the `wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <wizard-completion-step [stepTitle]="title of the wizard step" [navigationSymbol]="navigation symbol"
 *    [navigationSymbolFontFamily]="navigation symbol font family"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <wizard-completion-step stepTitle="Step 1" navigationSymbol="1">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <wizard-completion-step stepTitle="Step 1" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    __extends(WizardCompletionStepComponent, _super);
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wizard-completion-step',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    :host {\n      height: auto;\n      width: 100%;\n    }\n  "],
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) },
                        { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardCompletionStepComponent.ctorParameters = function () { return []; };
    return WizardCompletionStepComponent;
}(WizardCompletionStep));
export { WizardCompletionStepComponent };
//# sourceMappingURL=wizard-completion-step.component.js.map