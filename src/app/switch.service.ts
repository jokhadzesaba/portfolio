import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  public mode:BehaviorSubject<boolean> = new BehaviorSubject(false)
  
}
