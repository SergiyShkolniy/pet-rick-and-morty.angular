import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../configs";
import {IResponseLocation} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<IResponseLocation> {
    return this.httpClient.get<IResponseLocation>(urls.location, {params: {page}});
  }
}
