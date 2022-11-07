import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

import {CharacterService} from "../../services";
import {ICharacter, IResponseCharacter} from "../../interfaces";

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

  constructor(private characterService: CharacterService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['characters'] as IResponseCharacter)
    ).subscribe((value) => {
      this.characters = value.results
      this.charactersTotal = value.info.count
      this.pagesMax = value.info.pages
      this.router.navigate([], {queryParams: {page: this.page}})

    })
  }

  next(): void {
    if (this.page < this.pagesMax) {
      this.page += 1;
      this.ngOnInit()
    }
  }

  prev(): void {
    if (this.page > 1) {
      this.page -= 1;
      this.ngOnInit()
    }
  }
}
