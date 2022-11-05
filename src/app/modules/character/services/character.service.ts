import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, IResponseCharacter} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IResponseCharacter> {
    return this.httpClient.get<IResponseCharacter>(urls.character);
  }

  getById(id: number): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`);
  }

}
