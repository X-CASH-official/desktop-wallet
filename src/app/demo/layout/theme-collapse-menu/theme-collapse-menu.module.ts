import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeCollapseMenuRoutingModule } from './theme-collapse-menu-routing.module';
import { ThemeCollapseMenuComponent } from './theme-collapse-menu.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeCollapseMenuComponent],
  imports: [
    CommonModule,
    ThemeCollapseMenuRoutingModule,
    SharedModule
  ]
})
export class ThemeCollapseMenuModule { }
