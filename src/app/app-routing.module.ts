import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoAuthGuard} from '../shared/guards/no-auth.guard';
import {AuthGuard} from '../shared/guards/auth.guard';
import {ROUTES} from '../modules/auth/auth-routing.module';

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
        canLoad: [NoAuthGuard],
      },
      {
        path: '',
        loadChildren: async () => (await import('../modules/default/default-routing.module')).ROUTES,
        canLoad: [AuthGuard]
      },
    ]
  },

  // {
  //   path: 'data',
  //   children: [
  //     {},
  //     {},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
