import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent {

  constructor(private dbService: DatabaseService, private router: Router) { }

  name = "";

  addNewSender() {
    let data = { name: this.name};
    this.dbService.addSender(data).subscribe(result => {
      console.log(result);
      this.router.navigate(["/listsender"]);
    })
  }

}
