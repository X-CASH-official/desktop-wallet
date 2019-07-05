(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-material-dropdown', ['exports', '@angular/core', '@angular/animations', '@angular/common'], factory) :
    (factory((global['ng2-material-dropdown'] = {}),global.ng.core,global.ng.animations,global.ng.common));
}(this, (function (exports,core,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng2DropdownButton = (function () {
        function Ng2DropdownButton(element) {
            this.element = element;
            this.onMenuToggled = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ng2-dropdown-button',
                        styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                        template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                    },] },
        ];
        /** @nocollapse */
        Ng2DropdownButton.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        Ng2DropdownButton.propDecorators = {
            "onMenuToggled": [{ type: core.Output },],
            "showCaret": [{ type: core.Input },],
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
    var /** @type {?} */ onSwitchNext = function (index, items, state) {
        if (index < items.length - 1) {
            state.select(items[index + 1], true);
        }
    };
    /**
     * \@name onSwitchPrev
     * @param index
     * @param items
     * @param state
     */
    var /** @type {?} */ onSwitchPrev = function (index, items, state) {
        if (index > 0) {
            state.select(items[index - 1], true);
        }
    };
    /**
     * \@name onBackspace
     * @param index
     * @param items
     * @param state
     */
    var /** @type {?} */ onBackspace = function (index, items, state) {
        if (index < items.length - 1) {
            state.select(items[index + 1], true);
        }
        else {
            state.select(items[0], true);
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
    var /** @type {?} */ onItemClicked = function (index, items, state) {
        return state.selectedItem ? state.selectedItem.click() : undefined;
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
    var Ng2DropdownState = (function () {
        function Ng2DropdownState() {
            this.onItemSelected = new core.EventEmitter();
            this.onItemClicked = new core.EventEmitter();
            this.onItemDestroyed = new core.EventEmitter();
        }
        Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
            get: /**
             * \@name selectedItem
             * @desc getter for _selectedItem
             * @return {?}
             */ function () {
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
                if (dispatchEvent === void 0) {
                    dispatchEvent = true;
                }
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
    var DropdownStateService = (function () {
        function DropdownStateService() {
            this.menuState = {
                isVisible: /** @type {?} */ (false),
                toString: /**
                 * @return {?}
                 */ function () {
                    return this.isVisible === true ? 'visible' : 'hidden';
                }
            };
            this.dropdownState = new Ng2DropdownState();
        }
        DropdownStateService.decorators = [
            { type: core.Injectable },
        ];
        return DropdownStateService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng2MenuItem = (function () {
        function Ng2MenuItem(state, element, renderer) {
            this.state = state;
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ng2-menu-item',
                        styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                        template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        Ng2MenuItem.ctorParameters = function () {
            return [
                { type: DropdownStateService, },
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        Ng2MenuItem.propDecorators = {
            "preventClose": [{ type: core.Input },],
            "value": [{ type: core.Input },],
        };
        return Ng2MenuItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng2DropdownMenu = (function () {
        function Ng2DropdownMenu(state, element, renderer) {
            this.state = state;
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
                if (dynamic === void 0) {
                    dynamic = true;
                }
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
                if (dynamic === void 0) {
                    dynamic = true;
                }
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
            { type: core.Component, args: [{
                        selector: 'ng2-dropdown-menu',
                        styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
                        template: "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [style.z-index]=\"zIndex\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n",
                        animations: [
                            animations.trigger('fade', [
                                animations.state('visible', animations.style({ display: 'block', opacity: 1, height: '*', width: '*' })),
                                animations.state('hidden', animations.style({ display: 'none', opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                                animations.transition('hidden => visible', [
                                    animations.animate('250ms ease-in', animations.style({ opacity: 1, height: '*', width: '*' }))
                                ]),
                                animations.transition('visible => hidden', [
                                    animations.animate('350ms ease-out', animations.style({ opacity: 0, width: 0, height: 0 }))
                                ])
                            ]),
                            animations.trigger('opacity', [
                                animations.transition('hidden => visible', [
                                    animations.animate('450ms ease-in', animations.keyframes([
                                        animations.style({ opacity: 0, offset: 0 }),
                                        animations.style({ opacity: 1, offset: 1 }),
                                    ]))
                                ]),
                                animations.transition('visible => hidden', [
                                    animations.animate('250ms ease-out', animations.keyframes([
                                        animations.style({ opacity: 1, offset: 0 }),
                                        animations.style({ opacity: 0.5, offset: 0.3 }),
                                        animations.style({ opacity: 0, offset: 1 }),
                                    ]))
                                ])
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        Ng2DropdownMenu.ctorParameters = function () {
            return [
                { type: DropdownStateService, },
                { type: core.ElementRef, },
                { type: core.Renderer, },
            ];
        };
        Ng2DropdownMenu.propDecorators = {
            "width": [{ type: core.Input },],
            "focusFirstElement": [{ type: core.Input },],
            "offset": [{ type: core.Input },],
            "appendToBody": [{ type: core.Input },],
            "zIndex": [{ type: core.Input },],
            "items": [{ type: core.ContentChildren, args: [Ng2MenuItem,] },],
        };
        return Ng2DropdownMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng2Dropdown = (function () {
        function Ng2Dropdown(state) {
            this.state = state;
            this.dynamicUpdate = true;
            // outputs
            this.onItemClicked = new core.EventEmitter();
            this.onItemSelected = new core.EventEmitter();
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
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
                if (position === void 0) {
                    position = this.button.getPosition();
                }
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
                if (position === void 0) {
                    position = this.button.getPosition();
                }
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
            { type: core.Component, args: [{
                        selector: 'ng2-dropdown',
                        template: "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n",
                        providers: [DropdownStateService]
                    },] },
        ];
        /** @nocollapse */
        Ng2Dropdown.ctorParameters = function () {
            return [
                { type: DropdownStateService, },
            ];
        };
        Ng2Dropdown.propDecorators = {
            "button": [{ type: core.ContentChild, args: [Ng2DropdownButton,] },],
            "menu": [{ type: core.ContentChild, args: [Ng2DropdownMenu,] },],
            "dynamicUpdate": [{ type: core.Input },],
            "onItemClicked": [{ type: core.Output },],
            "onItemSelected": [{ type: core.Output },],
            "onShow": [{ type: core.Output },],
            "onHide": [{ type: core.Output },],
            "scrollListener": [{ type: core.HostListener, args: ['window:scroll',] },],
        };
        return Ng2Dropdown;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng2DropdownModule = (function () {
        function Ng2DropdownModule() {
        }
        Ng2DropdownModule.decorators = [
            { type: core.NgModule, args: [{
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
                            common.CommonModule
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

    exports.Ng2Dropdown = Ng2Dropdown;
    exports.Ng2DropdownMenu = Ng2DropdownMenu;
    exports.Ng2MenuItem = Ng2MenuItem;
    exports.Ng2DropdownButton = Ng2DropdownButton;
    exports.Ng2DropdownModule = Ng2DropdownModule;
    exports.DropdownStateService = DropdownStateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1hdGVyaWFsLWRyb3Bkb3duLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYnV0dG9uL25nMi1kcm9wZG93bi1idXR0b24udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvYWN0aW9ucy50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL3NlcnZpY2VzL25nMi1kcm9wZG93bi1zdGF0ZS50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UudHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tZW51L25nMi1kcm9wZG93bi1tZW51LnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9kcm9wZG93bi9uZzItZHJvcGRvd24udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9uZzItZHJvcGRvd24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE91dHB1dCxcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24tYnV0dG9uJyxcbiAgICBzdHlsZXM6IFtgLm5nMi1kcm9wZG93bi1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWw7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6LjQ1cmVtIC4yNXJlbTtmb250LXNpemU6MTRweDtsZXR0ZXItc3BhY2luZzouMDhyZW07Y29sb3I6IzQ0NDtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6NDAwO2JvcmRlcjpub25lO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZmVmZWY7dGV4dC1hbGlnbjpsZWZ0O21pbi13aWR0aDoxMDBweDt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7bWF4LXdpZHRoOjE1MHB4fS5uZzItZHJvcGRvd24tYnV0dG9uOmhvdmVye2NvbG9yOiMyMjJ9Lm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZlLC5uZzItZHJvcGRvd24tYnV0dG9uOmZvY3Vze2NvbG9yOiMyMjI7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzIxOTZmM30ubmcyLWRyb3Bkb3duLWJ1dHRvbl9fbGFiZWx7ZmxleDoxIDEgOTUlfS5uZzItZHJvcGRvd24tYnV0dG9uX19jYXJldHt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSA2JX06aG9zdC1jb250ZXh0KC5uZzItZHJvcGRvd24tYnV0dG9uLS1pY29uKSAubmcyLWRyb3Bkb3duLWJ1dHRvbntib3JkZXI6bm9uZTttaW4td2lkdGg6NDBweDt3aWR0aDo0MHB4O2JvcmRlci1yYWRpdXM6MTAwJTt0cmFuc2l0aW9uOmFsbCAuMnM7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjQwcHg7cGFkZGluZzouNWVtfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIpfWBdLFxuICAgIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz0nbmcyLWRyb3Bkb3duLWJ1dHRvbicgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVNZW51KClcIiB0YWJpbmRleD1cIjBzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJuZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJuZzItZHJvcGRvd24tYnV0dG9uX19jYXJldFwiICpuZ0lmPVwic2hvd0NhcmV0XCI+XG4gICAgICAgIDxzdmcgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDMyIDMyXCIgaGVpZ2h0PVwiMTZweFwiIGlkPVwiw5DCocOQwrvDkMK+w5DCuV8xXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB3aWR0aD1cIjE2cHhcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj48cGF0aCBkPVwiTTI0LjI4NSwxMS4yODRMMTYsMTkuNTcxbC04LjI4NS04LjI4OGMtMC4zOTUtMC4zOTUtMS4wMzQtMC4zOTUtMS40MjksMCAgYy0wLjM5NCwwLjM5NS0wLjM5NCwxLjAzNSwwLDEuNDNsOC45OTksOS4wMDJsMCwwbDAsMGMwLjM5NCwwLjM5NSwxLjAzNCwwLjM5NSwxLjQyOCwwbDguOTk5LTkuMDAyICBjMC4zOTQtMC4zOTUsMC4zOTQtMS4wMzYsMC0xLjQzMUMyNS4zMTksMTAuODg5LDI0LjY3OSwxMC44ODksMjQuMjg1LDExLjI4NHpcIiBmaWxsPVwiIzEyMTMxM1wiIGlkPVwiRXhwYW5kX01vcmVcIi8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+XG4gICAgPC9zcGFuPlxuPC9idXR0b24+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duQnV0dG9uIHtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uTWVudVRvZ2dsZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd0NhcmV0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRvZ2dsZU1lbnVcbiAgICAgKiBAZGVzYyBlbWl0cyBldmVudCB0byB0b2dnbGUgbWVudVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTWVudVRvZ2dsZWQuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRQb3NpdGlvblxuICAgICAqIEBkZXNjIHJldHVybnMgcG9zaXRpb24gb2YgdGhlIGJ1dHRvblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLW1lbnUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25nMi1kcm9wZG93bi1zdGF0ZSc7XG5cbmNvbnN0IEtFWVMgPSB7XG4gICAgQkFDS1NQQUNFOiA5LFxuICAgIFBSRVY6IDM4LFxuICAgIE5FWFQ6IDQwLFxuICAgIEVOVEVSOiAxMyxcbiAgICBFU0NBUEU6IDI3XG59O1xuXG4vKipcbiAqIEBuYW1lIG9uU3dpdGNoTmV4dFxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvblN3aXRjaE5leHQgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggKyAxXSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAbmFtZSBvblN3aXRjaFByZXZcbiAqIEBwYXJhbSBpbmRleFxuICogQHBhcmFtIGl0ZW1zXG4gKiBAcGFyYW0gc3RhdGVcbiAqL1xuY29uc3Qgb25Td2l0Y2hQcmV2ID0gKGluZGV4OiBudW1iZXIsIGl0ZW1zOiBOZzJNZW51SXRlbVtdLCBzdGF0ZTogTmcyRHJvcGRvd25TdGF0ZSkgPT4ge1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0KGl0ZW1zW2luZGV4IC0gMV0sIHRydWUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQG5hbWUgb25CYWNrc3BhY2VcbiAqIEBwYXJhbSBpbmRleFxuICogQHBhcmFtIGl0ZW1zXG4gKiBAcGFyYW0gc3RhdGVcbiAqL1xuY29uc3Qgb25CYWNrc3BhY2UgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggKyAxXSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0KGl0ZW1zWzBdLCB0cnVlKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBvbkVzY2FwZSh0aGlzOiBOZzJEcm9wZG93bk1lbnUpIHtcbiAgICB0aGlzLmhpZGUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgb25JdGVtQ2xpY2tlZFxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvbkl0ZW1DbGlja2VkID0gKGluZGV4OiBudW1iZXIsIGl0ZW1zOiBOZzJNZW51SXRlbVtdLCBzdGF0ZTogTmcyRHJvcGRvd25TdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5zZWxlY3RlZEl0ZW0gPyBzdGF0ZS5zZWxlY3RlZEl0ZW0uY2xpY2soKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuICAgIFtLRVlTLkJBQ0tTUEFDRV06IG9uQmFja3NwYWNlLFxuICAgIFtLRVlTLlBSRVZdOiBvblN3aXRjaFByZXYsXG4gICAgW0tFWVMuTkVYVF06IG9uU3dpdGNoTmV4dCxcbiAgICBbS0VZUy5FTlRFUl06IG9uSXRlbUNsaWNrZWQsXG4gICAgW0tFWVMuRVNDQVBFXTogb25Fc2NhcGVcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJvd0tleXNIYW5kbGVyKGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFszOCwgNDBdLmluZGV4T2YoZXZlbnQua2V5Q29kZSkgPiAtMSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcbmV4cG9ydCBjbGFzcyBOZzJEcm9wZG93blN0YXRlIHtcbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4oKTtcbiAgICBwdWJsaWMgb25JdGVtRGVzdHJveWVkOiBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4oKTtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkSXRlbTogTmcyTWVudUl0ZW07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RlZEl0ZW1cbiAgICAgKiBAZGVzYyBnZXR0ZXIgZm9yIF9zZWxlY3RlZEl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBOZzJNZW51SXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0cyBhIG1lbnUgaXRlbSBhbmQgZW1pdHMgZXZlbnRcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoaXRlbTogTmcyTWVudUl0ZW0gfCB1bmRlZmluZWQsIGRpc3BhdGNoRXZlbnQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IGl0ZW07XG5cbiAgICAgICAgaWYgKCFkaXNwYXRjaEV2ZW50IHx8ICFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVuc2VsZWN0XG4gICAgICogQGRlc2Mgc2V0cyBfc2VsZWN0ZWRJdGVtIGFzIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyB1bnNlbGVjdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duU3RhdGUgfSBmcm9tICcuL25nMi1kcm9wZG93bi1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blN0YXRlU2VydmljZSB7XG4gICAgcHVibGljIG1lbnVTdGF0ZSA9IHtcbiAgICAgICAgaXNWaXNpYmxlOiA8Ym9vbGVhbj5mYWxzZSxcbiAgICAgICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9PT0gdHJ1ZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkcm9wZG93blN0YXRlOiBOZzJEcm9wZG93blN0YXRlID0gbmV3IE5nMkRyb3Bkb3duU3RhdGUoKTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIFJlbmRlcmVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1tZW51LWl0ZW0nLFxuICAgIHN0eWxlczogW2AubmcyLW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTouOWVtO3RleHQtdHJhbnNmb3JtOm5vbmU7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi4wM2VtO2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHg7cGFkZGluZzouM2VtIDEuMjVyZW07dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMjVzfS5uZzItbWVudS1pdGVtLS1zZWxlY3RlZHtiYWNrZ3JvdW5kOnJnYmEoMTU4LDE1OCwxNTgsLjIpO291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTpmb2N1c3tvdXRsaW5lOjB9Lm5nMi1tZW51LWl0ZW06YWN0aXZle2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuNCl9Omhvc3QobmcyLW1lbnUtaXRlbSkgL2RlZXAvIFtuZzItbWVudS1pdGVtLWljb25de3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtmb250LXNpemU6MjhweDt3aWR0aDoxLjVlbTtoZWlnaHQ6MzBweDtjb2xvcjpyZ2JhKDAsMCwwLC40NCl9YF0sXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSduZzItbWVudS1pdGVtJ1xuICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgW2NsYXNzLm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVkXT1cImlzU2VsZWN0ZWRcIlxuICAgICAoa2V5ZG93bi5lbnRlcik9XCJjbGljaygpXCJcbiAgICAgKGNsaWNrKT1cImNsaWNrKClcIlxuICAgICAobW91c2VvdmVyKT1cInNlbGVjdCgpXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBOZzJNZW51SXRlbSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogQHByZXZlbnRDbG9zZVxuICAgICAqIEBkZXNjIGlmIHRydWUsIGNsaWNraW5nIG9uIHRoZSBpdGVtIHdvbid0IGNsb3NlIHRoZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwcmV2ZW50Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHZhbHVlXG4gICAgICogQGRlc2MgYW55IHZhbHVlIGFzc29jaWF0ZWQgdG8gdGhlIGl0ZW1cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IERyb3Bkb3duU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbURlc3Ryb3llZC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzU2VsZWN0ZWRcbiAgICAgKiBAZGVzYyByZXR1cm5zIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBzZWxlY3QgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KCRldmVudD8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLCB0cnVlKTtcblxuICAgICAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNsaWNrXG4gICAgICogQGRlc2MgZW1pdHMgY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5vbkl0ZW1DbGlja2VkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ2ZvY3VzJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBSZW5kZXJlcixcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIHRyaWdnZXIsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICBhbmltYXRlLFxuICAgIGtleWZyYW1lcyxcbiAgICBzdGF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQUNUSU9OUywgYXJyb3dLZXlzSGFuZGxlciB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgRHJvcGRvd25TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kcm9wZG93bi1zdGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24tbWVudScsXG4gICAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm5nMi1kcm9wZG93bi1tZW51e292ZXJmbG93LXk6YXV0bztib3gtc2hhZG93OjAgMXB4IDJweCAwIHJnYmEoMCwwLDAsLjMpO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6LjVlbSAwO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjFweDttYXgtaGVpZ2h0OjQwMHB4O3dpZHRoOjI2MHB4O21pbi1oZWlnaHQ6MDtkaXNwbGF5OmJsb2NrfS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0taW5zaWRlLWVsZW1lbnR7cG9zaXRpb246Zml4ZWR9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tMnt3aWR0aDoyMDBweH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS00e3dpZHRoOjI2MHB4fS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTZ7d2lkdGg6MzIwcHh9Lm5nMi1kcm9wZG93bi1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7b3ZlcmZsb3c6aGlkZGVufTpob3N0IC9kZWVwLyAubmcyLW1lbnUtZGl2aWRlcntoZWlnaHQ6MXB4O21pbi1oZWlnaHQ6MXB4O21heC1oZWlnaHQ6MXB4O3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOiNmOWY5Zjl9YF0sXG4gICAgdGVtcGxhdGU6IGA8IS0tIE1FTlUgLS0+XG48ZGl2IGNsYXNzPSduZzItZHJvcGRvd24tbWVudSBuZzItZHJvcGRvd24tbWVudS0tLXdpZHRoLS17eyB3aWR0aCB9fSdcbiAgICAgW2NsYXNzLm5nMi1kcm9wZG93bi1tZW51LS1pbnNpZGUtZWxlbWVudF09XCIhYXBwZW5kVG9Cb2R5XCJcbiAgICAgW2NsYXNzLm5nMi1kcm9wZG93bi1tZW51LS1vcGVuXT1cInN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGVcIlxuICAgICBbc3R5bGUuei1pbmRleF09XCJ6SW5kZXhcIlxuICAgICBbQGZhZGVdPVwic3RhdGUubWVudVN0YXRlLnRvU3RyaW5nKClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1tZW51X19vcHRpb25zLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgW0BvcGFjaXR5XT1cInN0YXRlLm1lbnVTdGF0ZS50b1N0cmluZygpXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gQkFDS0RST1AgLS0+XG48ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLWJhY2tkcm9wXCIgKm5nSWY9XCJzdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlXCIgKGNsaWNrKT1cImhpZGUoKVwiPjwvZGl2PlxuYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZhZGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKFxuICAgICAgICAgICAgICAgIHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJ31cbiAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKFxuICAgICAgICAgICAgICAgIHtkaXNwbGF5OiAnbm9uZScsIG9wYWNpdHk6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgaGVpZ2h0OiAwLCB3aWR0aDogMH1cbiAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1pbicsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJ30pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignb3BhY2l0eScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiB2aXNpYmxlJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzQ1MG1zIGVhc2UtaW4nLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDF9KSxcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiBoaWRkZW4nLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMjUwbXMgZWFzZS1vdXQnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLjUsIG9mZnNldDogMC4zfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDF9KSxcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZzJEcm9wZG93bk1lbnUge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIHdpZHRoXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHdpZHRoOiBudW1iZXIgPSA0O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIHNldCB0byB0cnVlLCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZHJvcGRvd24gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGZvY3VzZWRcbiAgICAgKiBAbmFtZSBmb2N1c0ZpcnN0RWxlbWVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmb2N1c0ZpcnN0RWxlbWVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gc2V0cyBkcm9wZG93biBvZmZzZXQgZnJvbSB0aGUgYnV0dG9uXG4gICAgICogQG5hbWUgb2Zmc2V0IHtzdHJpbmd9IGZvbGxvdyBmb3JtYXQgJzxudW1iZXI+IDxudW1iZXI+JyBleC4gJzAgMjAnXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9mZnNldDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXBwZW5kVG9Cb2R5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB6SW5kZXhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgekluZGV4ID0gMTAwMDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGl0ZW1zXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihOZzJNZW51SXRlbSkgcHVibGljIGl0ZW1zOiBRdWVyeUxpc3Q8TmcyTWVudUl0ZW0+O1xuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogQ2xpZW50UmVjdDtcblxuICAgIHByaXZhdGUgbGlzdGVuZXJzID0ge1xuICAgICAgICBhcnJvd0hhbmRsZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGFuZGxlS2V5cHJlc3M6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IERyb3Bkb3duU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNob3dcbiAgICAgKiBAc2hvd3MgbWVudSBhbmQgc2VsZWN0cyBmaXJzdCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIHNob3cocG9zaXRpb24/OiBDbGllbnRSZWN0LCBkeW5hbWljID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgd2QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gc2V0dGluZyBoYW5kbGVyc1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihkYy5ib2R5LCAna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5cHJlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih3ZCwgJ2tleWRvd24nLCBhcnJvd0tleXNIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihwb3NpdGlvbiwgZHluYW1pYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoaWRlXG4gICAgICogQGRlc2MgaGlkZXMgbWVudVxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPSBmYWxzZTtcblxuICAgICAgICAvLyByZXNldCBzZWxlY3RlZCBpdGVtIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS51bnNlbGVjdCgpO1xuXG4gICAgICAgIC8vIGNhbGwgZnVuY3Rpb24gdG8gdW5saXN0ZW5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuYXJyb3dIYW5kbGVyID8gdGhpcy5saXN0ZW5lcnMuYXJyb3dIYW5kbGVyKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmhhbmRsZUtleXByZXNzID8gdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB1cGRhdGVQb3NpdGlvblxuICAgICAqIEBkZXNjIHVwZGF0ZXMgdGhlIG1lbnUgcG9zaXRpb24gZXZlcnkgdGltZSBpdCBpcyB0b2dnbGVkXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIHtDbGllbnRSZWN0fVxuICAgICAqIEBwYXJhbSBkeW5hbWljIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVQb3NpdGlvbihwb3NpdGlvbjogQ2xpZW50UmVjdCwgZHluYW1pYzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMudXBkYXRlT25DaGFuZ2UoZHluYW1pYyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFuZGxlS2V5cHJlc3NcbiAgICAgKiBAZGVzYyBleGVjdXRlcyBmdW5jdGlvbnMgb24ga2V5UHJlc3MgYmFzZWQgb24gdGhlIGtleSBwcmVzc2VkXG4gICAgICogQHBhcmFtICRldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVLZXlwcmVzcygkZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5ID0gJGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuaW5kZXhPZih0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBpZiAoIUFDVElPTlMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgQUNUSU9OU1trZXldLmNhbGwodGhpcywgaW5kZXgsIGl0ZW1zLCB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldE1lbnVFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRNZW51RWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNhbGNQb3NpdGlvbk9mZnNldFxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgY2FsY1Bvc2l0aW9uT2Zmc2V0KHBvc2l0aW9uKTogeyB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nIH0ge1xuICAgICAgICBjb25zdCB3ZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIXdkIHx8ICFkYyB8fCAhcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldE1lbnVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2QucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaXNDU1MxQ29tcGF0ID0gKChkYy5jb21wYXRNb2RlIHx8ICcnKSA9PT0gJ0NTUzFDb21wYXQnKTtcblxuICAgICAgICBjb25zdCB4ID0gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3ZC5wYWdlWE9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/XG4gICAgICAgICAgICBkYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCA6IGRjLmJvZHkuc2Nyb2xsTGVmdDtcblxuICAgICAgICBjb25zdCB5ID0gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3ZC5wYWdlWU9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/XG4gICAgICAgICAgICBkYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZGMuYm9keS5zY3JvbGxUb3A7XG5cbiAgICAgICAgbGV0IHsgdG9wLCBsZWZ0IH0gPSB0aGlzLmFwcGx5T2Zmc2V0KFxuICAgICAgICAgICAgYCR7cG9zaXRpb24udG9wICsgKHRoaXMuYXBwZW5kVG9Cb2R5ID8geSAtIDE1IDogMCl9cHhgLFxuICAgICAgICAgICAgYCR7cG9zaXRpb24ubGVmdCArIHggLSA1fXB4YFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNsaWVudFdpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgbWFyZ2luRnJvbUJvdHRvbSA9IHBhcnNlSW50KHRvcCkgKyBjbGllbnRIZWlnaHQgKyAodGhpcy5hcHBlbmRUb0JvZHkgPyAwIDogeSAtIDE1KTtcbiAgICAgICAgY29uc3QgbWFyZ2luRnJvbVJpZ2h0ID0gcGFyc2VJbnQobGVmdCkgKyBjbGllbnRXaWR0aDtcblxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxIZWlnaHQgPSB3ZC5pbm5lckhlaWdodCArIHdkLnNjcm9sbFk7XG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbFdpZHRoID0gd2QuaW5uZXJXaWR0aCArIHdkLnNjcm9sbFg7XG5cbiAgICAgICAgaWYgKG1hcmdpbkZyb21Cb3R0b20gPj0gd2luZG93U2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgICB0b3AgPSBgJHtwYXJzZUludCh0b3AucmVwbGFjZSgncHgnLCAnJykpIC0gY2xpZW50SGVpZ2h0fXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXJnaW5Gcm9tUmlnaHQgPj0gd2luZG93U2Nyb2xsV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpblJpZ2h0ID0gbWFyZ2luRnJvbVJpZ2h0IC0gd2luZG93U2Nyb2xsV2lkdGggKyAzMDtcbiAgICAgICAgICAgIGxlZnQgPSBgJHtwYXJzZUludChsZWZ0LnJlcGxhY2UoJ3B4JywgJycpKSAtIG1hcmdpblJpZ2h0fXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlPZmZzZXQodG9wOiBzdHJpbmcsIGxlZnQ6IHN0cmluZyk6IHsgdG9wOiBzdHJpbmcsIGxlZnQ6IHN0cmluZyB9IHtcbiAgICAgICAgaWYgKCF0aGlzLm9mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm9mZnNldC5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmICghb2Zmc2V0WzFdKSB7XG4gICAgICAgICAgICBvZmZzZXRbMV0gPSAnMCc7XG4gICAgICAgIH1cblxuICAgICAgICB0b3AgPSBgJHtwYXJzZUludCh0b3AucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VJbnQob2Zmc2V0WzBdKX1weGA7XG4gICAgICAgIGxlZnQgPSBgJHtwYXJzZUludChsZWZ0LnJlcGxhY2UoJ3B4JywgJycpKSArIHBhcnNlSW50KG9mZnNldFsxXSl9cHhgO1xuXG4gICAgICAgIHJldHVybiB7IHRvcCwgbGVmdCB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgZGMgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgICAgICAgLy8gYXBwZW5kIG1lbnUgZWxlbWVudCB0byB0aGUgYm9keVxuICAgICAgICAgICAgZGMuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlT25DaGFuZ2UoZHluYW1pYyA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGNQb3NpdGlvbk9mZnNldCh0aGlzLnBvc2l0aW9uKTtcblxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQsICd0b3AnLCBwb3NpdGlvbi50b3AudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShlbGVtZW50LCAnbGVmdCcsIHBvc2l0aW9uLmxlZnQudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZWxlY3QgZmlyc3QgaXRlbSB1bmxlc3MgdXNlciBkaXNhYmxlZCB0aGlzIG9wdGlvblxuICAgICAgICBpZiAodGhpcy5mb2N1c0ZpcnN0RWxlbWVudCAmJlxuICAgICAgICAgICAgdGhpcy5pdGVtcy5maXJzdCAmJlxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3QodGhpcy5pdGVtcy5maXJzdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcblxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmhhbmRsZUtleXByZXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nMkRyb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uL25nMi1kcm9wZG93bi1idXR0b24nO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25NZW51IH0gZnJvbSAnLi4vbWVudS9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLWRyb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tY29udGFpbmVyXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmcyLWRyb3Bkb3duLWJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZzItZHJvcGRvd24tbWVudVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBwcm92aWRlcnM6IFsgRHJvcGRvd25TdGF0ZVNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBOZzJEcm9wZG93biB7XG4gICAgLy8gZ2V0IGNoaWxkcmVuIGNvbXBvbmVudHNcbiAgICBAQ29udGVudENoaWxkKE5nMkRyb3Bkb3duQnV0dG9uKSBwdWJsaWMgYnV0dG9uOiBOZzJEcm9wZG93bkJ1dHRvbjtcbiAgICBAQ29udGVudENoaWxkKE5nMkRyb3Bkb3duTWVudSkgcHVibGljIG1lbnU6IE5nMkRyb3Bkb3duTWVudTtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBkeW5hbWljVXBkYXRlID0gdHJ1ZTtcblxuICAgIC8vIG91dHB1dHNcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uU2hvdzogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+KCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGU6IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UpIHt9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5vbkl0ZW1DbGlja2VkLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2tlZC5lbWl0KGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5wcmV2ZW50Q2xvc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZS5jYWxsKHRoaXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLm9uTWVudVRvZ2dsZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbVNlbGVjdGVkLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMub25JdGVtU2VsZWN0ZWQuZW1pdChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbURlc3Ryb3llZC5zdWJzY3JpYmUoKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWRJdGVtOiBOZzJNZW51SXRlbSB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5tZW51Lml0ZW1zLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1lbnUuZm9jdXNGaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZEl0ZW0gPSBpdGVtID09PSBpdGVtc1swXSAmJiBpdGVtcy5sZW5ndGggPiAxID8gaXRlbXNbMV0gOiBpdGVtc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdChuZXdTZWxlY3RlZEl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0b2dnbGVNZW51XG4gICAgICogQGRlc2MgdG9nZ2xlcyBtZW51IHZpc2liaWxpdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlTWVudShwb3NpdGlvbiA9IHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gaGlkZXMgZHJvcGRvd25cbiAgICAgKiBAbmFtZSBoaWRlXG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVudS5oaWRlKCk7XG4gICAgICAgIHRoaXMub25IaWRlLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLSBzaG93cyBkcm9wZG93blxuICAgICAqIEBuYW1lIHNob3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyhwb3NpdGlvbiA9IHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51LnNob3cocG9zaXRpb24sIHRoaXMuZHluYW1pY1VwZGF0ZSk7XG4gICAgICAgIHRoaXMub25TaG93LmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Nyb2xsTGlzdGVuZXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgICBwdWJsaWMgc2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbiAmJiB0aGlzLmR5bmFtaWNVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMubWVudS51cGRhdGVQb3NpdGlvbih0aGlzLmJ1dHRvbi5nZXRQb3NpdGlvbigpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nMkRyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL25nMi1kcm9wZG93bic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1lbnUgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBOZzJEcm9wZG93bkJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbic7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHJvcGRvd25TdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmcyTWVudUl0ZW0sXG4gICAgICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgICAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgICAgIE5nMkRyb3Bkb3duXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmcyRHJvcGRvd24sXG4gICAgICAgIE5nMk1lbnVJdGVtLFxuICAgICAgICBOZzJEcm9wZG93bkJ1dHRvbixcbiAgICAgICAgTmcyRHJvcGRvd25NZW51LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duTW9kdWxlIHt9XG5cbmV4cG9ydCB7XG4gICAgTmcyRHJvcGRvd24sXG4gICAgTmcyRHJvcGRvd25NZW51LFxuICAgIE5nMk1lbnVJdGVtLFxuICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgIERyb3Bkb3duU3RhdGVTZXJ2aWNlXG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIk91dHB1dCIsIklucHV0IiwiSW5qZWN0YWJsZSIsIlJlbmRlcmVyIiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsIkNvbnRlbnRDaGlsZHJlbiIsIkNvbnRlbnRDaGlsZCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUEwQkksMkJBQW9CLE9BQW1CO1lBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7aUNBSGlCLElBQUlBLGlCQUFZLEVBQVc7NkJBQzlDLElBQUk7U0FFRTs7Ozs7O1FBTXBDLHNDQUFVOzs7Ozs7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7UUFPM0IsdUNBQVc7Ozs7OztnQkFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7b0JBakMvREMsY0FBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLE1BQU0sRUFBRSxDQUFDLHMyQkFBbzJCLENBQUM7d0JBQzkyQixRQUFRLEVBQUUseTJCQVNiO3FCQUNBOzs7Ozt3QkFoQkdDLGVBQVU7Ozs7c0NBa0JUQyxXQUFNO2tDQUNOQyxVQUFLOztnQ0F4QlY7Ozs7Ozs7SUNJQSxxQkFBTSxJQUFJLEdBQUc7UUFDVCxTQUFTLEVBQUUsQ0FBQztRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO0tBQ2IsQ0FBQzs7Ozs7OztJQVFGLHFCQUFNLFlBQVksR0FBRyxVQUFDLEtBQWEsRUFBRSxLQUFvQixFQUFFLEtBQXVCO1FBQzlFLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENB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