import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Credentials } from './models/credentials';
import { FaceGroup } from './models/face-group';
import { CredentialResponse } from './services/credential-service/credential-response';
import { FaceService } from './services/face-service/face-service';
import { FaceServiceConverter } from './services/face-service/face-service-converter';
import { Attendance } from './services/face-service/models/attendance';
import { ServiceDates } from './services/face-service/models/service-dates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public faceService: FaceService){

  }
  attendance: Attendance;
  credentials: Credentials = null;
  email: string;
  serviceDate: Date;
  servicesDates: ServiceDates;
  faceGroup: FaceGroup = null;

  /* faceGroup: FaceGroup = {
    faces: [
      {
        faceId: "1234",
        isIdentified: true,
        firstName: "Wes",
        lastName: "Dale",
        isMember: false,
        pictureUrl: "https://i.imgur.com/YVu3lwT.png",
        userConfirmed: false,
        confirmedBy: null
      },
      {
        faceId: "1235",
        isIdentified: true,
        firstName: "Victor",
        lastName: "Villorani",
        isMember: false,
        pictureUrl: "https://i.imgur.com/7iQpg7v.png",
        userConfirmed: false,
        confirmedBy: null,
      },
      {
        faceId: "1134",
        isIdentified: false,
        firstName: "",
        lastName: "",
        isMember: false,
        pictureUrl: "https://i.imgur.com/izD9c7v.png",
        userConfirmed: false,
        confirmedBy: null
      },
      {
        faceId: "1634",
        isIdentified: true,
        firstName: "Bill",
        lastName: "Combs",
        isMember: false,
        pictureUrl: "https://i.imgur.com/RMbwjWw.png",
        userConfirmed: false,
        confirmedBy: null
      },
    ],
    date: new Date()
  } */

  credentialsEntered(credentials: Credentials){
    console.log('working');
    this.credentials = credentials;
    this.email = credentials.email;
  }

  async serviceDateSelected(serviceDate: Date){
    this.serviceDate = serviceDate;
    const attendance = await this.faceService.getAttendance(serviceDate, "MorningWorship");
    console.log(attendance);
    this.faceGroup = FaceServiceConverter.convertAttendanceToFaceGroup(attendance);
    console.log(this.faceGroup);
  }

  ngOnInit(){
  }
}
