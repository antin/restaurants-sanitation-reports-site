import '../polyfills';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
//import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
//import { HttpModule } from '@angular/http';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {Component} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { AboutComponent } from './about/about.component';
import { orestaurantHeaderComponent } from 'src/components/ORestaurantHeaderComponent';
import { orestaurantsListComponent } from 'src/components/ORestaurantsListComponent';
import { orestaurantFooterComponent } from 'src/components/ORestaurantFooterComponent';
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

// https://stackoverflow.com/questions/59045961/there-is-a-signature-pad-for-angular-that-save-it-to-image
// https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts

//import {GoogleAnalyticsService} from './google-analytics/google-analytics.service';
//import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { ScrollingModule } from '@angular/cdk/scrolling';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,        
    RestaurantsListComponent, AboutComponent,   
    orestaurantHeaderComponent, 
    orestaurantsListComponent, 
    orestaurantFooterComponent,       
    //Ng2SearchPipeModule,
    ],
  imports: [        
    BrowserModule,    
    BrowserAnimationsModule,    
    FormsModule,    
    HttpClientModule,
    Ng2SearchPipeModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    //MatSliderModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ScrollingModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: RestaurantsListComponent},
      {path: 'restaurants-list', component: RestaurantsListComponent},
      {path: 'about', component: AboutComponent},      
    ]),
    ],
  providers: [    
    AppComponent,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  
 exports: [RouterModule]
})
export class AppModule { }
