import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import {EpisodeService} from "./services";


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ],
  providers: [
    EpisodeService
  ]
})
export class EpisodeModule { }
