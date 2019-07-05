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
import { WizardStep } from './wizard-step.interface';
import { EventEmitter } from '@angular/core';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
var WizardCompletionStep = /** @class */ (function (_super) {
    __extends(WizardCompletionStep, _super);
    function WizardCompletionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    /**
     * @inheritDoc
     */
    WizardCompletionStep.prototype.enter = function (direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    WizardCompletionStep.prototype.exit = function (direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    };
    return WizardCompletionStep;
}(WizardStep));
export { WizardCompletionStep };
//# sourceMappingURL=wizard-completion-step.interface.js.map