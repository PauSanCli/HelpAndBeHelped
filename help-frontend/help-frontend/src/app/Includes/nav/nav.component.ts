import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  event:string


  constructor() { 

    this.event = "hidden"

  }


  ngOnInit(): void {
  }



  public newEvento(){

    if(localStorage.getItem('rol') == 'admin'){

      this.event = "show"

    }

  }

}
