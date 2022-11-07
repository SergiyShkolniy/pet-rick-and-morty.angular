import { Component, OnInit } from '@angular/core';
import {map} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {IEpisode, IResponseEpisode} from "../../interface";
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

  constructor(private episodeService :EpisodeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['episodes'] as IResponseEpisode)
    ).subscribe((value) => {
      this.episodes = value.results
      this.episodesTotal = value.info.count
      this.pagesMax = value.info.pages
      this.router.navigate([], {queryParams: {page: this.page}})

    })
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
