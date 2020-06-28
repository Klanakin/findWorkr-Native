import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoginEmailComponent } from './login-screen/login-screen.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'login-screen', component: LoginEmailComponent },
  { path: 'start-screen', component: StartScreenComponent },
  { path: 'registration-page', component: RegistrationComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
