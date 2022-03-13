import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RestaurantsListService} from './restaurants-list.service';
//import { CDK_DESCRIBEDBY_ID_PREFIX } from '@angular/cdk/a11y';

// https://material.io/resources/icons/?icon=format_list_bulleted&style=baseline
//import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


import { restaurant } from './restaurant.component';
//import { searchValueFilterPipe } from './search-value-filter-pipe';

declare var gtag;

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
  searchValue : string;
  

  theme_siteUrl ='/';//'https//www.orestaurant.org/';
  theme_siteLogo ='../../assets/35_Hotel_Icon_Has_Restaurant.gif';

  headerLinks = [
    {
      "href": this.theme_siteUrl + "about/",
      "title": "מי אנחנו"
    },
    {
      "href": "http://www.hasadna.org.il/",
      "title": "הסדנא"
    },
    {
      "href": "https://www.jgive.com/new/he/ils/donation-targets/3268#donation-modal",
      "title": "תרמו לנו"
    }
  ];
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


  @ViewChild('stepper', { static: false }) private myStepper: MatStepper;

  /*
  personEssentialDetailsFormGroup = new FormGroup({
    cellular : new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    email : new FormControl('', [Validators.required, Validators.email]),    
  });
 */
  
  promiseRestaurants: Promise<restaurant[]>;
  public service: RestaurantsListService;
  restaurants: restaurant[] = [];
  errorMessage = '';
  data: any;
  EmpForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  constructor(private ServiceService: RestaurantsListService,
    //private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    ) {
      this.service = ServiceService;

     

    }

    // https://javascript.plainenglish.io/how-to-apply-a-filter-to-angular-for-loop-ngfor-in-html-5871a57273cc
    public updateSearch(event) {
      // if service has   searchValue filter by it throw name and city
      this.searchValue = event;
      console.log("this.searchValue:" + this.searchValue);
  }

  nextClicked(event) {
    // complete the current step
    //this.myStepper.selected.completed = true;
    // move to next step
    //this.myStepper.next();
  }

  public ngAfterViewInit() {
    this.beResponsive();
    
  }



  //https://github.com/atlanteh/israeli-id-validator/blob/master/index.js



  // set the dimensions of the signature pad canvas
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size');
   
  }

  public clear() {


  }

  ngOnInit() {
    console.log("ngOnInit1->this.searchValue:" + this.searchValue);
    this.promiseRestaurants = this.service.getRestaurantsWithPromise();
    this.promiseRestaurants.then(
      restaurants => this.restaurants = restaurants,
       error => this.errorMessage = error);
       console.log("ngOnInit2->this.searchValue:" + this.searchValue);
   }
  

  

  // https://medium.com/@ole.ersoy/custom-google-analytics-events-with-angular-214cbf954130
  

      SendAddToCartEvent(){
        //  this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
      }

  Save(step) {
    this.submitted = true;
     
        // https://stackoverflow.com/questions/60508242/pass-the-data-to-next-step-in-component-based-mat-stepper
    

     

  }

  handleError(error) {
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
