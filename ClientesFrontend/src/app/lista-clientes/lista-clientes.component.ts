import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-lista-clientes',
  imports: [CommonModule],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css',
  encapsulation: ViewEncapsulation.Emulated 
})

export class ListaClientesComponent implements OnInit {

  clientes: any[]= [];
  clienteSeleccionado: any = null;
  
  constructor(private clientesService: ClienteServiceService) {}
  
  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clientesService.obtenerClientes().subscribe(clientes => {
      console.log('Clientes cargados:', clientes);
      this.clientes = clientes
    });    
  }

  seleccionar(cliente: any): void {
    this.clienteSeleccionado = cliente;
    console.log('Cliente seleccionado:', cliente);
  }

  eliminarSeleccionado(): void {
    if (!this.clienteSeleccionado) return;
    console.log('Eliminando cliente:', this.clienteSeleccionado);

    if  (confirm(`¿Está seguro de eliminar a ${this.clienteSeleccionado.nombre} ${this.clienteSeleccionado.apellido}?`)) {
      this.clientesService.eliminarCliente(this.clienteSeleccionado.id).subscribe(()=> {
        this.clientes = this.clientes.filter(c => c.id !== this.clienteSeleccionado.id);
        this.clienteSeleccionado= null;
      });
        
    }

  } 

  trackByClienteId(index: number, cliente: any) {
    return cliente.id;
  }
}
  
  
  
