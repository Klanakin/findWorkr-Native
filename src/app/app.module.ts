import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoginEmailComponent } from './login-screen/login-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { SelectAccountTypeComponent } from './select-account-type/select-account-type.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    LoadingScreenComponent,
    LoginEmailComponent,
    RegistrationComponent,
    SelectAccountTypeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
