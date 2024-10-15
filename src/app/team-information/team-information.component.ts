import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PeriodicElement } from '../interface/interfaces';
import { ELEMENT_DATA } from '../interface/TeamsColumn.interface';


@Component({
  selector: 'app-team-information',
  standalone: true,
  imports: [RouterOutlet, MatSortModule, MatTableModule],
  templateUrl: './team-information.component.html',
  styleUrl: './team-information.component.scss'
})
export class TeamInformationComponent {

  @ViewChild(MatSort) sort!: MatSort ;

  TableData: PeriodicElement[] = ELEMENT_DATA
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.TableData);

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  
}
