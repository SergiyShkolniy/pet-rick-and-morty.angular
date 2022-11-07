import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IResponseLocation} from "../../interfaces";
import {LocationService} from "../location.service";

@Injectable({
  providedIn: 'root'
})
export class LocationsResolver implements Resolve<IResponseLocation> {
  constructor(private locationService: LocationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponseLocation> {
    const page = route.queryParams['page']
    return this.locationService.getAll(page);
  }
}
