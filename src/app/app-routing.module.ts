import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./error-components/page-not-found/page-not-found.component";
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
