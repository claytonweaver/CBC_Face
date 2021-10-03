import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Face } from '../models/face';

@Component({
  selector: 'app-face-view',
  templateUrl: './face-view.component.html',
  styleUrls: ['./face-view.component.css']
})
export class FaceViewComponent implements OnInit {

  @Input() face: Face;
  @Input() currentFaceIndex: number;
  @Input() faceGroupLength: number;
  @Output() faceIdentified: EventEmitter<Face> = new EventEmitter<Face>();
  @Output() goBack: EventEmitter<number> = new EventEmitter<number>();
  @Output() goNext: EventEmitter<number> = new EventEmitter<number>();
  firstName: string = null;
  lastName: string = null;


  constructor() { }

  identify(){
    this.face.firstName = this.firstName; 
    this.face.lastName = this.lastName; 
    this.faceIdentified.emit(this.face);
  }

  next(){
    this.goBack.emit(this.currentFaceIndex + 1);
  }

  back(){
    this.goNext.emit(this.currentFaceIndex - 1);
  }

  ngOnInit(): void {
    this.firstName = this.face.firstName;
    this.lastName = this.face.lastName;
  }

  ngOnChanges(){
    this.firstName = this.face.firstName;
    this.lastName = this.face.lastName;
  }

}
