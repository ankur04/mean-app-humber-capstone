import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { InitialSetupComponent } from "./components/home/initial-setup/initial-setup.component";
import { JourneyComponent } from "./components/home/journey/journey.component";
import { StepComponent } from "./components/home/journey/step/step.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { StartJourneyComponent } from "./components/home/start-journey/start-journey.component";
import { SkillComponent } from './components/home/journey/skill/skill.component';
import { ExerciseComponent } from './components/home/journey/exercise/exercise.component';
import { PreviousPhaseComponent } from './components/home/previous-phase/previous-phase.component';
import { PreviousSkillComponent } from './components/home/journey/previous-skill/previous-skill.component';
import { PreviousExerciseComponent } from './components/home/journey/previous-exercise/previous-exercise.component';
import { PreviousStepComponent } from './components/home/journey/previous-step/previous-step.component';
import { JourneyPercentageComponent } from './components/home/start-journey/journey-percentage/journey-percentage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    InitialSetupComponent,
    JourneyComponent,
    StepComponent,
    StartJourneyComponent,
    SkillComponent,
    ExerciseComponent,
    PreviousPhaseComponent,
    PreviousSkillComponent,
    PreviousExerciseComponent,
    PreviousStepComponent,
    JourneyPercentageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
