import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IResponseCharacter} from "../../interfaces";
import {CharacterService} from "../character.service";


@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<IResponseCharacter> {

  constructor(private characterService: CharacterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponseCharacter> {
    const page = route.queryParams['page']
    return this.characterService.getAll(page);
  }
}
