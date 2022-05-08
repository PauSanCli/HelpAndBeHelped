import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-evento-info',
  templateUrl: './evento-info.component.html',
  styleUrls: ['./evento-info.component.css']
})
export class EventoInfoComponent implements OnInit {

  ruta:string;
  evento:any;

  constructor() { 

    this.ruta  = window.location.href.split('/')[4]
    this.getEvento(this.ruta)


  }


  public getEvento(id:string){

    axios.get(`http://127.0.0.1:8000/api/getEvento/${id}`) .then(response =>{

      this.evento = response.data;
      console.log(this.evento)

    })

  }


  ngOnInit(): void {
  }

}
