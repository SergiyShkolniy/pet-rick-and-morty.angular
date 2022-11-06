import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import {CharacterService} from "./services";
import { CharacterDetailsComponent } from './components/character-details/character-details.component';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
