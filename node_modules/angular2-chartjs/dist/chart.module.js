"use strict";
if (typeof window === 'object') {
    require('chart.js');
}
var core_1 = require('@angular/core');
var chart_component_1 = require('./chart.component');
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [chart_component_1.ChartComponent],
                    exports: [chart_component_1.ChartComponent]
                },] },
    ];
    ChartModule.ctorParameters = function () { return []; };
    return ChartModule;
}());
exports.ChartModule = ChartModule;
//# sourceMappingURL=chart.module.js.map