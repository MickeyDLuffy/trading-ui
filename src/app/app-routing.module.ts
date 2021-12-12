import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./error-components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
  path: '',
  redirectTo: 'site',
  pathMatch: 'full'
  },
  {
  path: 'app',
  loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'site',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
