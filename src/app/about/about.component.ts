import { Component } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public imgUrls = [ 'assets/5562272.png',
  'assets/address.png',
  'assets/gmail.png',
  'assets/education.png',
  'assets/linkedin.png',
  'assets/github.png',
  'assets/image001.png']
  constructor(public mode:SwitchService){}

}
