import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public urls:string[] = ['assets/gmail.png', 'assets/telephone.png','assets/linkedin.png', ]
  public form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      name:['', [Validators.required]],
      subject:['', [Validators.required]],
      phone:[''],
      message:['',[Validators.required]],
      
      
    },
  );
  constructor(private fb:FormBuilder, public mode:SwitchService){}
  public email = this.form.get('email') as FormControl
  public name = this.form.get('name') as FormControl
  public subject = this.form.get('subject') as FormControl
  public phone = this.form.get('phone') as FormControl
  public message = this.form.get('message') as FormControl

  sendEmail(){

  }
}

