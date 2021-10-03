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
  firstName: string = null;
  lastName: string = null;
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
    if(!this.firstName || !this.lastName){
      this.showEmptyFieldsError = true;
    }
    else
    {
      this.face.firstName = this.firstName; 
      this.face.lastName = this.lastName; 
      this.showEmptyFieldsError = false;
      this.faceIdentified.emit(this.face);
    }    
  }

  next(){
    this.showEmptyFieldsError = false;
    this.goBack.emit(this.currentFaceIndex + 1);
  }

  back(){
    this.showEmptyFieldsError = false;
    this.goNext.emit(this.currentFaceIndex - 1);
  }

  ngOnInit(): void {
    this.firstName = this.face.firstName;
    this.lastName = this.face.lastName;
    this.showEmptyFieldsError = false;
  }

  ngOnChanges(){
    this.firstName = this.face.firstName;
    this.lastName = this.face.lastName;
    
  }

}
