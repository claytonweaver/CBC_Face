import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { ServiceDates } from "./models/service-dates";

export class FaceService{
    
    rootPath = "https://attendanceapi.azurewebsites.net/api/";
    path = "https://attendanceapi.azurewebsites.net/api/ImageMappingController?date=03/27/2009&serviceName=MorningWorship&code=7tj28zqVXCL3wful5rvhU8Vu1NiqREhwaxxhsoRLvixAzUVDIaUM/g==";
    token = process.env.ApiKey;
    constructor(private httpClient: HttpClient){
    }

    getFaceGroup(date: string, serviceName: string){
        const faceGroup = this.httpClient.get(`${this.rootPath}/ImageMappingController?date=${date}`).pipe(map((response) => response));
    }

    getServiceDates(){
        const serviceDates = this.httpClient.get("http").pipe(map((response) => response));
    }
    
    getFaceServiceToken(){

    }
    

}