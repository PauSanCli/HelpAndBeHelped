import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { 


    this.logout


  }


  public logout(){

    axios.get('http://127.0.0.1:8000/api/logout', {}) .then(response =>{

      window.location.href = '/';

    })

  }

  ngOnInit(): void {
  }

}
