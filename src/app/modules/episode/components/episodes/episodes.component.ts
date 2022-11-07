import { Component, OnInit } from '@angular/core';

import {IEpisode} from "../../interface";
import {EpisodeService} from "../../services";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: IEpisode[];
  episodesTotal: number;
  pagesMax: number;
  page: number = 1;

  constructor(private episodeService :EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getAll(this.page).subscribe(value => {
      this.episodes = value.results;
      this.episodesTotal = value.info.count;
      this.pagesMax = value.info.pages
    });
  }

  next(): void {
    if (this.page < this.pagesMax) {
      this.page += 1;
      this.ngOnInit()
    }
  }

  prev():void {
    if (this.page >1) {
      this.page -= 1;
      this.ngOnInit()
    }
  }

}
