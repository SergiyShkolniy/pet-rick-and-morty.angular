import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../../character/interfaces";

@Component({
  selector: 'app-episode-characters',
  templateUrl: './episode-characters.component.html',
  styleUrls: ['./episode-characters.component.css']
})
export class EpisodeCharactersComponent implements OnInit {
  @Input()
  episodeCharacter: ICharacter;
  constructor() {
  }

  ngOnInit(): void {
  }

}
