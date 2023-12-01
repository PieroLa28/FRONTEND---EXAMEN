import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private API_SERVIDOR ="http://localhost:8080/api/reservas";
  constructor(
    private httpClient: HttpClient
  ) { }
  public getallReservas():Observable<any>{
    return this.httpClient.get(`${this.API_SERVIDOR}/listarReservas`)
  }

  public guardarReservas(reserva:any):Observable<any>{
    return this.httpClient.post(`${this.API_SERVIDOR}/insertarReservas`,reserva)
  }

  public eliminarReserva(id:any):Observable<any>{
    return this.httpClient.delete(`${this.API_SERVIDOR}/eliminarReserva/`+id)
  }

}
