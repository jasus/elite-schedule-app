import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { TeamHomePage } from '../pages';
import { EliteAPI } from '../../services/services';

@Component({
  templateUrl: 'teams.page.html'
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];

  constructor(private nav: NavController,
              private loadingController: LoadingController,
              private navParams: NavParams,
              private eliteAPI: EliteAPI) {

  }

  ionViewDidLoad(){
    let selectedTournament = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {

      this.eliteAPI.getTournamentData(selectedTournament.id).subscribe(data => {
        this.allTeams = data.teams;
        
        this.allTeamDivisions =
            _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map( item => _.zipObject(["divisionName", "divisionTeams"], item))
            .value();

        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loader.dismiss();
      });

    });

  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }

}
