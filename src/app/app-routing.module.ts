import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'login-email', component: LoginEmailComponent },
  { path: 'start-screen', component: StartScreenComponent },
  { path: 'register', component: RegistrationComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
