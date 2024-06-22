import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
{path:"", component:WelcomeComponent, pathMatch:"full"},
{path:"welcome", component:WelcomeComponent},
{path:"question", component:QuestionsComponent}
];
