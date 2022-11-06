import {Component, Input, OnInit} from '@angular/core';

import {ICharacter} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: ICharacter;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  getDetails() {
    this.router.navigate([this.character.id], {relativeTo: this.activatedRoute})
  }
}
