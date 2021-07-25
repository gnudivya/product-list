import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '',redirectTo:'dashboard',pathMatch:'full'},
  { path: 'dashboard',component: DashboradComponent },
  { path: 'product-list', component: ProductListComponent}

  
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
