import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent implements OnInit  {

  constructor(private dbService: DatabaseService, private router: Router) { }

  senderArray: any = [];

  ListAllSenders() {
    this.dbService.listSenders().subscribe(result => {
      this.senderArray = result;
    });
  }

  DeleteSender(i:number) {
    let id = this.senderArray[i]._id
    this.dbService.deleteSender(id).subscribe(result => {
      this.router.navigate(["/listsender"]);
    })
  }

  ngOnInit() {
    this.ListAllSenders();
  }
}
