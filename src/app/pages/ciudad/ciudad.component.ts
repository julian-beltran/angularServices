import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service'
import { MatTableDataSource } from '@angular/material/table';
import { ciudades } from 'src/app/_model/ciudades';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  
  
  ELEMENT_DATA: ciudades[] = [];
  displayedColumns: string[] = ['idCiudad','nombre'];
  dataSource = new MatTableDataSource<ciudades>(this.ELEMENT_DATA);

  constructor(private departamentosService: DepartamentoService) { }

  ngOnInit(): void {
    this.getCiudades();
  }

  public getCiudades(){
    let resp = this.departamentosService.listarCiudad();
    resp.subscribe(dato=>this.dataSource.data=dato as ciudades[])
  }

}
