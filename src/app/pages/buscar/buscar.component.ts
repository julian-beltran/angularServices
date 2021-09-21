import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../_service/departamento.service'
import { MatTableDataSource } from '@angular/material/table';
import { Departamento } from 'src/app/_model/departamento';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  isExpanded = false;



  progressbar = false;

  // tslint:disable-next-line: typedef

  loadData() {

    this.progressbar = true;

    setTimeout(() => {

      this.progressbar = false;

    }, 920);

  }
  

  ELEMENT_DATA: Departamento[]=[];
  displayedColumns: string[] = ['idDepartamento','nombre','buscar'];
  dataSource = new MatTableDataSource<Departamento>(this.ELEMENT_DATA);


  constructor(private departamentosService: DepartamentoService) { }

  ngOnInit(): void {
    this.getDepartamentos();

  }

  public getDepartamentos(){
    let resp = this.departamentosService.listar();
    resp.subscribe(dato=>this.dataSource.data=dato as Departamento[])
  }

}
