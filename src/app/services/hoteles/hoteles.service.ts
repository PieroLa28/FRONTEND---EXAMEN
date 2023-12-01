import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  private API_SERVIDOR ="http://localhost:8080/api/hoteles";
  constructor(
    private httpClient: HttpClient
  ) { }
  public getallAHoteles():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarHoteles`)
  }
}
