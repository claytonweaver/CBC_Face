import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, isDevMode } from '@angular/core';
import { CredentialResponse } from "./credential-response";
import { SimpleCrypto } from "simple-crypto-js"
import { CryptoService } from "../crypto-service/crypto.service";
@Injectable({
  providedIn: 'root',
})
export class CredentialService {
  rootPath = "internal-cbc-token-218115782.us-east-2.elb.amazonaws.com";

  constructor(private httpClient: HttpClient, private cryptoService: CryptoService) {
  }

  public async getTokenFromCredentials(email: string, password: string) {
    var tokenKey = this.cryptoService.encrypt(email + password);

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Accept': '*/*',
      'tokenKey': tokenKey

    });
    const tokenValue = await this.httpClient.request<string>('GET', this.rootPath, { responseType: 'json', headers: headers, }).toPromise();
  }
}
