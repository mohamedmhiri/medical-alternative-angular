import { UtilModule } from './../util/util.module';
import { AppRouterModule } from './../../routes/app-router/app-router.module';
import { LoginComponent } from './../../components/login/login.component';
import { HelloComponent } from './../../components/hello/hello.component';
import { MenuComponent } from './../../shared/menu/menu.component'
import { ManagerComponent } from './../../components/manager/manager.component';
import { ErrorComponent } from './../../shared/error/error.component';
import { FooterComponent } from './../../shared/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ng2-semantic-ui module from https://edcarroll.github.io/ng2-semantic-ui
import {SuiModule} from 'ng2-semantic-ui'
@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    AppRouterModule,
  ],
  declarations: [
    FooterComponent,
    ErrorComponent,
    ManagerComponent,
    MenuComponent,
    HelloComponent,
    LoginComponent
  ],
  exports: [
    AppRouterModule,
  ]
})
export class CollectionModule { }
