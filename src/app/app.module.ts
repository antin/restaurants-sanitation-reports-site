import '../polyfills';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/legacy-form-field';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
//import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';


import { RestaurantsListComponent } from './features/restaurants-list/pages/restaurants-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/legacy-checkbox';
//import { HttpModule } from '@angular/http';

//import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/checkbox';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {Component, isDevMode} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
/**
 * based on https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjhlMGFjZjg5MWUwOTAwOTFlZjFhNWU3ZTY0YmFiMjgwZmQxNDQ3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzI1NjkxOTIsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzgyNTY5NDczODE5MzE1MzUxMCIsImVtYWlsIjoiYWxvbi5hbnRpbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6ImFsb24gYW50aW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNUxsaFZ4a2NzTUllRVptZEhPd2ltQmMyYnhIdkVocmM5UmFmNndybkk9czk2LWMiLCJnaXZlbl9uYW1lIjoiYWxvbiIsImZhbWlseV9uYW1lIjoiYW50aW4iLCJpYXQiOjE2NzI1Njk0OTIsImV4cCI6MTY3MjU3MzA5MiwianRpIjoiYTMwYWU1MThjMjU0ZTRjMzQxNjk2MTU0ZmNiOGMzZDlhOTNmNWY0MSJ9.lde2TYd7L7SE2JQjkxDlWP7Bsf0tQF2WLVi-MRN4fG7sdILOYRYXbOQWQox_Q4OmDReCxusBo_khbuStWi971clWY5GvdIpZ-uIytlUHPm9mmWyvM_RplMydvHzhb9R-0Nqge978hVYWbk3eROk1cTuBEcSaY5xYU5_TVRgJM53ObRFS8rKpYTPd_mIV-ijQ94xEfLtShe-2P4os1S0Xt7GXbBT3SDRMidkO3gTxcirnwaCil1fw2-V3xd9i21NqL7YQh2hQAEyxsyTkXgCEUIb5wBAU3UnnynMINXr4g4733sg-d9Y0jOXUTvLq699Hlr3O7_PG5EzAmU0J8rHekg
 * and on https://angular.io/guide/styleguide#file-tree
 */
import { AboutComponent } from './features/about/pagse/about.component';
import { orestaurantHeaderComponent } from 'src/app/features/restaurants-list/components/ORestaurantHeaderComponent';
import { orestaurantsListComponent } from 'src/app/features/restaurants-list/components/ORestaurantsListComponent';
import { orestaurantFooterComponent } from 'src/app/features/restaurants-list/components/ORestaurantFooterComponent';
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

// https://stackoverflow.com/questions/59045961/there-is-a-signature-pad-for-angular-that-save-it-to-image
// https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts

//import {GoogleAnalyticsService} from './google-analytics/google-analytics.service';
//import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ],
  providers: [    
    AppComponent,
    //{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  
 exports: [RouterModule]
})
export class AppModule { }
