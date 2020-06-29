import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoginEmailComponent } from './login-screen/login-screen.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

import { NavigationComponent } from './navigation/navigation.component';
  import { HomeComponent} from './home/home.component';
  import { ClassificationComponent} from './classification/classification.component';
  import { InboxComponent} from './inbox/inbox.component';
  import { NotificationsComponent } from './notifications/notifications.component';
  import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'login-screen', component: LoginEmailComponent },
  { path: 'start-screen', component: StartScreenComponent },
  { path: 'registration-page', component: RegistrationComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'navigation', component: NavigationComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'classification', component: ClassificationComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'profile', component: ProfileComponent }
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
