import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FaceService } from '../services/face-service/face-service';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css'],
})
export class EmailInputComponent implements OnInit {
  @Output() enteredEmail: EventEmitter<string> = new EventEmitter<string>();
  email: string;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  imageUrl: string = "https://cbcserviceimages.azureedge.net/services";
  constructor(public faceService: FaceService) { }

  ngOnInit(): void {
    
  }

  enter(){
    let email = this.email;
    if(email && email != "" && email.match(this.emailRegex)){
      this.enteredEmail.emit(email);
    }
    // this.getService();
    // this.getServiceDates();
  }

  async getService(){
    const service = await this.faceService.getService("12-08-2016", "MorningWorship");
    // this.imageUrl = this.imageUrl + "/" + service.attendees[0].imageName;
    console.log(service);
  }

  async getServiceDates(){
    const serviceDates = await this.faceService.getServiceDates(4);
    console.log(serviceDates);
  }
}
