import { WizardStep } from './wizard-step.interface';
import { MovingDirection } from './moving-direction.enum';
import { EventEmitter } from '@angular/core';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
export declare abstract class WizardCompletionStep extends WizardStep {
    /**
     * @inheritDoc
     */
    stepExit: EventEmitter<MovingDirection>;
    /**
     * @inheritDoc
     */
    canExit: ((direction: MovingDirection) => boolean) | boolean;
    /**
     * @inheritDoc
     */
    enter(direction: MovingDirection): void;
    /**
     * @inheritDoc
     */
    exit(direction: MovingDirection): void;
}
