import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationsComponent} from "./components/locations/locations.component";
import {LocationsResolver} from "./services/resolvers/locations.resolver";

const routes: Routes = [
  {
    path: '', component: LocationsComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {locations: LocationsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
