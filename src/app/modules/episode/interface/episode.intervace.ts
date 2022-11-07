export interface IResponseEpisode {
  info: IResponseLocationInfo;
  results: IEpisode[];
}

export interface IResponseLocationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
