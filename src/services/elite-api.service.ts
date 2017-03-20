import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteAPI {

  private baseURL = 'https://elite-schedule-app-i2-397f4.firebaseio.com';

  currentTournament: any = {};


  constructor(private http: Http) {}

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseURL}/tournaments.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  getTournamentData(tournamentId) : Observable<any>{
    return this.http.get(`${this.baseURL}/tournaments-data/${tournamentId}.json`)
      .map((response: Response) => {
        this.currentTournament = response.json();
        return this.currentTournament;
      });
  }
}
