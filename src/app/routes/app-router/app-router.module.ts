import { AuthGuard } from './../../services/auth-guard.service';
import { HelloComponent } from './../../components/hello/hello.component';
import { LoginComponent } from './../../components/login/login.component';
import { ManagerComponent } from './../../components/manager/manager.component';
import { ErrorComponent } from './../../shared/error/error.component';
import { MenuComponent } from './../../shared/menu/menu.component'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: HelloComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'menu',
        loadChildren: '../../modules/manager/manager.module#ManagerModule',
        canActivate: [AuthGuard],
        component: ManagerComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
  ],
  declarations: [

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
      RouterModule
  ]
})
export class AppRouterModule { }
