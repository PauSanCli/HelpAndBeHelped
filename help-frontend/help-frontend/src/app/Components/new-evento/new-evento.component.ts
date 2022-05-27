import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-evento',
  templateUrl: './new-evento.component.html',
  styleUrls: ['./new-evento.component.css']
})
export class NewEventoComponent implements OnInit {

  usuario: any;
  submit:any;
  descripcion:any;
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

  formEvento = new FormGroup({

    titulo:new FormControl(''),
    descripcion:new FormControl(''),
    formFile:new FormControl('',),
    tipo:new FormControl(''),
    fecha:new FormControl(''),
    ubicacion: new FormControl(''),
    creador:new FormControl(sessionStorage.getItem('usuario')),

  });

  ngOnInit(): void {
  }



  public addEvento(form:any){

    axios.post('http://127.0.0.1:8000/api/newEvento', {form}) .then(response =>{

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
