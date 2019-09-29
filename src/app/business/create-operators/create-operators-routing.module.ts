import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { CreateOperatorsComponent } from './create-operators.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-operators',
    pathMatch: 'full'
  },
  {
    path: 'create-operators',
    component: CreateOperatorsComponent,
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOperatorsRoutingModule { }
