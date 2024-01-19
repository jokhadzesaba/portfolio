import { Component } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public urls:string[] = ['assets/day-and-night.png']
  public menu:boolean = false;
  constructor(public mode:SwitchService){}

  darkTheme(){
    this.mode.mode?.next(!this.mode.mode.value)
    console.log(this.mode.mode.value);
    
  }
  dropMenu(){
    this.menu = !this.menu
  }
}
