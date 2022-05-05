import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-inicio-principal',
  templateUrl: './inicio-principal.component.html',
  styleUrls: ['./inicio-principal.component.css']
})
export class InicioPrincipalComponent implements OnInit {

  usuarios:any[];
  correcta:string = "incorrecta";
  incorrecta:string = "incorrecta";

  


  constructor(public http: HttpClient) {

    this.usuarios=[];

  }



  public login(username:any, password:any){

      axios.post('http://127.0.0.1:8000/api/login', {username:username.value , password:password.value}).then(function (response) {

        sessionStorage.setItem('usuario', response.data);

      })

      if(sessionStorage.getItem('usuario') === undefined){

        this.incorrecta = "correcta";

      }else{

        this.correcta = "correcta";
        // window.location.href = "welcome";

      }
      

  }









  ngOnInit(): void {



  }


  

}
