import {Component, OnInit} from '@angular/core';

import {CharacterService} from "../../services";
import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: ICharacter[];
  charactersTotal: number;

  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.characterService.getAll().subscribe(value => {
      this.characters = value.results;
      this.charactersTotal = value.info.count;
    });
  }

}
