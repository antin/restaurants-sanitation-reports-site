import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { AboutComponent } from './modules/about/pagse/about.component';


const appRoutes: Routes = [  
  {path: '',                  component: RestaurantsListComponent  },
  {path: 'restaurants-list',  component: RestaurantsListComponent},
  {path: 'about',             component: AboutComponent}
]


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
