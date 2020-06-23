import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    LoadingScreenComponent,
    LoginEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
