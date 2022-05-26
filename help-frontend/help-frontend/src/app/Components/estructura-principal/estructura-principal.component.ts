import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-estructura-principal',
  templateUrl: './estructura-principal.component.html',
  styleUrls: ['./estructura-principal.component.css']
})
export class EstructuraPrincipalComponent implements OnInit {

  filtro:any

  constructor() {

    this.filtro = sessionStorage.getItem('filtro');


    this.peticion();

   }

  eventos:any;


  public peticion(){

      console.log(this.filtro)

      if(this.filtro == undefined){

        this.filtro = 'Novedades'

      }

      axios.post('http://127.0.0.1:8000/api/searchEvento', { tipo:this.filtro }) .then(response =>{

        this.eventos = response.data;
        console.log(response.data);
  
      })

  }

  public formatData(data:any){

    

  }


  ngOnInit(): void {
  }

}
