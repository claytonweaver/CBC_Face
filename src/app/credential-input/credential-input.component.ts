import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Credentials } from '../models/credentials';
import { CredentialService } from '../services/credential-service/credential-service';
import { FaceService } from '../services/face-service/face-service';
import { Utils } from '../services/utils';

@Component({
  selector: 'app-credential-input',
  templateUrl: './credential-input.component.html',
  styleUrls: ['./credential-input.component.css'],
})
export class CredentialInputComponent implements OnInit {
  @Output() enteredCredentials: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  email: string;
  password: string;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  imageUrl: string = "https://cbcserviceimages.azureedge.net/services";
  constructor(public faceService: FaceService, public credentialService: CredentialService) { }

  ngOnInit(): void {

  }

  async enter(){
    let email = this.email;
    console.log(this.email, this.password);
    if(!this.email || !this.password || !email.match(this.emailRegex)){
      console.log("returned")
      return;
    }
    const credentialServiceResponse = await this.credentialService.getTokenFromCredentials(this.email, this.password);
    if(credentialServiceResponse && credentialServiceResponse.apiKey){
      console.log(credentialServiceResponse.apiKey);
      this.faceService.setToken(credentialServiceResponse.apiKey);
      this.enteredCredentials.emit({email: this.email, password: this.password});
    }
    // this.getService();
    // this.getServiceDates();
  }

  async getService(){
    /* const service = await this.faceService.getAttendance("12-08-2016", "MorningWorship");
    this.imageUrl = this.imageUrl + "/" + service.attendees[0].imageName;
    console.log(service); */
  }

  /* async getServiceDates(){
    const serviceDates = await this.faceService.getServiceDates(4);
    console.log(serviceDates);
  } */
}
