import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  @Output() enteredCredentials: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  constructor() { }

  ngOnInit(): void {
  }

  credentialsEntered(credential: Credentials){
    this.enteredCredentials.emit(credential);
  }
}
