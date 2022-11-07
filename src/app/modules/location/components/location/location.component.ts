import {Component, Input, OnInit} from '@angular/core';

import {ILocation} from "../../interfaces";




@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input()
  location: ILocation;
  // resident: number[];
  // char: any;


  constructor() {
  }

  ngOnInit(): void  {
  //    this.resident = this.location.residents.map(value => +value.split('/').reverse()[0])
  //   this.characterService.getById(this.resident.slice(0,5)).subscribe(value => {
  //     this.char = value
  //   })
  }

}
