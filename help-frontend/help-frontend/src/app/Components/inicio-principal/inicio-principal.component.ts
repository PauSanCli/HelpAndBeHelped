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

      axios.post('http://127.0.0.1:8000/api/login', {username:username.value , password:password.value}) .then(response =>{

        console.log(response)
        this.checkUser(response.data)

        })

  }


  public checkUser(user:any){


    if(user == ""){

      this.incorrecta = "correcta";


        setTimeout(()=>{                           
          this.incorrecta = "incorrecta";
        }, 3000);


    }else{

      this.incorrecta = "incorrecta";
      this.correcta = "correcta";
      
      sessionStorage.setItem('usuario', user);

      setTimeout(()=>{    

        window.location.href = "welcome";

      }, 1500);


    }

  }





  ngOnInit(): void {



  }


  

}
