import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';


const appRoutes: Routes = [  
  {      path: '',component: RestaurantsListComponent  }

]


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
