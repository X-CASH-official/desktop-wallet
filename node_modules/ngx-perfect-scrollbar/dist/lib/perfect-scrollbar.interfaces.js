/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var PERFECT_SCROLLBAR_CONFIG = new InjectionToken('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
export { Geometry };
if (false) {
    /** @type {?} */
    Geometry.prototype.x;
    /** @type {?} */
    Geometry.prototype.y;
    /** @type {?} */
    Geometry.prototype.w;
    /** @type {?} */
    Geometry.prototype.h;
}
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
export { Position };
if (false) {
    /** @type {?} */
    Position.prototype.x;
    /** @type {?} */
    Position.prototype.y;
}
/** @typedef {?} */
var PerfectScrollbarEvent;
export { PerfectScrollbarEvent };
/** @type {?} */
export var PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
/**
 * @record
 */
export function PerfectScrollbarConfigInterface() { }
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.handlers;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.wheelSpeed;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.swipeEasing;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.suppressScrollX;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.suppressScrollY;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.wheelPropagation;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.useBothWheelAxes;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.scrollingThreshold;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.minScrollbarLength;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.maxScrollbarLength;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.scrollXMarginOffset;
/** @type {?|undefined} */
PerfectScrollbarConfigInterface.prototype.scrollYMarginOffset;
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[/** @type {?} */ (key)] = config[/** @type {?} */ (key)];
        }
    };
    return PerfectScrollbarConfig;
}());
export { PerfectScrollbarConfig };
if (false) {
    /** @type {?} */
    PerfectScrollbarConfig.prototype.handlers;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.wheelSpeed;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.swipeEasing;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.suppressScrollX;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.suppressScrollY;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.wheelPropagation;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.useBothWheelAxes;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.scrollingThreshold;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.minScrollbarLength;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.maxScrollbarLength;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.scrollXMarginOffset;
    /** @type {?} */
    PerfectScrollbarConfig.prototype.scrollYMarginOffset;
}
//# sourceMappingURL=perfect-scrollbar.interfaces.js.map