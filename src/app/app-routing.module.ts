import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TrainingsComponent } from './components/trainings/trainings.component';

const routes: Routes = [
{
  path: "trainings",
  component : TrainingsComponent
},
{
  path:'cart',component: CartComponent
},
{
  path:'',redirectTo:'trainings',pathMatch:'full'
},
{
  path:'404', component:NotFoundComponent
},
{
  path:'**',redirectTo:'/404'
},
{
  path: "customerForm", component : CustomerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
