import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeComponent } from './take/take.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'take',
    pathMatch: 'full',
  },
  {
    path: 'take',
    component: TakeComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterOperatorsRoutingModule { }
