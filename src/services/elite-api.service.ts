import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

@Injectable()
export class EliteAPI {

  private baseURL = 'https://elite-schedule-app-i2-397f4.firebaseio.com';
  constructor(private http: Http) {}

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseURL}/tournaments.json`)
        .subscribe(res => resolve(res.json()));
    });
  }
}
