import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: ':lang',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
      },
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: `${navigator.language.split('-')[0]}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
