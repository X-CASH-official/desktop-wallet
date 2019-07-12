import { Component, ContentChildren, HostBinding, Input } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
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
var WizardComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param {WizardState} model The model for this wizard component
     */
    function WizardComponent(model) {
        this.model = model;
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         *
         * @type {string}
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         *
         * @type {string}
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         *
         * @type {string}
         */
        this.navBarDirection = 'left-to-right';
        /**
         * The navigation mode used for transitioning between different steps.
         * The navigation mode can be either `strict`, `semi-strict` or `free`
         *
         * @type {string}
         */
        this.navigationMode = 'strict';
        /**
         * The initially selected step, represented by its index
         *
         * @type {number}
         */
        this.defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         *
         * @type {boolean}
         */
        this.disableNavigationBar = false;
    }
    Object.defineProperty(WizardComponent.prototype, "horizontalOrientation", {
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @returns {boolean} True if this wizard uses a horizontal orientation
         */
        get: function () {
            return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "verticalOrientation", {
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @returns {boolean} True if this wizard uses a vertical orientation
         */
        get: function () {
            return this.navBarLocation === 'left' || this.navBarLocation === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "navigation", {
        /**
         * The navigation mode for this wizard
         *
         * @returns {NavigationMode}
         */
        get: function () {
            return this.model.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialization work
     */
    WizardComponent.prototype.ngAfterContentInit = function () {
        this.model.initialize(this.wizardSteps, this.navigationMode, this.defaultStepIndex, this.disableNavigationBar);
    };
    WizardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wizard',
                    template: "\n    <wizard-navigation-bar\n      [direction]=\"navBarDirection\"\n      *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n      [ngClass]=\"{\n        vertical: navBarLocation == 'left',\n        horizontal: navBarLocation == 'top',\n        small: navBarLayout == 'small',\n        'large-filled': navBarLayout == 'large-filled',\n        'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n        'large-empty': navBarLayout == 'large-empty',\n        'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n      }\">\n    </wizard-navigation-bar>\n\n    <div [ngClass]=\"{\n      'wizard-steps': true,\n      vertical: navBarLocation == 'left' || navBarLocation == 'right',\n      horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n    }\">\n      <ng-content></ng-content>\n    </div>\n\n    <wizard-navigation-bar\n      [direction]=\"navBarDirection\"\n      *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n      [ngClass]=\"{\n        vertical: navBarLocation == 'right',\n        horizontal: navBarLocation == 'bottom',\n        small: navBarLayout == 'small',\n        'large-filled': navBarLayout == 'large-filled',\n        'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n        'large-empty': navBarLayout == 'large-empty',\n        'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n      }\">\n    </wizard-navigation-bar>\n  ",
                    styles: ["\n    :host {\n      display: flex;\n      justify-content: flex-start;\n    }\n    :host.vertical {\n      flex-direction: row;\n    }\n    :host.horizontal {\n      flex-direction: column;\n    }\n    :host .wizard-steps {\n      top: 0;\n      display: flex;\n    }\n    :host .wizard-steps.vertical {\n      min-width: calc(100% - 280px);\n      width: 80%;\n      height: 100%;\n      flex-direction: column;\n    }\n    :host .wizard-steps.horizontal {\n      width: 100%;\n      flex-direction: row;\n    }\n  "],
                    providers: [WizardState]
                },] },
    ];
    /** @nocollapse */
    WizardComponent.ctorParameters = function () { return [
        { type: WizardState, },
    ]; };
    WizardComponent.propDecorators = {
        'wizardSteps': [{ type: ContentChildren, args: [WizardStep,] },],
        'navBarLocation': [{ type: Input },],
        'navBarLayout': [{ type: Input },],
        'navBarDirection': [{ type: Input },],
        'navigationMode': [{ type: Input },],
        'defaultStepIndex': [{ type: Input },],
        'disableNavigationBar': [{ type: Input },],
        'horizontalOrientation': [{ type: HostBinding, args: ['class.horizontal',] },],
        'verticalOrientation': [{ type: HostBinding, args: ['class.vertical',] },],
    };
    return WizardComponent;
}());
export { WizardComponent };
//# sourceMappingURL=wizard.component.js.map