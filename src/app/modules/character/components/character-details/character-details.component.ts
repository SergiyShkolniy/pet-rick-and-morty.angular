import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICharacter} from "../../interfaces";
import {CharacterService} from "../../services";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: ICharacter;

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.characterService.getById(id).subscribe(value => this.character = value)
    })
  }

}
