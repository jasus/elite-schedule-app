import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StandingsPage, TeamDetailPage } from '../pages';

@Component({
  templateUrl: 'team-home.page.html'
})
export class TeamHomePage {

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private nav: NavController) {

  }

}
