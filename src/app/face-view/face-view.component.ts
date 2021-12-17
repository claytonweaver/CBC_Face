import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  fullName: string = null;
  showEmptyFieldsError: boolean = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key.toLowerCase() == "arrowleft"){
      this.back();
    }
    if(event.key.toLowerCase() == "arrowright"){
      this.next();
    }
    if(event.key.toLowerCase() == "enter"){
      this.identify();
    }
  }

  constructor() {
  }

  identify(){
    if(!this.fullName){
      this.showEmptyFieldsError = true;
    }
    else
    {
      this.face.fullName = this.fullName;
      this.showEmptyFieldsError = false;
      this.faceIdentified.emit(this.face);
    }
  }

  unsure(){
    this.face.isIdentified = false;
    this.face.userConfirmed = false;
    this.face.userUnsure = true;
    this.next();
  }

  next(){
    this.showEmptyFieldsError = false;
    if(this.currentFaceIndex == this.faceGroupLength){
      return;
    }
    this.goNext.emit(this.currentFaceIndex + 1);
  }

  back(){
    if(this.currentFaceIndex == 0){
      return;
    }
    this.showEmptyFieldsError = false;
    this.goBack.emit(this.currentFaceIndex - 1);
  }

  ngOnInit(): void {
    this.fullName = this.face.fullName;
    this.showEmptyFieldsError = false;
  }

  ngOnChanges(){
    this.fullName = this.face.fullName;
  }
}
