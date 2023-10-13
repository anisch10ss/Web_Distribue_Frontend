import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingComponent } from './matching.component';
import { AddMatchingComponent } from './add-matching/add-matching.component';

const routes: Routes = [
  { path: '', component: MatchingComponent },
  { path: 'add', component: AddMatchingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingRoutingModule { }
