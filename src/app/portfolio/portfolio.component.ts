import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  public imgUrls = ['assets/project3.jpg',
  'assets/project1.jpg',
  'assets/project2.jpg',
  'assets/tic.png']
}
