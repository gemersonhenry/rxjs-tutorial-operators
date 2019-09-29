import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { CreateOperatorsComponent } from './create-operators.component';
import { IntervalTimeComponent } from './interval-time/interval-time.component';
import { FromOfComponent } from './from-of/from-of.component';
import { FromeventComponent } from './fromevent/fromevent.component';


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
      },
      {
        path: 'interval-time',
        component: IntervalTimeComponent,
        pathMatch: 'full',
      },
      {
        path: 'from-of',
        component: FromOfComponent,
        pathMatch: 'full',
      },
      {
        path: 'fromevent',
        component: FromeventComponent,
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
