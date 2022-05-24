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

  constructor() { 

    this.checkRol();
    this.usuario = sessionStorage.getItem('usuario')


  }

  ngOnInit(): void {
  }



  public addEvento(){



  }


  public checkRol(){


    if(sessionStorage.getItem('rol') == 'user'){

      window.location.href = "welcome";

    }else if(sessionStorage.getItem('rol') == null){

      window.location.href = "welcome";

    }

  }

}
