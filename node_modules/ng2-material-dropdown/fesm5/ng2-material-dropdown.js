import { Component, Output, Input, EventEmitter, ElementRef, Injectable, Renderer, ContentChildren, HostListener, ContentChild, NgModule } from '@angular/core';
import { trigger, style, transition, animate, keyframes, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new EventEmitter();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-dropdown-button',
                    styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                    template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    Ng2DropdownButton.propDecorators = {
        "onMenuToggled": [{ type: Output },],
        "showCaret": [{ type: Input },],
    };
    return Ng2DropdownButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var /** @type {?} */ ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var _a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new EventEmitter();
        this.onItemClicked = new EventEmitter();
        this.onItemDestroyed = new EventEmitter();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    Ng2DropdownState.prototype.select = /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            toString: /**
             * @return {?}
             */
            function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService.decorators = [
        { type: Injectable },
    ];
    return DropdownStateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    /**
     * @return {?}
     */
    Ng2MenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    Ng2MenuItem.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-menu-item',
                    styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                    template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    Ng2MenuItem.propDecorators = {
        "preventClose": [{ type: Input },],
        "value": [{ type: Input },],
    };
    return Ng2MenuItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownMenu = /** @class */ (function () {
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    function (position, dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.state.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    function (position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = /**
     * \@name getMenuElement
     * @return {?}
     */
    function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updateOnChange = /**
     * @param {?=} dynamic
     * @return {?}
     */
    function (dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top.toString());
            this.renderer.setElementStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
            this.state.dropdownState.select(this.items.first, false);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    Ng2DropdownMenu.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-dropdown-menu',
                    styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
                    template: "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [style.z-index]=\"zIndex\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n",
                    animations: [
                        trigger('fade', [
                            state('visible', style({ display: 'block', opacity: 1, height: '*', width: '*' })),
                            state('hidden', style({ display: 'none', opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                            transition('hidden => visible', [
                                animate('250ms ease-in', style({ opacity: 1, height: '*', width: '*' }))
                            ]),
                            transition('visible => hidden', [
                                animate('350ms ease-out', style({ opacity: 0, width: 0, height: 0 }))
                            ])
                        ]),
                        trigger('opacity', [
                            transition('hidden => visible', [
                                animate('450ms ease-in', keyframes([
                                    style({ opacity: 0, offset: 0 }),
                                    style({ opacity: 1, offset: 1 }),
                                ]))
                            ]),
                            transition('visible => hidden', [
                                animate('250ms ease-out', keyframes([
                                    style({ opacity: 1, offset: 0 }),
                                    style({ opacity: 0.5, offset: 0.3 }),
                                    style({ opacity: 0, offset: 1 }),
                                ]))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownMenu.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    Ng2DropdownMenu.propDecorators = {
        "width": [{ type: Input },],
        "focusFirstElement": [{ type: Input },],
        "offset": [{ type: Input },],
        "appendToBody": [{ type: Input },],
        "zIndex": [{ type: Input },],
        "items": [{ type: ContentChildren, args: [Ng2MenuItem,] },],
    };
    return Ng2DropdownMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2Dropdown = /** @class */ (function () {
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new EventEmitter();
        this.onItemSelected = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
    }
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var /** @type {?} */ newSelectedItem;
            var /** @type {?} */ items = _this.menu.items.toArray();
            if (item !== _this.state.dropdownState.selectedItem) {
                return;
            }
            if (_this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }
            _this.state.dropdownState.select(newSelectedItem);
        });
    };
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = /**
     * \@name scrollListener
     * @return {?}
     */
    function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    };
    Ng2Dropdown.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-dropdown',
                    template: "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n",
                    providers: [DropdownStateService]
                },] },
    ];
    /** @nocollapse */
    Ng2Dropdown.ctorParameters = function () { return [
        { type: DropdownStateService, },
    ]; };
    Ng2Dropdown.propDecorators = {
        "button": [{ type: ContentChild, args: [Ng2DropdownButton,] },],
        "menu": [{ type: ContentChild, args: [Ng2DropdownMenu,] },],
        "dynamicUpdate": [{ type: Input },],
        "onItemClicked": [{ type: Output },],
        "onItemSelected": [{ type: Output },],
        "onShow": [{ type: Output },],
        "onHide": [{ type: Output },],
        "scrollListener": [{ type: HostListener, args: ['window:scroll',] },],
    };
    return Ng2Dropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownModule = /** @class */ (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                        Ng2Dropdown
                    ],
                    declarations: [
                        Ng2Dropdown,
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                    ],
                    imports: [
                        CommonModule
                    ]
                },] },
    ];
    return Ng2DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1hdGVyaWFsLWRyb3Bkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS9hY3Rpb25zLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZS50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL25nMi1kcm9wZG93bi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL25nMi1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT3V0cHV0LFxuICAgIElucHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1idXR0b24nLFxuICAgIHN0eWxlczogW2AubmcyLWRyb3Bkb3duLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzouNDVyZW0gLjI1cmVtO2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wOHJlbTtjb2xvcjojNDQ0O291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo0MDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VmZWZlZjt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjEwMHB4O3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXgtd2lkdGg6MTUwcHh9Lm5nMi1kcm9wZG93bi1idXR0b246aG92ZXJ7Y29sb3I6IzIyMn0ubmcyLWRyb3Bkb3duLWJ1dHRvbjphY3RpdmUsLm5nMi1kcm9wZG93bi1idXR0b246Zm9jdXN7Y29sb3I6IzIyMjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjE5NmYzfS5uZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbHtmbGV4OjEgMSA5NSV9Lm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0e3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDYlfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9ue2JvcmRlcjpub25lO21pbi13aWR0aDo0MHB4O3dpZHRoOjQwcHg7Ym9yZGVyLXJhZGl1czoxMDAlO3RyYW5zaXRpb246YWxsIC4yczt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDtwYWRkaW5nOi41ZW19Omhvc3QtY29udGV4dCgubmcyLWRyb3Bkb3duLWJ1dHRvbi0taWNvbikgLm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMil9YF0sXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPSduZzItZHJvcGRvd24tYnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiIHRhYmluZGV4PVwiMHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0XCIgKm5nSWY9XCJzaG93Q2FyZXRcIj5cbiAgICAgICAgPHN2ZyBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMzIgMzJcIiBoZWlnaHQ9XCIxNnB4XCIgaWQ9XCLDkMKhw5DCu8OQwr7DkMK5XzFcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMTZweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNMjQuMjg1LDExLjI4NEwxNiwxOS41NzFsLTguMjg1LTguMjg4Yy0wLjM5NS0wLjM5NS0xLjAzNC0wLjM5NS0xLjQyOSwwICBjLTAuMzk0LDAuMzk1LTAuMzk0LDEuMDM1LDAsMS40M2w4Ljk5OSw5LjAwMmwwLDBsMCwwYzAuMzk0LDAuMzk1LDEuMDM0LDAuMzk1LDEuNDI4LDBsOC45OTktOS4wMDIgIGMwLjM5NC0wLjM5NSwwLjM5NC0xLjAzNiwwLTEuNDMxQzI1LjMxOSwxMC44ODksMjQuNjc5LDEwLjg4OSwyNC4yODUsMTEuMjg0elwiIGZpbGw9XCIjMTIxMzEzXCIgaWQ9XCJFeHBhbmRfTW9yZVwiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25CdXR0b24ge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25NZW51VG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2FyZXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIGVtaXRzIGV2ZW50IHRvIHRvZ2dsZSBtZW51XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25NZW51VG9nZ2xlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldFBvc2l0aW9uXG4gICAgICogQGRlc2MgcmV0dXJucyBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25NZW51IH0gZnJvbSAnLi9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBOZzJEcm9wZG93blN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuY29uc3QgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDksXG4gICAgUFJFVjogMzgsXG4gICAgTkVYVDogNDAsXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjdcbn07XG5cbi8qKlxuICogQG5hbWUgb25Td2l0Y2hOZXh0XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uU3dpdGNoTmV4dCA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG9uU3dpdGNoUHJldlxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvblN3aXRjaFByZXYgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggLSAxXSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAbmFtZSBvbkJhY2tzcGFjZVxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvbkJhY2tzcGFjZSA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbMF0sIHRydWUpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9uRXNjYXBlKHRoaXM6IE5nMkRyb3Bkb3duTWVudSkge1xuICAgIHRoaXMuaGlkZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBvbkl0ZW1DbGlja2VkXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uSXRlbUNsaWNrZWQgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkSXRlbSA/IHN0YXRlLnNlbGVjdGVkSXRlbS5jbGljaygpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgW0tFWVMuQkFDS1NQQUNFXTogb25CYWNrc3BhY2UsXG4gICAgW0tFWVMuUFJFVl06IG9uU3dpdGNoUHJldixcbiAgICBbS0VZUy5ORVhUXTogb25Td2l0Y2hOZXh0LFxuICAgIFtLRVlTLkVOVEVSXTogb25JdGVtQ2xpY2tlZCxcbiAgICBbS0VZUy5FU0NBUEVdOiBvbkVzY2FwZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93S2V5c0hhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWzM4LCA0MF0uaW5kZXhPZihldmVudC5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duU3RhdGUge1xuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1EZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBOZzJNZW51SXRlbTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkSXRlbVxuICAgICAqIEBkZXNjIGdldHRlciBmb3IgX3NlbGVjdGVkSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IE5nMk1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RzIGEgbWVudSBpdGVtIGFuZCBlbWl0cyBldmVudFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBOZzJNZW51SXRlbSB8IHVuZGVmaW5lZCwgZGlzcGF0Y2hFdmVudCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgICBpZiAoIWRpc3BhdGNoRXZlbnQgfHwgIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdW5zZWxlY3RcbiAgICAgKiBAZGVzYyBzZXRzIF9zZWxlY3RlZEl0ZW0gYXMgdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHVuc2VsZWN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbWVudVN0YXRlID0ge1xuICAgICAgICBpc1Zpc2libGU6IDxib29sZWFuPmZhbHNlLFxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID09PSB0cnVlID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRyb3Bkb3duU3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUgPSBuZXcgTmcyRHJvcGRvd25TdGF0ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLW1lbnUtaXRlbScsXG4gICAgc3R5bGVzOiBbYC5uZzItbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi45ZW07dGV4dC10cmFuc2Zvcm06bm9uZTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW07aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOi4zZW0gMS4yNXJlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yNXN9Lm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVke2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuMik7b3V0bGluZTowfS5uZzItbWVudS1pdGVtOmZvY3Vze291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDE1OCwxNTgsMTU4LC40KX06aG9zdChuZzItbWVudS1pdGVtKSAvZGVlcC8gW25nMi1tZW51LWl0ZW0taWNvbl17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToyOHB4O3dpZHRoOjEuNWVtO2hlaWdodDozMHB4O2NvbG9yOnJnYmEoMCwwLDAsLjQ0KX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25nMi1tZW51LWl0ZW0nXG4gICAgIHJvbGU9XCJidXR0b25cIlxuICAgICB0YWJpbmRleD1cIjBcIlxuICAgICBbY2xhc3MubmcyLW1lbnUtaXRlbS0tc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgIChrZXlkb3duLmVudGVyKT1cImNsaWNrKClcIlxuICAgICAoY2xpY2spPVwiY2xpY2soKVwiXG4gICAgIChtb3VzZW92ZXIpPVwic2VsZWN0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMk1lbnVJdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBAcHJldmVudENsb3NlXG4gICAgICogQGRlc2MgaWYgdHJ1ZSwgY2xpY2tpbmcgb24gdGhlIGl0ZW0gd29uJ3QgY2xvc2UgdGhlIGRyb3Bkb3duXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKiBAZGVzYyBhbnkgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNTZWxlY3RlZFxuICAgICAqIEBkZXNjIHJldHVybnMgY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjbGlja1xuICAgICAqIEBkZXNjIGVtaXRzIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBjbGljayBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnZm9jdXMnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFJlbmRlcmVyLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGFuaW1hdGUsXG4gICAga2V5ZnJhbWVzLFxuICAgIHN0YXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBBQ1RJT05TLCBhcnJvd0tleXNIYW5kbGVyIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1tZW51JyxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubmcyLWRyb3Bkb3duLW1lbnV7b3ZlcmZsb3cteTphdXRvO2JveC1zaGFkb3c6MCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMyk7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzouNWVtIDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MXB4O21heC1oZWlnaHQ6NDAwcHg7d2lkdGg6MjYwcHg7bWluLWhlaWdodDowO2Rpc3BsYXk6YmxvY2t9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS1pbnNpZGUtZWxlbWVudHtwb3NpdGlvbjpmaXhlZH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS0ye3dpZHRoOjIwMHB4fS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTR7d2lkdGg6MjYwcHh9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tNnt3aWR0aDozMjBweH0ubmcyLWRyb3Bkb3duLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5uZzItbWVudS1kaXZpZGVye2hlaWdodDoxcHg7bWluLWhlaWdodDoxcHg7bWF4LWhlaWdodDoxcHg7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2Y5ZjlmOX1gXSxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gTUVOVSAtLT5cbjxkaXYgY2xhc3M9J25nMi1kcm9wZG93bi1tZW51IG5nMi1kcm9wZG93bi1tZW51LS0td2lkdGgtLXt7IHdpZHRoIH19J1xuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLWluc2lkZS1lbGVtZW50XT1cIiFhcHBlbmRUb0JvZHlcIlxuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLW9wZW5dPVwic3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZVwiXG4gICAgIFtzdHlsZS56LWluZGV4XT1cInpJbmRleFwiXG4gICAgIFtAZmFkZV09XCJzdGF0ZS5tZW51U3RhdGUudG9TdHJpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLW1lbnVfX29wdGlvbnMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICBbQG9wYWNpdHldPVwic3RhdGUubWVudVN0YXRlLnRvU3RyaW5nKClcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBCQUNLRFJPUCAtLT5cbjxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tYmFja2Ryb3BcIiAqbmdJZj1cInN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGVcIiAoY2xpY2spPVwiaGlkZSgpXCI+PC9kaXY+XG5gLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBoZWlnaHQ6IDAsIHdpZHRoOiAwfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzM1MG1zIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdvcGFjaXR5JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDUwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNSwgb2Zmc2V0OiAwLjN9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duTWVudSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2lkdGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkcm9wZG93biB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZFxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXRzIGRyb3Bkb3duIG9mZnNldCBmcm9tIHRoZSBidXR0b25cbiAgICAgKiBAbmFtZSBvZmZzZXQge3N0cmluZ30gZm9sbG93IGZvcm1hdCAnPG51bWJlcj4gPG51bWJlcj4nIGV4LiAnMCAyMCdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKE5nMk1lbnVJdGVtKSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOZzJNZW51SXRlbT47XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uOiBDbGllbnRSZWN0O1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIGFycm93SGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICBoYW5kbGVLZXlwcmVzczogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBzaG93cyBtZW51IGFuZCBzZWxlY3RzIGZpcnN0IGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyhwb3NpdGlvbj86IENsaWVudFJlY3QsIGR5bmFtaWMgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB3ZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBzZXR0aW5nIGhhbmRsZXJzXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcyA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRjLmJvZHksICdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlwcmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdkLCAna2V5ZG93bicsIGFycm93S2V5c0hhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCBkeW5hbWljKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKiBAZGVzYyBoaWRlcyBtZW51XG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGVkIGl0ZW0gc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnVuc2VsZWN0KCk7XG5cbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1bmxpc3RlblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIgPyB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MgPyB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcygpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZVBvc2l0aW9uXG4gICAgICogQGRlc2MgdXBkYXRlcyB0aGUgbWVudSBwb3NpdGlvbiBldmVyeSB0aW1lIGl0IGlzIHRvZ2dsZWRcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24ge0NsaWVudFJlY3R9XG4gICAgICogQHBhcmFtIGR5bmFtaWMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBDbGllbnRSZWN0LCBkeW5hbWljOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVPbkNoYW5nZShkeW5hbWljKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlwcmVzc1xuICAgICAqIEBkZXNjIGV4ZWN1dGVzIGZ1bmN0aW9ucyBvbiBrZXlQcmVzcyBiYXNlZCBvbiB0aGUga2V5IHByZXNzZWRcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUtleXByZXNzKCRldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICghQUNUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBQ1RJT05TW2tleV0uY2FsbCh0aGlzLCBpbmRleCwgaXRlbXMsIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0TWVudUVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1lbnVFbGVtZW50KCk6IEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FsY1Bvc2l0aW9uT2Zmc2V0XG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjUG9zaXRpb25PZmZzZXQocG9zaXRpb24pOiB7IHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHdkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghd2QgfHwgIWRjIHx8ICFwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3ZC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpc0NTUzFDb21wYXQgPSAoKGRjLmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuXG4gICAgICAgIGNvbnN0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZGMuYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkYy5ib2R5LnNjcm9sbFRvcDtcblxuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuYXBwbHlPZmZzZXQoXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi50b3AgKyAodGhpcy5hcHBlbmRUb0JvZHkgPyB5IC0gMTUgOiAwKX1weGAsXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi5sZWZ0ICsgeCAtIDV9cHhgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50V2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tQm90dG9tID0gcGFyc2VJbnQodG9wKSArIGNsaWVudEhlaWdodCArICh0aGlzLmFwcGVuZFRvQm9keSA/IDAgOiB5IC0gMTUpO1xuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tUmlnaHQgPSBwYXJzZUludChsZWZ0KSArIGNsaWVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbEhlaWdodCA9IHdkLmlubmVySGVpZ2h0ICsgd2Quc2Nyb2xsWTtcbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsV2lkdGggPSB3ZC5pbm5lcldpZHRoICsgd2Quc2Nyb2xsWDtcblxuICAgICAgICBpZiAobWFyZ2luRnJvbUJvdHRvbSA+PSB3aW5kb3dTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgLSBjbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmdpbkZyb21SaWdodCA+PSB3aW5kb3dTY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBtYXJnaW5Gcm9tUmlnaHQgLSB3aW5kb3dTY3JvbGxXaWR0aCArIDMwO1xuICAgICAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpIC0gbWFyZ2luUmlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseU9mZnNldCh0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nKTogeyB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nIH0ge1xuICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKCFvZmZzZXRbMV0pIHtcbiAgICAgICAgICAgIG9mZnNldFsxXSA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUludChvZmZzZXRbMF0pfXB4YDtcbiAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VJbnQob2Zmc2V0WzFdKX1weGA7XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgbWVudSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgICAgICBkYy5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShkeW5hbWljID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRNZW51RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY1Bvc2l0aW9uT2Zmc2V0KHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudCwgJ3RvcCcsIHBvc2l0aW9uLnRvcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQsICdsZWZ0JywgcG9zaXRpb24ubGVmdC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbGVjdCBmaXJzdCBpdGVtIHVubGVzcyB1c2VyIGRpc2FibGVkIHRoaXMgb3B0aW9uXG4gICAgICAgIGlmICh0aGlzLmZvY3VzRmlyc3RFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZpcnN0ICYmXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLml0ZW1zLmZpcnN0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSG9zdExpc3RlbmVyLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd25CdXR0b24gfSBmcm9tICcuLi9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZzItZHJvcGRvd24tYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5nMi1kcm9wZG93bi1tZW51XCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHByb3ZpZGVyczogWyBEcm9wZG93blN0YXRlU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duIHtcbiAgICAvLyBnZXQgY2hpbGRyZW4gY29tcG9uZW50c1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25CdXR0b24pIHB1YmxpYyBidXR0b246IE5nMkRyb3Bkb3duQnV0dG9uO1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25NZW51KSBwdWJsaWMgbWVudTogTmcyRHJvcGRvd25NZW51O1xuXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNVcGRhdGUgPSB0cnVlO1xuXG4gICAgLy8gb3V0cHV0c1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TaG93OiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBEcm9wZG93blN0YXRlU2VydmljZSkge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkLmVtaXQoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZlbnRDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oaWRlLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ub25NZW51VG9nZ2xlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtU2VsZWN0ZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZEl0ZW06IE5nMk1lbnVJdGVtIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLm1lbnUuaXRlbXMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWVudS5mb2N1c0ZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkSXRlbSA9IGl0ZW0gPT09IGl0ZW1zWzBdICYmIGl0ZW1zLmxlbmd0aCA+IDEgPyBpdGVtc1sxXSA6IGl0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRvZ2dsZU1lbnVcbiAgICAgKiBAZGVzYyB0b2dnbGVzIG1lbnUgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVNZW51KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLSBoaWRlcyBkcm9wZG93blxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3dzIGRyb3Bkb3duXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhwb3NpdGlvbiwgdGhpcy5keW5hbWljVXBkYXRlKTtcbiAgICAgICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzY3JvbGxMaXN0ZW5lclxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIHB1YmxpYyBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uICYmIHRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51LnVwZGF0ZVBvc2l0aW9uKHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmcyRHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vbmcyLWRyb3Bkb3duJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IE5nMkRyb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9uZzItZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZzJNZW51SXRlbSxcbiAgICAgICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgICAgIE5nMkRyb3Bkb3duTWVudSxcbiAgICAgICAgTmcyRHJvcGRvd25cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZzJEcm9wZG93bixcbiAgICAgICAgTmcyTWVudUl0ZW0sXG4gICAgICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgICAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25Nb2R1bGUge31cblxuZXhwb3J0IHtcbiAgICBOZzJEcm9wZG93bixcbiAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgTmcyTWVudUl0ZW0sXG4gICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgRHJvcGRvd25TdGF0ZVNlcnZpY2Vcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQTBCSSwyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQ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