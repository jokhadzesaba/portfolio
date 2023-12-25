import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public imgUrls = [ 'assets/5562272.png',
  'assets/address.png',
  'assets/email.png',
  'assets/education.png',
  'assets/linkedin.png',
  'assets/github.png',]

}
