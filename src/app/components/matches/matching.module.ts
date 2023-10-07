import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchingComponent } from './matching.component';
import { MatchingRoutingModule } from './matching-routing.module';
import { AddMatchingComponent } from './add-matching/add-matching.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [MatchingComponent, AddMatchingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatchingRoutingModule,
  ]
})
export class MatchingModule { }
