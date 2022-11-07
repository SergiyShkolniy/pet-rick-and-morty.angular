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
  pagesMax: number;
  page: number = 1;


  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.characterService.getAll(this.page).subscribe(value => {
      this.characters = value.results;
      this.charactersTotal = value.info.count;
      this.pagesMax = value.info.pages
    });
  }

  next(): void {
    if (this.page < this.pagesMax) {
      this.page += 1;
      this.ngOnInit()
    }
  }

  prev():void {
    if (this.page >1) {
      this.page -= 1;
      this.ngOnInit()
    }
  }
}
