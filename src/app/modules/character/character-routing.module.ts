import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";
import {CharactersResolver} from "./services/resolvers/characters.resolver";
import {CharactersDetailsResolver} from "./services/resolvers/characters-details.resolver";

const routes: Routes = [
  {
    path: '', component: CharactersComponent,runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {characters: CharactersResolver}
  },
  {
    path: ':id', component: CharacterDetailsComponent, runGuardsAndResolvers: 'pathParamsChange',resolve: {character: CharactersDetailsResolver}
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
