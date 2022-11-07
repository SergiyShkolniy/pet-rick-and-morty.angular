import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICharacter} from "../../interfaces";


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: ICharacter;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({character}) => this.character = character)
  }

}
