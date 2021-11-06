import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-select',
  templateUrl: './service-select.component.html',
  styleUrls: ['./service-select.component.css']
})
export class ServiceSelectComponent implements OnInit {

  serviceDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
