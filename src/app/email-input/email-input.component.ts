import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {
  @Output() enteredEmail: EventEmitter<string> = new EventEmitter<string>();
  email: string;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit(): void {
  }

  enter(){
    let email = this.email;
    if(email && email != "" && email.match(this.emailRegex)){
      this.enteredEmail.emit(email);
    }
  }
}
