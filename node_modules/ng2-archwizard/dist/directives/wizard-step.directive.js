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
import { Directive, forwardRef } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `wizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` input:
 *
 * ```html
 * <div wizardStep [stepTitle]="step title" [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <div wizardStep [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template wizardStepTitle>
 *        step title
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` input:
 *
 * ```html
 * <div wizardStep stepTitle="Address information" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </div>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <div wizardStep navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    <ng-template wizardStepTitle>
 *        Address information
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = /** @class */ (function (_super) {
    __extends(WizardStepDirective, _super);
    function WizardStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[wizardStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepDirective; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardStepDirective.ctorParameters = function () { return []; };
    return WizardStepDirective;
}(WizardStep));
export { WizardStepDirective };
//# sourceMappingURL=wizard-step.directive.js.map