import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Face } from '../models/face';
import { FaceGroup } from '../models/face-group';
import { User } from '../models/user';
import { Attendance } from '../services/face-service/models/attendance';
import { Utils } from '../services/utils';

@Component({
  selector: 'app-faces-view',
  templateUrl: './faces-view.component.html',
  styleUrls: ['./faces-view.component.css']
})
export class FacesViewComponent implements OnInit {
  @Input() faceGroup: FaceGroup;
  @Input() user: User;
  @Input() attendance: Attendance;
  currentFace: Face;
  currentFaceIndex: number = 0;
  faceGroupLength: number = 0;
  showFinsihedButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.faceGroupLength = this.getFaceGroupLength();
    this.setCurrentFace();
  }

  getFaceGroupLength(){
    if(this.faceGroup){
      return this.faceGroup.faces.length - 1;
    }
  }

  setCurrentFace(){
    this.currentFace = this.faceGroup.faces[this.currentFaceIndex];
  }

  identify(faceIdentified: Face){
    faceIdentified.userConfirmed = true;
    faceIdentified.confirmedBy = this.user;
    faceIdentified.isIdentified = true;

    this.showFinsihedButton = this.checkForIsFinished();

    if(!(this.faceGroupLength == this.currentFaceIndex)){
      this.currentFaceIndex++;
    }
    this.setCurrentFace();
  }

  unsure(){

  }

  goBack(index){
    this.currentFaceIndex = index;
    this.setCurrentFace();
  }

  goNext(index){
    this.currentFaceIndex = index;
    this.setCurrentFace();
  }

  checkForIsFinished(){
    return !this.faceGroup.faces.some(face => !face.userConfirmed);
  }
}
