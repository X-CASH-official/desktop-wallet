"use strict";
var core_1 = require('@angular/core');
var ChartComponent = (function () {
    function ChartComponent(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.clickCanvas = new core_1.EventEmitter();
        this.clickDataset = new core_1.EventEmitter();
        this.clickElements = new core_1.EventEmitter();
        this.clickElement = new core_1.EventEmitter();
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.create();
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.chart) {
            if (changes['type'] || changes['options']) {
                this.create();
            }
            else if (changes['data']) {
                var currentValue_1 = changes['data'].currentValue;
                ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(function (property) {
                    _this.chart.data[property] = currentValue_1[property];
                });
                this.chart.update();
            }
        }
    };
    ChartComponent.prototype.create = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.canvas) {
                _this.elementRef.nativeElement.removeChild(_this.canvas);
            }
            _this.canvas = document.createElement('canvas');
            _this.elementRef.nativeElement.appendChild(_this.canvas);
            _this.chart = new Chart(_this.canvas, {
                type: _this.type,
                data: _this.data,
                options: _this.options
            });
            _this.canvas.onclick = function (e) {
                _this.ngZone.run(function () {
                    _this.clickCanvas.next(e);
                    if (_this.clickDataset.observers.length) {
                        _this.clickDataset.next(_this.chart.getDatasetAtEvent(e));
                    }
                    if (_this.clickElements.observers.length) {
                        _this.clickElements.next(_this.chart.getElementsAtEvent(e));
                    }
                    if (_this.clickElement.observers.length) {
                        _this.clickElement.next(_this.chart.getElementAtEvent(e));
                    }
                });
            };
        });
    };
    ChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'chart',
                    template: '',
                    styles: [':host { display: block; }']
                },] },
    ];
    ChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
    ]; };
    ChartComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'clickCanvas': [{ type: core_1.Output },],
        'clickDataset': [{ type: core_1.Output },],
        'clickElements': [{ type: core_1.Output },],
        'clickElement': [{ type: core_1.Output },],
    };
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map