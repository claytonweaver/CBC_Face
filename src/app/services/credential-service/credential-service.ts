import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, isDevMode } from '@angular/core';
import { environment } from "src/environments/environment";
import { CredentialResponse } from "./credential-response";

@Injectable({
  providedIn: 'root',
})
export class CredentialService{
  rootPath = "https://66rc7oiw94.execute-api.us-east-2.amazonaws.com/Prod/api/auth";

  constructor(public httpClient: HttpClient){
  }

  getTokenFromCredentials(email: string, password: string){
      // email=jweaver@cbctrenton.com&password=cbc3700Benson
      const paramOptions = `email=${email}&password=${'cbc3700Benson'}`; //fixme: fix this password
      const params = new HttpParams({fromString: paramOptions});
      const headers = new HttpHeaders({
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Credentials': 'true',
          'Accept': '*/*',

      });
      return this.httpClient.request<CredentialResponse>( 'GET', this.rootPath, {responseType: 'json', headers: headers, params: params, }).toPromise();
  }
}
