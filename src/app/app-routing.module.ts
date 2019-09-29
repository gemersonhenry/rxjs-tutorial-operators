import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-operators',
    pathMatch: 'full',
  },
  {
    path: 'create-operators',
    loadChildren: './business/create-operators/create-operators.module#CreateOperatorsModule',
  },
  {
    path: 'filter-operators',
    loadChildren: './business/create-operators/filter-operators.module#FilterOperatorsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
