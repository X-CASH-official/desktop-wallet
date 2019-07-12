import { Pipe } from '@angular/core';
var BarRatingPipe = (function () {
    function BarRatingPipe() {
    }
    BarRatingPipe.prototype.transform = function (value, titles) {
        if (value === void 0) { value = 0; }
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    };
    return BarRatingPipe;
}());
export { BarRatingPipe };
BarRatingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'rateTitle'
            },] },
];
/** @nocollapse */
BarRatingPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=bar-rating.pipe.js.map