import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsDashboardRoutingModule } from './analytics-dashboard-routing.module';
import { AnalyticsDashboardComponent } from './analytics-dashboard.component';

import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    AnalyticsDashboardComponent
  ],
  imports: [
    CommonModule,
    AnalyticsDashboardRoutingModule,
    FeatherIconModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AnalyticsDashboardComponent]
})
export class AnalyticsDashboardModule { }
