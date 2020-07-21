import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InitialSetupComponent } from "./components/home/initial-setup/initial-setup.component";
import { ExerciseComponent } from "./components/home/journey/exercise/exercise.component";
import { JourneyComponent } from "./components/home/journey/journey.component";
import { SkillComponent } from "./components/home/journey/skill/skill.component";
import { StartJourneyComponent } from "./components/home/start-journey/start-journey.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthGuard } from "./service/authentication/auth-guard.service";
import { PreviousPhaseComponent } from "./components/home/previous-phase/previous-phase.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "home", pathMatch: "full", redirectTo: "home/journeys" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "initial-setup", component: InitialSetupComponent },
      { path: "journeys", component: StartJourneyComponent },
      { path: "journey", component: JourneyComponent },
      { path: "skill", component: SkillComponent },
      { path: "exercise", component: ExerciseComponent },
      { path: "previousPhase", component: PreviousPhaseComponent },
    ],
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
  },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
