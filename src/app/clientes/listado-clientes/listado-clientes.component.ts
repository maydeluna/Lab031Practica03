import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {

  clientes$: Observable<Cliente[]> = new Observable<Cliente[]>();
  clientesSubscripcion: Subscription = new Subscription;
  clientes: Cliente[] =[
    
  ];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscripcion = this.clientes$.subscribe((response:Cliente[])=>{
      this.clientes =response;
    });
  }

  ngOnDestroy(){
    this.clientesSubscripcion.unsubscribe();
  }
  
  doBorrarCliente(cliente: Cliente){
    console.log('yeah', cliente)
    this.clientesService.borrarCliente(cliente);
  }
}
