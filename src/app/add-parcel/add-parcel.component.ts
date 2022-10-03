import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent {

  constructor(private dbService: DatabaseService, private router: Router) { }
  
  senderId = "";
  address = "";
  weight = 0;
  fragile = false;

  addNewParcel() {
    let data = { senderId: this.senderId, parcel:{ address: this.address, weight: this.weight, fragile: this.fragile}};
    this.dbService.addParcel(data).subscribe(result => {
      this.router.navigate(["/listparcel"]);
    })
  }

}
