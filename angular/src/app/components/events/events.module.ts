// events.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FeatherIconModule,
    SharedModule,
    MatSelectModule 
  ],
})
export class EventsModule { }
