import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  router = inject(Router)


  navigateToAgent(){
    this.router.navigateByUrl('/agentInformation')
  }

  navigateToTeam(){
    this.router.navigateByUrl('/teamInformation')
  }
  

  navigateToDashboard(){
    this.router.navigateByUrl('')
  }
  

}

