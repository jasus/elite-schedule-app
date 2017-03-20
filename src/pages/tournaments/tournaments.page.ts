import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteAPI } from '../../services/services';

@Component({
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(private  nav: NavController, private eliteAPI: EliteAPI) {

  }

  itemTapped($event, tournament){
    this.nav.push(TeamsPage, tournament);
  }

  ionViewDidLoad(){
    this.eliteAPI.getTournaments().then(data => this.tournaments = data);
  }

}
