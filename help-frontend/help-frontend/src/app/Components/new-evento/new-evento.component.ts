import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-new-evento',
  templateUrl: './new-evento.component.html',
  styleUrls: ['./new-evento.component.css']
})
export class NewEventoComponent implements OnInit {

  usuario: any;
  submit:any;
  descripcion:any;
  imagen:any;
  tipo:any;
  fecha:any;
  titulo:any;
  formFile:any;

  correcto:string;

  



  constructor() { 

    this.correcto = 'hidden'
    // this.checkRol();
    this.usuario = sessionStorage.getItem('usuario')

  }

  ngOnInit(): void {
  }



  public addEvento(){

    axios.post('http://127.0.0.1:8000/api/newEvento', {}) .then(response =>{


      this.correcto = 'show'


    })


  }


  public checkRol(){


    if(sessionStorage.getItem('rol') == 'user'){

      window.location.href = "welcome";

    }else if(sessionStorage.getItem('rol') == null){

      window.location.href = "welcome";

    }

  }

}
