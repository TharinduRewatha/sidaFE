import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class userData {
  username:string | undefined;
  name:string | undefined;
  phone:string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  score = "";

  constructor(
    private http: HttpClient
  ) { }

  GetLastID(){
    this.http.get<any>('').subscribe(data => {
        console.log(data);
    });
  }

  GetScore(){
    this.http.get<any>('http://mindfleet.eastus.cloudapp.azure.com:5001/api/user/totalmarks/64667517df5baf4ff3889945').subscribe(data => {
        this.score = data;
        console.log(data);
    });
  }

  createUser(data:any){
    this.http.post<any>('', data, {}).subscribe(data => {
        console.log(data);
    });
  }

}
