import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-inicio-principal',
  templateUrl: './inicio-principal.component.html',
  styleUrls: ['./inicio-principal.component.css']
})
export class InicioPrincipalComponent implements OnInit {

  usuarios:any[];



  constructor(public http: HttpClient) {

    this.usuarios=[];

  }



  public login(username:any, password:any){

    // this.http.post<any>('http://127.0.0.1:8000/api/login', {user:username.value, password:password.value}).subscribe(response => {

    //   console.log(response);

    // })


      axios.post('http://127.0.0.1:8000/api/login', {user:username.value, password:password.value}).then(function (response) {

        console.log(response)

      })




  }









  ngOnInit(): void {



  }


  

}
