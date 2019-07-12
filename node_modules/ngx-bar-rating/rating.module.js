import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarRatingComponent } from './component/bar-rating.component';
import { BarRatingPipe } from './pipe/bar-rating.pipe';
var BarRatingModule = (function () {
    function BarRatingModule() {
    }
    return BarRatingModule;
}());
export { BarRatingModule };
BarRatingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BarRatingComponent,
                    BarRatingPipe
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    BarRatingComponent
                ]
            },] },
];
/** @nocollapse */
BarRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map