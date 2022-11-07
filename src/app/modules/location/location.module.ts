import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationComponent } from './components/location/location.component';
import {LocationService} from "./services/location.service";


@NgModule({
  declarations: [
    LocationsComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule { }
