import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ICharacter} from "../../interfaces";
import {CharacterService} from "../character.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersDetailsResolver implements Resolve<ICharacter> {

  constructor(private characterService: CharacterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter> {
    const {id} = route.params;
    return this.characterService.getById(id);
  }
}
