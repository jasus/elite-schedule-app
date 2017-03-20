import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TeamsPage } from '../pages/teams/teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';
import { TeamDetailPage } from '../pages/team-detail/team-detail.page';
import { GamePage } from '../pages/game/game.page';
import {TeamHomePage} from "../pages/team-home/team-home.page";
import {StandingsPage} from "../pages/standings/standings.page";
import {EliteAPI} from "../services/elite-api.service";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteAPI
  ]
})
export class AppModule {}
