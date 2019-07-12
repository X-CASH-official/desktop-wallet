/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableDirective } from './angular-datatables.directive';
var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [DataTableDirective],
                    exports: [DataTableDirective]
                },] },
    ];
    return DataTablesModule;
}());
export { DataTablesModule };
//# sourceMappingURL=angular-datatables.module.js.map