import { Component } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public imgUrls = [
    'assets/profImg.jpg',
    'assets/github.png',
    'assets/linkedin.png',
  ];

  constructor(public mode: SwitchService) {}
}
