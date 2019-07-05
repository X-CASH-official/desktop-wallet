import { AfterContentInit, QueryList } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
import { NavigationMode } from '../navigation/navigation-mode.interface';
/**
 * The `wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <wizard navBarLocation="top" navBarLayout="small">
 *     <wizard-step>...</wizard-step>
 *     <wizard-step>...</wizard-step>
 * </wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <wizard navBarLocation="top" navBarLayout="small">
 *     <wizard-step>...</wizard-step>
 *     <wizard-step>...</wizard-step>
 *     <wizard-completion-step>...</wizard-completion-step>
 * </wizard>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardComponent implements AfterContentInit {
    model: WizardState;
    /**
     * A QueryList containing all [[WizardStep]]s inside this wizard
     */
    wizardSteps: QueryList<WizardStep>;
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     *
     * @type {string}
     */
    navBarLocation: string;
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     *
     * @type {string}
     */
    navBarLayout: string;
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     *
     * @type {string}
     */
    navBarDirection: string;
    /**
     * The navigation mode used for transitioning between different steps.
     * The navigation mode can be either `strict`, `semi-strict` or `free`
     *
     * @type {string}
     */
    navigationMode: string;
    /**
     * The initially selected step, represented by its index
     *
     * @type {number}
     */
    defaultStepIndex: number;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     *
     * @type {boolean}
     */
    disableNavigationBar: boolean;
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @returns {boolean} True if this wizard uses a horizontal orientation
     */
    readonly horizontalOrientation: boolean;
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @returns {boolean} True if this wizard uses a vertical orientation
     */
    readonly verticalOrientation: boolean;
    /**
     * The navigation mode for this wizard
     *
     * @returns {NavigationMode}
     */
    readonly navigation: NavigationMode;
    /**
     * Constructor
     * @param {WizardState} model The model for this wizard component
     */
    constructor(model: WizardState);
    /**
     * Initialization work
     */
    ngAfterContentInit(): void;
}
