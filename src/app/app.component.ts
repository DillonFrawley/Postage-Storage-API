import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dbService: DatabaseService) {}


  title = 'w9ang POMS';
  name = "";
  senderId = "";
  address = "";
  weight = 0;
  fragile = false;

  senderArray: any = [];
  parcelArray: any = [];

  currentSection = 4; //list all senders default section
  parcelFragileCheck = false;

  addNewParcel() {
    let data = { senderId: this.senderId, parcel:{ address: this.address, weight: this.weight, fragile: this.fragile}};
    this.dbService.addParcel(data).subscribe(result => {
      this.ListAllParcels();
    })
  }

  addNewSender() {
    let data = { name: this.name};
    this.dbService.addSender(data).subscribe(result => {
      console.log(result);
      this.ListAllSenders();
    })
  }

  ListAllSenders() {
    this.dbService.listSenders().subscribe(result => {
      this.senderArray = result;
      this.changeSection(4);
    });
  }
  ListAllParcels() {
    this.dbService.listParcels().subscribe(result => {
      this.parcelArray = result;
      this.changeSection(5);
    });
  }

  changeSection(section:number) {
    this.currentSection = section;
  }

  ngOnInit(): void {
    this.ListAllSenders();
    this.ListAllParcels();
  }


}
