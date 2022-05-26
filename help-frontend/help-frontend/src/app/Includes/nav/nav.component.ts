import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  event:string
  eventos:any;
  usuario:any;



  constructor() { 

    this.usuario = sessionStorage.getItem('usuario');
    this.event = "hidden"
    this.newEvento()
    console.log(sessionStorage.getItem('rol'))

  }


  ngOnInit(): void {
  }



  public newEvento(){

    if(sessionStorage.getItem('rol') == 'admin'){

      this.event = "show"

    }

  }

  public loadEventos(filtro:string){

    sessionStorage.setItem('filtro', filtro);
    window.location.reload();


  }

}
