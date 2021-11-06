import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ServiceDates } from "./models/service-dates";
import { Injectable, isDevMode } from '@angular/core';
import { Attendance } from "./models/attendance";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class FaceService{
    
    rootPath = "https://attendanceapi.azurewebsites.net/api/ServicesController";
    token = "environment.apiKey";

    constructor(public httpClient: HttpClient){
    }

    getService(date: string, serviceName: string){
        console.log(this.token);
        
        const paramOptions = `date=${date}&serviceName=${serviceName}&code=${this.token}`;
        const params = new HttpParams({fromString: paramOptions});
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Accept': '*/*',

        });
        return this.httpClient.request<Attendance>( 'GET', this.rootPath, {responseType: 'json', headers: headers, params: params, }).toPromise();
    }

    getServiceDates(count: number){
        const paramOptions = `count=${count}&code=${this.token}`;
        const params = new HttpParams({fromString: paramOptions});
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Accept': '*/*',

        });
        return this.httpClient.request<ServiceDates>( 'GET', this.rootPath, {responseType: 'json', headers: headers, params: params, }).toPromise();
    }
}