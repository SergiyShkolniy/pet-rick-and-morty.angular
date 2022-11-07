import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../services/location.service";
import {ILocation} from "../../interfaces";

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

  constructor(private locationService : LocationService) { }

  ngOnInit(): void {
    this.locationService.getAll(this.page).subscribe(value => {
      this.locations = value.results
      this.locationsTotal = value.info.count;
      this.pagesMax = value.info.pages
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
