import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
myMenuPanel: any;
badgevisible=false;
badgevisibility(){
this.badgevisible = true;
}
}