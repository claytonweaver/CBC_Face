import { Injectable } from '@angular/core';
import { SimpleCrypto } from "simple-crypto-js"

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  //can be anything, just always needs to be the same.
  private seed: string = "lkj2345lk23j4523l4k5j8asfasd0fg98u039845";

  public encrypt(text: string) {
    const simpleCrypto = new SimpleCrypto(this.seed);

    return simpleCrypto.encrypt(text);
  }

}
