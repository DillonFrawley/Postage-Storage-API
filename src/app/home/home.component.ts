import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = "POMS Week 10";
  subtitle = "Post Office Management System Frontend"

  ngOnInit(): void {
  }

}
