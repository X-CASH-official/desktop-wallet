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
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new EventEmitter();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylinePoint.prototype, "latitude", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgmPolylinePoint.prototype, "longitude", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgmPolylinePoint.prototype, "positionChanged", void 0);
    AgmPolylinePoint = __decorate([
        Directive({ selector: 'agm-polyline-point' }),
        __metadata("design:paramtypes", [])
    ], AgmPolylinePoint);
    return AgmPolylinePoint;
}());
export { AgmPolylinePoint };
//# sourceMappingURL=polyline-point.js.map