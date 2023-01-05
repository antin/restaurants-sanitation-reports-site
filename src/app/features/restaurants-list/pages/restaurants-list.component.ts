import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {UntypedFormGroup} from '@angular/forms';
import {RestaurantsListService} from '../services/restaurants-list.service';
//import { CDK_DESCRIBEDBY_ID_PREFIX } from '@angular/cdk/a11y';

// https://material.io/resources/icons/?icon=format_list_bulleted&style=baseline
//import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


import { restaurant } from '../models/restaurant.model';
//import { searchValueFilterPipe } from './search-value-filter-pipe';
import { orestaurantHeaderComponent } from 'src/app/features/restaurants-list/components/ORestaurantHeaderComponent';
import { orestaurantsListComponent } from 'src/app/features/restaurants-list/components/ORestaurantsListComponent';

declare var gtag: any;

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css'],  
})
export class RestaurantsListComponent implements AfterViewInit {

  // if service has Errors
 hasError = false;

  // if service has Errors show them
 errorMsg : string;
  
 
   // if service has   searchValue filter by it throw name and city
   searchValue : string = "";

  footerLinks = [
    {
      "href": "/about",
      "title": "אודות"
    },
    {
      "href": "/about#team",
      "title": "הצוות"
    },
    {
      "href": "https://github.com/OpenBudget/BudgetKey/blob/master/documentation/UsingTheAPI.md",
      "title": "API"
    },
    {
      "href": "https://next.obudget.org/datapackages/sitemaps/sitemap.html",
      "title": "מפת האתר"
    },
    {
      "href": "http://www.hasadna.org.il/%d7%a6%d7%95%d7%a8-%d7%a7%d7%a9%d7%a8/",
      "title": "צרו קשר"
    },
    {
      "href": "https://github.com/OpenBudget/BudgetKey/issues/new",
      "title": "דווחו על תקלה"
    },
    {
      "href": "/about#privacy",
      "title": "מדיניות פרטיות"
    },
    {
      "href": "https://www.jgive.com/new/he/ils/donation-targets/3268#donation-modal",
      "title": "תרמו לנו"
    }
  ];

 //https://stackoverflow.com/questions/63565926/how-to-fix-cannot-read-property-todataurl-of-undefined-in-ngx-signaturepad
  // for convenience as we don't have a QueryList.index
  //https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.ts


  //@ViewChild('stepper', { static: false }) private myStepper: MatStepper;

  /*
  personEssentialDetailsFormGroup = new FormGroup({
    cellular : new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    email : new FormControl('', [Validators.required, Validators.email]),    
  });
 */
  /*
  promiseRestaurants: Promise<restaurant[]>;
  public service: RestaurantsListService;
  restaurants: restaurant[] = [];
  */
  errorMessage = '';
  data: any;
  EmpForm: UntypedFormGroup;
  submitted = false;
  EventValue: any = "Save";

  lat: number;
  lng: number;
  zoom: any;
  origin: any;
  destination: any
  
  constructor(private ServiceService: RestaurantsListService,
    //private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    ) {
 
    }

    ngOnInit() {
      this.getUserLocation();
   }

   getUserLocation() 
   {
      if (navigator.geolocation) 
      {
        // use api to find the current city? https://gps-coordinates.org/
       navigator.geolocation.getCurrentPosition(position => {
           this.lat = position.coords.latitude;
           this.lng = position.coords.longitude;
           console.log("User allow,this.lat:" + this.lat + " ;this.lng:" + this.lng)
         });
      }
      else 
      {
        console.log("User not allow")
      }
    }
   
    searchTermChanged(term: string) {
      console.log('STC', term);
      this.searchValue = term;
      
    }

    public ngAfterViewInit() {
      this.beResponsive();
      
    }
    

  nextClicked(event: any) {
    // complete the current step
    //this.myStepper.selected.completed = true;
    // move to next step
    //this.myStepper.next();
  }





  //https://github.com/atlanteh/israeli-id-validator/blob/master/index.js



  // set the dimensions of the signature pad canvas
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size');
   
  }

  public clear() {


  }

 

  

  // https://medium.com/@ole.ersoy/custom-google-analytics-events-with-angular-214cbf954130
  

      SendAddToCartEvent(){
        //  this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
      }

  Save(step: any) {
    this.submitted = true;
     
        // https://stackoverflow.com/questions/60508242/pass-the-data-to-next-step-in-component-based-mat-stepper
    

     

  }

  handleError(error: { error: string | any[]; status: any; message: any; }) {
    this.hasError = true;

    let errorMessage = '';
    if (error.error != undefined && error.error.length != undefined && error.error.length > 0 ) {
    //  if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `פירוט השגיאה: ${error.error}`;
        this.errorMsg = errorMessage;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    //this.errorMsg = errorMessage;
    return throwError(errorMessage);
}


}
