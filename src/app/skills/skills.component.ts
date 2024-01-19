import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { SwitchService } from '../switch.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public urls:string = 'assets/cv.pdf'
  constructor(public mode:SwitchService, private sanitazer:DomSanitizer){
    
  }
  sanitazeUrl(url:string):SafeUrl{
   return this.sanitazer.bypassSecurityTrustUrl(url)
  }

}
