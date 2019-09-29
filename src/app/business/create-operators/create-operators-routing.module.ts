import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateObservablesComponent } from './create-observables/create-observables.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-observables',
    pathMatch: 'full',
  },
  {
    path: 'create-observables',
    component: CreateObservablesComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOperatorsRoutingModule { }
