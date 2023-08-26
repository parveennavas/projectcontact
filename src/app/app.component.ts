import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
  
})
export class AppComponent {
  isDarkTheme:boolean=false;

}
