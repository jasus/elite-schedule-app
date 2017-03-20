import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteAPI } from '../../services/services';

@Component({
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

  teams = [];

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteAPI: EliteAPI) {

  }

  ionViewDidLoad(){
    let selectedTournament = this.navParams.data;

    this.eliteAPI.getTournamentData(selectedTournament.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }

}
