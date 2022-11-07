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

  getAll(page: number): Observable<IResponseCharacter> {
    return this.httpClient.get<IResponseCharacter>(urls.character, {params: {page}});
  }

  getById(id: number | number[]): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`);
  }

  getByIdMulti(id: number[]): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`);
  }

}
