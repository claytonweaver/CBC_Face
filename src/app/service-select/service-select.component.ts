import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-select',
  templateUrl: './service-select.component.html',
  styleUrls: ['./service-select.component.css']
})
export class ServiceSelectComponent implements OnInit {
  serviceDate: Date;
  @Output() serviceDateSelected: EventEmitter<Date> = new EventEmitter<Date>()

  constructor() { }

  ngOnInit(): void {
  }

  enter(){
    this.serviceDateSelected.emit(this.serviceDate);
  }
}
