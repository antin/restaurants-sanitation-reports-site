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


import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/legacy-checkbox';
//import { HttpModule } from '@angular/http';

//import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/checkbox';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {Component, isDevMode} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { AboutComponent } from './modules/about/pagse/about.component';
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
