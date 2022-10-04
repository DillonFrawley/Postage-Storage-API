import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent{

  constructor(private dbService: DatabaseService, private router: Router) { }

  senderId = "";

  DeleteSender() {
    this.dbService.deleteSender(this.senderId).subscribe(result => {
      this.router.navigate(["/listsender"]);
    })
  }
}
