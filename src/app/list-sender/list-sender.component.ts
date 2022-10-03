import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list-sender',
  templateUrl: './list-sender.component.html',
  styleUrls: ['./list-sender.component.css']
})
export class ListSenderComponent implements OnInit{

  constructor(private dbService: DatabaseService) { }

  senderArray: any = [];

  ListAllSenders() {
    this.dbService.listSenders().subscribe(result => {
      this.senderArray = result;
    });
  }

  ngOnInit() {
    this.ListAllSenders();
  }

}
