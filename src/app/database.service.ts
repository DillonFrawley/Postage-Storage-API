import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const urlBackend = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  addParcel(data:any) {
    return this.http.put( urlBackend + "/sender/parcel", data, httpOptions);
  }

  addSender(data:any) {
    return this.http.post(urlBackend + "/sender", data, httpOptions)
  }

  listParcels() {
    let url = "/parcel";
    return this.http.get(urlBackend + url, httpOptions);
  }

  listSenders() {
    let url = "/sender";
    return this.http.get(urlBackend + url);
  }



}
