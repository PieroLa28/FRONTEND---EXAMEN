import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  private API_SERVIDOR ="http://localhost:8080/api/vuelos";
  constructor(
    private httpClient: HttpClient
  ) { }
  public getallVuelos():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarVuelos`)
  }
}
