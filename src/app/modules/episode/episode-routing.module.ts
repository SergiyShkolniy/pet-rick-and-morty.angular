import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";
import {EpisodesResolver} from "./services/resolvers/episodes.resolver";
import {EpisodeResolver} from "./services/resolvers/episode.resolver";

const routes: Routes = [
  {
    path: '', component: EpisodesComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange', resolve: {episodes: EpisodesResolver}
  },
  {
    path: ':id', component: EpisodeDetailsComponent, runGuardsAndResolvers: 'pathParamsChange', resolve: {episode: EpisodeResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {
}
