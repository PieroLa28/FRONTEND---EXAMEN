import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes/clientes.service';
import { HotelesService } from '../services/hoteles/hoteles.service';
import { SucursalesService } from '../services/sucursales/sucursales.service';
import { VuelosService } from '../services/vuelos/vuelos.service';
import { ReservasService } from '../services/reservas/reservas.service';

@Component({
  selector: 'app-compon-5',
  templateUrl: './compon-5.component.html',
  styleUrls: ['./compon-5.component.css']
})
export class Compon5Component implements OnInit{
    //Declarando a nuestro formulario:
    reservasForm: FormGroup = new FormGroup({});

    //Creando arreglos que vamos a utilizar:
   clientes: any;
   hoteles: any;
   sucursales:any;
   vuelos:any;
   reservas:any;

   constructor(
    public fb: FormBuilder,
    public clientesService: ClientesService,
    public hotelesService: HotelesService,
    public sucursalesService: SucursalesService,
    public vuelosService: VuelosService,
    public reservasService: ReservasService,
    
    ){
  }
  ngOnInit(): void {
    this.reservasForm = this.fb.group({
      id:[''],
      clase: ['', Validators.required],
      vuelo: ['', Validators.required],
      cliente: ['', Validators.required],
      hotel: ['', Validators.required],
      sucursal: ['', Validators.required],
    })

    this.clientesService.getallClientes().subscribe(resp=>{
      this.clientes=resp;  
    },
    error=>{console.error(error)})

    this.hotelesService.getallAHoteles().subscribe(resp=>{
      this.hoteles=resp;  
    },
    error=>{console.error(error)})

    this.sucursalesService.getallSucursales().subscribe(resp=>{
      this.sucursales=resp;  
    },
    error=>{console.error(error)})

    this.vuelosService.getallVuelos().subscribe(resp=>{
      this.vuelos=resp;  
    },
    error=>{console.error(error)})

    this.reservasService.getallReservas().subscribe(resp=>{
      this.reservas=resp;  
    },
    error=>{console.error(error)})

  }

  guardar(): void{
    this.reservasService.guardarReservas(this.reservasForm.value).subscribe(resp=>{
      this.reservasForm.reset();
      this.reservas=this.reservas.filter((reserva: any)=> resp.id != reserva.id);
      this.reservas.push(resp);
    },
    error=>{console.error(error)
    })
  }
   /*Eliminando Libros */
   eliminar(reserva:any){
    this.reservasService.eliminarReserva(reserva.id).subscribe(resp=>{
      if(resp===true){
        this.reservas.pop(reserva);
      }
    })
   }
  
   editar(reserva:any){
    this.reservasForm.setValue({
      id:reserva.id,
      clase: reserva.clase,
      vuelo: reserva.vuelo,
      cliente: reserva.cliente,
      hotel: reserva.hotel,
      sucursal: reserva.sucursal,
    })
   }

}
