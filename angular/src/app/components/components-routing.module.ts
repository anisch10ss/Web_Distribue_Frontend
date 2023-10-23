import { ForumsRoutingModule } from './forum/forum-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { TestBed } from '@angular/core/testing';


const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'home-three', pathMatch: 'full' },

      /*{
        path: 'enterprisecard',
        loadChildren: () =>
          import('../components/matches/enterprise-card/enterprise-card.module').then(
            (m) => m.EnterpriseCardModule
          ),
      },*/
      {
        path: 'portfolio',
        loadChildren: () =>
          import('../components/portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
      },
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
        path: 'feedback',
        loadChildren: () =>
          import('./add-feedback/add-feedback-routing.module').then((m) => m.AddFeedbackRoutingModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./enterprises/services/services-routing.module').then((m) => m.ServicesRoutingModule),
      },
      {
        path: 'meetings',
        loadChildren: () =>
          import('./enterprises/meetings/meetings-routing.module').then((m) => m.MeetingsRoutingModule),
      },
      {
        path: 'forums',
        loadChildren: () =>
          import('./forum/forum-routing.module').then((m) => m.ForumsRoutingModule),
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
