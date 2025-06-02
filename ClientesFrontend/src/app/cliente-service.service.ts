import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private apiUrl= 'http://localhost:5207/api/Clientes'
  

  constructor(private http: HttpClient) { }

  agregarCliente(cliente: any): Observable<any> { 
    return this.http.post(this.apiUrl, cliente); 
    
  }

  obtenerClientes(): Observable<any> {
   return this.http.get<any[]>(this.apiUrl);
  }

  eliminarCliente(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

  



