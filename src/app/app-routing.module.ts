import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoAuthGuard} from '../shared/guards/no-auth.guard';
import {AuthGuard} from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: async () => (await import('../modules/auth/auth-routing.module')).ROUTES,
        canActivate: [NoAuthGuard],
      },
      {
        path: '',
        loadChildren: async () => (await import('../modules/default/default-routing.module')).ROUTES,
        canLoad: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
