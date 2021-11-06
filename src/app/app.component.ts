import { Component } from '@angular/core';
import { FaceGroup } from './models/face-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CbcFace';
  faceGroup: FaceGroup = {
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
  }

  serviceSelected = false;

  
}