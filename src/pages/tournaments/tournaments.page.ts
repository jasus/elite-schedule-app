import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteAPI } from '../../services/services';

@Component({
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(private  nav: NavController,
              private eliteAPI: EliteAPI,
              private loadingController: LoadingController) {

  }

  itemTapped($event, tournament){
    this.nav.push(TeamsPage, tournament);
  }

  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(() => {
      this.eliteAPI.getTournaments().then(data => {
          this.tournaments = data;
          loader.dismiss();
      });
    });

  }

}
