import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {IEpisode} from "../../interface";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IEpisode> {
  constructor(private episodeService :EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisode> {
    const {id} = route.params;
    return this.episodeService.getById(id);
  }
}
