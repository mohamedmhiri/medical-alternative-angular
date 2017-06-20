import { UtilModule } from './modules/util/util.module';
import { Http } from '@angular/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ManagerComponent } from './components/manager/manager.component';
import { AuthConfig } from './config/auth-config';
import { ManagerModule } from './modules/manager/manager.module';
import { AppRouterModule } from './routes/app-router/app-router.module';
import { CollectionModule } from './modules/collection/collection.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


// rxjs Store module
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CollectionModule,
    BrowserAnimationsModule,
    ManagerModule,
    StoreModule.provideStore({ _auth: authReducer }),
    UtilModule
  ],
  providers: [
    AuthConfig,
    AuthGuard,
    AuthService,
  ],
  exports: [
    CollectionModule,
    ManagerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
