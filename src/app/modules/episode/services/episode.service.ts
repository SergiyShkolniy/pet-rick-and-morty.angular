import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs";

import {IEpisode, IResponseEpisode} from "../interface";


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(page:number): Observable<IResponseEpisode> {
    return this.httpClient.get<IResponseEpisode>(urls.episode, {params:{page}});
  }

  getById(id: number | number[]): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }
}
