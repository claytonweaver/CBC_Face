import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

export class FaceService{

    constructor(private httpClient: HttpClient){
    }

    getFaceGroup(){
        const faceGroup = this.httpClient.get("http").pipe(map((response) => response));
    }

    getServiceDates(){
        const serviceDates = [];
    }
    
    

}