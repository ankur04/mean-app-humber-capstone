import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InitialSetupComponent } from './components/home/initial-setup/initial-setup.component';
import { JourneyComponent } from './components/home/journey/journey.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './service/authentication/auth-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'initial-setup', component: InitialSetupComponent },
      { path: 'journey', component: JourneyComponent },
    ], canActivateChild: [AuthGuard]
    , canActivate: [AuthGuard]
  },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }