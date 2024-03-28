import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { HomeComponent } from './component/home/home.component';
import { MenubarComponent } from "./component/menubar/menubar.component";
import { CardComponent } from './component/card/card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenubarComponent,HomeComponent,DataTableComponent, CardComponent]
})
export class AppComponent {
  title = 'ang-data-table';

  constructor() {}
}
