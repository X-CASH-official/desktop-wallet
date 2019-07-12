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
/**
 * The `wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` input:
 *
 * ```html
 * <wizard-step [stepTitle]="step title" [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </wizard-step>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <wizard-step [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template wizardStepTitle>
 *        step title
 *    </ng-template>
 *    ...
 * </wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` input:
 *
 * ```html
 * <wizard-step stepTitle="Address information" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </wizard-step>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <wizard-step navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    <ng-template wizardStepTitle>
 *        Address information
 *    </ng-template>
 * </wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepComponent = /** @class */ (function (_super) {
    __extends(WizardStepComponent, _super);
    function WizardStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wizard-step',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    :host {\n      height: auto;\n      width: 100%;\n    }\n  "],
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardStepComponent.ctorParameters = function () { return []; };
    return WizardStepComponent;
}(WizardStep));
export { WizardStepComponent };
//# sourceMappingURL=wizard-step.component.js.map