import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
  {
    path: 'create',
    loadChildren: './business/create-operators/create-operators.module#CreateOperatorsModule',
  },
  {
    path: 'filter',
    loadChildren: './business/filter-operators/filter-operators.module#FilterOperatorsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
