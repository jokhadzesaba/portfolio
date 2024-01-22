import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  public mode:BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private http:HttpClient){}
  sendEmail(url:string, data:object){
    return this.http.post(url, data)
  }
}
