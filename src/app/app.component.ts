import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AgentInformationComponent } from "./agent-information/agent-information.component";
import { TeamInformationComponent } from "./team-information/team-information.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, AgentInformationComponent, TeamInformationComponent, NavBarComponent, MatSortModule, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DataTracking';
}
