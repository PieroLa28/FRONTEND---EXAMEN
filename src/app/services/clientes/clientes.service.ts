import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private API_SERVIDOR= "http://localhost:8080/api/clientes";
  constructor(
    private httpClient: HttpClient
  ) { }
  public getallClientes():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarClientes`)
  }
}
