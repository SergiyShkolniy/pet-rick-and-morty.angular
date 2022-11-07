import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs";
import {ILocation, IResponseLocation} from "../../location/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(page:number): Observable<IResponseLocation> {
    return this.httpClient.get<IResponseLocation>(urls.location, {params:{page}});
  }

  getById(id: number | number[]): Observable<ILocation> {
    return this.httpClient.get<ILocation>(`${urls.location}/${id}`);
  }
}
