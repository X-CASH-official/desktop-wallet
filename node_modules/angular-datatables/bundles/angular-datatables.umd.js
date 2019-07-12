(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (factory((global.angular = global.angular || {}, global.angular.datatables = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,core,rxjs,common) { 'use strict';

    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */
    var DataTableDirective = /** @class */ (function () {
        function DataTableDirective(el) {
            this.el = el;
            /**
               * The DataTable option you pass to configure your table.
               */
            this.dtOptions = {};
        }
        DataTableDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (this.dtTrigger) {
                this.dtTrigger.subscribe(function () {
                    _this.displayTable();
                });
            }
            else {
                this.displayTable();
            }
        };
        DataTableDirective.prototype.ngOnDestroy = function () {
            if (this.dtTrigger) {
                this.dtTrigger.unsubscribe();
            }
            if (this.dt) {
                this.dt.destroy(true);
            }
        };
        DataTableDirective.prototype.displayTable = function () {
            var _this = this;
            this.dtInstance = new Promise(function (resolve, reject) {
                Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                    // Using setTimeout as a "hack" to be "part" of NgZone
                    setTimeout(function () {
                        _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                        resolve(_this.dt);
                    });
                });
            });
        };
        DataTableDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[datatable]'
                    },] },
        ];
        /** @nocollapse */
        DataTableDirective.ctorParameters = function () { return [
            { type: core.ElementRef, },
        ]; };
        DataTableDirective.propDecorators = {
            "dtOptions": [{ type: core.Input },],
            "dtTrigger": [{ type: core.Input },],
        };
        return DataTableDirective;
    }());

    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */
    var DataTablesModule = /** @class */ (function () {
        function DataTablesModule() {
        }
        DataTablesModule.forRoot = function () {
            return {
                ngModule: DataTablesModule
            };
        };
        DataTablesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [DataTableDirective],
                        exports: [DataTableDirective]
                    },] },
        ];
        return DataTablesModule;
    }());

    /**
     * @license
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
     */

    exports.DataTableDirective = DataTableDirective;
    exports.DataTablesModule = DataTablesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
