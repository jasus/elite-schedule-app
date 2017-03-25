import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

import { GamePage } from '../pages';
import { EliteAPI } from '../../services/services';

@Component({
  templateUrl: 'team-detail.page.html',
  selector: 'team-detail.page.html'
})
export class TeamDetailPage {
  games: any[];
  team: any;
  teamStanding: any;
  private tournamentData: any;

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteAPI: EliteAPI) {

    this.init();
  }

  init(){
    this.team = this.navParams.data;
    this.tournamentData = this.eliteAPI.getCurrentTournament();

    this.games = _.chain(this.tournamentData.games)
      .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
      .map(g => {
        let isTeam1 = (g.team1Id === this.team.id);
        let opponentName = isTeam1 ? g.team2 : g.team1;
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
        return {
          id: g.id,
          location: g.location,
          locationId: g.locationId,
          team1: g.team1,
          team1Id: g.team1Id,
          team1Score: g.team1Score,
          team2: g.team2,
          team2Id: g.team2Id,
          team2Score: g.team2Score,
          time: Date.parse(g.time),
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs." : "at"),
          opponentName: opponentName
        };
      })
      .value();

      this.teamStanding = _.find(this.tournamentData.standings, { 'teamId': this.team.id });
  }


  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    }
    else {
      return "";
    }
  }

  gameClicked($event, game){
    let sourceGame = this.tournamentData.games.find(g => g.id === game.id);
    this.nav.parent.parent.push(GamePage, sourceGame);
  }


}
