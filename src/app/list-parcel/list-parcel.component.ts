import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list-parcel',
  templateUrl: './list-parcel.component.html',
  styleUrls: ['./list-parcel.component.css']
})
export class ListParcelComponent implements OnInit {

  parcelArray: any = [];

  constructor(private dbService: DatabaseService) { }

  ListAllParcels() {
    this.dbService.listParcels().subscribe(result => {
      this.parcelArray = result;
    });
  }

  ngOnInit() {
    this.ListAllParcels();
  }

}
