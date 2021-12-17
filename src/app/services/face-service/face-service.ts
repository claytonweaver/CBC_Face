import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ServiceDates } from "./models/service-dates";
import { Injectable, isDevMode } from '@angular/core';
import { Attendance } from "./models/attendance";
import { environment } from "src/environments/environment";
import { Utils } from "../utils";

@Injectable({
  providedIn: 'root',
})
export class FaceService{
    token = "";
    rootPath = "https://66rc7oiw94.execute-api.us-east-2.amazonaws.com/Prod/api/services";

    constructor(public httpClient: HttpClient){
    }
    //https://66rc7oiw94.execute-api.us-east-2.amazonaws.com/Prod/api/services/12122021/MorningWorship
    getAttendance(date: Date, serviceName: string){
      const serviceDate = date.toLocaleDateString('en-US');
      const paramOptions = `date=${serviceDate}&serviceName=${serviceName}`;
        const params = new HttpParams({fromString: paramOptions});
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'x-api-key': `${this.token}`,
            'Accept': '*/*',

        });
        return this.httpClient.request<Attendance>( 'GET', this.rootPath, {responseType: 'json', headers: headers, params: params}).toPromise();
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

    setToken(token: string){
      this.token = token;
    }
}
