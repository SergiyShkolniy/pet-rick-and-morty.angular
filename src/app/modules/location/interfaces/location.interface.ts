export interface IResponseLocation {
  info: IResponseLocationInfo;
  results: ILocation[];
}

export interface IResponseLocationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  created: string;
  url: string;

}
