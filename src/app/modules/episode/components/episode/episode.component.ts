import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IEpisode} from "../../interface";
import {ICharacter} from "../../../character/interfaces";
import {CharacterService} from "../../../character/services";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input()
  episode: IEpisode;
  idCharacters: number[];
  episodeCharacters: ICharacter[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private characterService: CharacterService) {
  }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate([this.episode.id], {relativeTo: this.activatedRoute})
    this.idCharacters = this.episode.characters.map(value => +value.split('/').reverse()[0])
    this.characterService.getByIdMulti(this.idCharacters).subscribe(value => {
      this.episodeCharacters.push(value);
    })
  }

}
