import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../_model/departamento';
import { ciudades } from '../_model/ciudades';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url: string = environment.HOST + '/departamentos';

  constructor(private http: HttpClient) { }


  public listar() {
    return this.http.get<Departamento[]>(`${this.url}/listar`) 
  }

  public listarCiudad(){
    return this.http.get<ciudades[]>(`${this.url}/ciudad/listarPorDepartamnto/25`)

  }
}

