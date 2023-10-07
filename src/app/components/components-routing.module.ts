import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { TestBed } from '@angular/core/testing';


const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      /*{
        path: 'enterprisecard',
        loadChildren: () =>
          import('../components/matches/enterprise-card/enterprise-card.module').then(
            (m) => m.EnterpriseCardModule
          ),
      },*/
      {
        path: 'matches',
        loadChildren: () =>
          import('../components/matches/matching-routing.module').then(
            (m) => m.MatchingRoutingModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../components/events/events.module').then(
            (m) => m.EventsModule
          ),
      },

      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'instructor',
        loadChildren: () =>
          import('./instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./enterprises/services/services-routing.module').then((m) => m.ServicesRoutingModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
      
      
      { 
        path: 'home-three', 
        loadChildren: () => import('./home-list/home3/home3.module').then(m => m.Home3Module) 
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
