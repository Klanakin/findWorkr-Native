import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoginEmailComponent } from './login-screen/login-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { SelectAccountTypeComponent } from './select-account-type/select-account-type.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassificationComponent } from './classification/classification.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    LoadingScreenComponent,
    LoginEmailComponent,
    RegistrationComponent,
    SelectAccountTypeComponent,
    UnderConstructionComponent,
    EmailConfirmationComponent,
    HomeComponent,
    NavigationComponent,
    NotificationsComponent,
    InboxComponent,
    ProfileComponent,
    ClassificationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
