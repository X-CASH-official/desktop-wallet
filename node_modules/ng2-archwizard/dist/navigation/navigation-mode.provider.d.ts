import { NavigationMode } from './navigation-mode.interface';
import { WizardState } from './wizard-state.model';
/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param {WizardComponent} wizard The wizard, for which a navigation mode will be created
 * @param {WizardState} wizardState The wizard state of the wizard
 * @returns {NavigationMode} The created [[NavigationMode]]
 */
export declare function navigationModeFactory(navigationMode: string, wizardState: WizardState): NavigationMode;
