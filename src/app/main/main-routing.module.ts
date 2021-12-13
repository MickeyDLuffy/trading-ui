import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {MainComponent} from "./main.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
        // loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
