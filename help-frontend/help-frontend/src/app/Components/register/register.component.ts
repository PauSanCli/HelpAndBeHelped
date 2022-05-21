import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { AbstractType, Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cartel:string = 'hidden';

  constructor() { }

  ngOnInit(): void {
  }




  public registro(username:any, correo:any, password:any){

    axios.post('http://127.0.0.1:8000/api/registro', {username:username.value , correo:correo.value, password:password.value}) .then(response =>{

        console.log(response)

        if(response.status == 200) {

          this.cartel = "show";

          setTimeout(()=>{    

            window.location.href = "/";
    
          }, 1500);


        }

      })

}

}
