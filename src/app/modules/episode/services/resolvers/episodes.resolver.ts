import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {IResponseEpisode} from "../../interface";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<IResponseEpisode> {
  constructor(private episodeService : EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponseEpisode> {
    const page = route.queryParams['page']
    return this.episodeService.getAll(page);
  }
}
