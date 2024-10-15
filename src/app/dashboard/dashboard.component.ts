import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { TeamInformationComponent } from "../team-information/team-information.component";
import { NgFor } from '@angular/common';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, NavBarComponent, TeamInformationComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}


