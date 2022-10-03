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
    return this.http.get(urlBackend + "/parcel", httpOptions);
  }

  listSenders() {
    return this.http.get(urlBackend + "/sender", httpOptions);
  }

  deleteSender(id:string) {
    return this.http.delete(urlBackend + "/sender/" + id, httpOptions);
  }



}
