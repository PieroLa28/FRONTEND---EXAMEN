import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private API_SERVIDOR ="http://localhost:8080/api/sucursales";
  constructor(
    private httpClient: HttpClient
  ) { }
  public getallSucursales():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarSucursales`)
  }
}
