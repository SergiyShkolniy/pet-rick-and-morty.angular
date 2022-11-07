import { Component, OnInit } from '@angular/core';

import {LocationService} from "../../services";
import {ILocation, IResponseLocation} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: ILocation[];
  locationsTotal: number;
  pagesMax: number;
  page: number = 1;

  constructor(private locationService : LocationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['locations'] as IResponseLocation)
    ).subscribe((value) => {
      this.locations = value.results
      this.locationsTotal = value.info.count
      this.pagesMax = value.info.pages
      this.router.navigate([], {queryParams: {page: this.page}})
    })
  }

  next():void {
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
