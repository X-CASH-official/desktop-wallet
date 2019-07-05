/// <reference types="datatables.net" />
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
export declare class DataTableDirective implements OnDestroy, OnInit {
    private el;
    /**
     * The DataTable option you pass to configure your table.
     */
    dtOptions: DataTables.Settings;
    /**
     * This trigger is used if one wants to trigger manually the DT rendering
     * Useful when rendering angular rendered DOM
     */
    dtTrigger: Subject<any>;
    /**
     * The DataTable instance built by the jQuery library [DataTables](datatables.net).
     *
     * It's possible to execute the [DataTables APIs](https://datatables.net/reference/api/) with
     * this variable.
     */
    dtInstance: Promise<DataTables.Api>;
    private dt;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private displayTable();
}
