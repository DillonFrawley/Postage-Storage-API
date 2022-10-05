import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  id = ""

  ngOnInit() { 
    // http-server -p 8081 -c-1 dist/w9ang -o
  }

}
