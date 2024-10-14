import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentInformationComponent } from './agent-information/agent-information.component';
import { TeamInformationComponent } from './team-information/team-information.component';

export const routes: Routes = [

  {path: '', component: DashboardComponent},
  {path: 'agentInformation', component: AgentInformationComponent},
  {path: 'teamInformation', component: TeamInformationComponent},

];
