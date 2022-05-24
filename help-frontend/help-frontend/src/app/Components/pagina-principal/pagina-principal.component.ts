import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor() { 

    this.checkRol();

  }

  ngOnInit(): void {
  }

  public checkRol(){

    if(sessionStorage.getItem('rol') == null){

      window.location.href = "/";

    }

  }

}
