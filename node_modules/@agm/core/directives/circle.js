var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CircleManager } from '../services/managers/circle-manager';
var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    AgmCircle_1 = AgmCircle;
    /** @internal */
    AgmCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle_1._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    var AgmCircle_1;
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "latitude", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "longitude", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "clickable", void 0);
    __decorate([
        Input('circleDraggable'),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "draggable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "editable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmCircle.prototype, "fillColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "fillOpacity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "radius", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmCircle.prototype, "strokeColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "strokeOpacity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgmCircle.prototype, "strokePosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "strokeWeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "visible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "zIndex", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "centerChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "circleClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "circleDblClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "drag", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "dragEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "dragStart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "mouseDown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "mouseMove", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "mouseOut", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "mouseOver", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "mouseUp", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "radiusChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmCircle.prototype, "rightClick", void 0);
    AgmCircle = AgmCircle_1 = __decorate([
        Directive({
            selector: 'agm-circle'
        }),
        __metadata("design:paramtypes", [CircleManager])
    ], AgmCircle);
    return AgmCircle;
}());
export { AgmCircle };
//# sourceMappingURL=circle.js.map