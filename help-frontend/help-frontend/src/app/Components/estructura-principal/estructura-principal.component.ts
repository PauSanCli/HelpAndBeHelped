import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-estructura-principal',
  templateUrl: './estructura-principal.component.html',
  styleUrls: ['./estructura-principal.component.css']
})
export class EstructuraPrincipalComponent implements OnInit {

  constructor() {

    this.peticion();

   }

  eventos:any;


  public peticion(){

    axios.get('http://127.0.0.1:8000/api/getEventos', {}) .then(response =>{

      this.eventos = response.data;

    })

  }

  public formatData(data:any){

    

  }


  ngOnInit(): void {
  }

}
