import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from "../pages";
import { EliteAPI } from "../../services/services";

@Component({
  templateUrl: 'game.page.html'
})
export class GamePage {

  game: any;

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteAPI: EliteAPI) {

  }

  ionViewDidLoad(){
    this.game = this.navParams.data;
    console.log(this.game);
  }

  teamTapped(teamId){
    let tournamentData = this.eliteAPI.getCurrentTournament();
    let team = tournamentData.teams.find(t => t.id === teamId);
    this.nav.push(TeamHomePage, team);
  }

}
