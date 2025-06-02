
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteServiceService } from '../cliente-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-formulario-alta',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-alta.component.html',
  styleUrl: './formulario-alta.component.css'

})

export class FormularioAltaComponent {

  formulariocliente:  FormGroup;

  constructor(private form: FormBuilder, 
    private ClienteServiceService: ClienteServiceService,
    private router: Router ){
               
    this.formulariocliente= this.form.group({
      
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      direccion: ["", Validators.required]
    });
  }

  GuardarCliente() {  
  this.ClienteServiceService.agregarCliente(this.formulariocliente.value).subscribe({
    next: (clienteCreado) => {
      console.log('Cliente creado:', clienteCreado);
      this.router.navigate(['/clientes']); // ← mover esto acá
    },
    error: (error) => {
      console.error('Error al conectar con backend:', error);
      // podrías mostrar un mensaje de error al usuario
    },
  });
}
}
