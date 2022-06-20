import {
  Component,
  Inject,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { restaurant } from 'src/app/restaurants-list/restaurant.component';
import { RestaurantsListService } from 'src/app/restaurants-list/restaurants-list.service';
import { DEFAULT_THEME } from './theme.orestaurant.he';

//import {THEME_TOKEN, LANG_TOKEN} from '../constants';

@Component({
  selector: 'orestaurants-list',
  template: `
    <cdk-virtual-scroll-viewport itemSize="15" class="example-viewport" >
      <div class="restaurants-root" *cdkVirtualFor="let restaurant of restaurants |filter:searchValue " data-test-id="MainRestaurantsListContent">
          <div class="restaurants-header" *ngIf="restaurant.reportRemarks == null && !reportSummaryIsGood(restaurant.reportSummary) "  data-test-id="divRestaurantsPicture"
            style="width: 230px;height: 230px; background-image:url('{{theme.siteUrl}}assets/w09.gif');" >&nbsp;
          </div>
          <div class="restaurants-header" *ngIf="restaurant.reportRemarks != null && !reportSummaryIsGood(restaurant.reportSummary)"  data-test-id="divRestaurantsPicture"
          style="width: 230px;height: 230px; background-image:url('{{theme.siteUrl}}assets/35_Hotel_Icon_Has_Restaurant.gif');" >&nbsp;
          </div>
          <div class="restaurants-header" *ngIf="reportSummaryIsGood(restaurant.reportSummary) "  data-test-id="divRestaurantsPicture"
          style="width: 230px;height: 230px; background-image:url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Buffet_Germany.jpg/173px-Buffet_Germany.jpg');" >&nbsp;
          </div>
          
          <div class="restaurants-body" data-test-id="divRestaurantsDetails"  >
            <h2 class="restaurant-name">{{restaurant.name}} &nbsp; </h2>
            <h3 class="restaurant-city" >{{restaurant.city}} &nbsp; </h3>
            <span class="restaurant-license" title="סטטוס רישיון:{{restaurant.hasLicense}}" style="span:hover:after { content: attr(title) }; "  data-test-id="divRestaurantsSanitationDetails"  > סטטוס רישיון:{{restaurant.hasLicense}}</span>
            <p *ngIf="true ||restaurant.dateOfReport != null"  data-test-id="divRestaurantsSanitationDetails"  >דוח לתאריך:{{restaurant.dateOfReport}}</p>
            <p class="restaurant-license" *ngIf="restaurant.restaurant_sanitation != null && restaurant.restaurant_sanitation.reportPdfUrl != null"  data-test-id="divRestaurantsSanitationDetails"  >קישור לדוח תברואה עדכני <a target="_blank" href="{{restaurant.restaurant_sanitation.reportPdfUrl}}">כאן.</a></p>
            <span class="restaurant-license" title="תקציר דוח תברואה:{{ restaurant.reportSummary}}"  *ngIf="restaurant.reportSummary != null"  data-test-id="divRestaurantsSanitationDetails"  >תקציר דוח תברואה:{{ restaurant.reportSummary}}</span>
            </div>
          <div class="restaurants-footer" data-test-id="divRestaurantsReports"  >
            <span title="דוח תברואה בהרחבה:{{ restaurant.reportRemarks}}" style="span:hover:after { content: attr(title) };" *ngIf="restaurant.reportRemarks != null"  data-test-id="divRestaurantsSanitationDetails"  ><b>בהרחבה:</b>{{ restaurant.reportRemarks}}</span>          
            <div *ngIf="restaurant.restaurant_sanitation != null && restaurant.restaurant_sanitation.problems != null" >
              <div  *cdkVirtualFor="let problem of restaurant.restaurant_sanitation.problems " >
              <div data-test-id="divRestaurantsSanitationDetails" class="" >בעיות שדווחו:{{problem}}</div>
            </div>
            </div>
        </div>
      </div>
    </cdk-virtual-scroll-viewport>
    `,
  styles: [`
.example-viewport {
  height: 800px;
  /*width: 95%;
  /*border: 1px solid black;*/
  display: grid;
    grid-template-columns: repeat(3, minmax(0px, 3fr));
    gap: 4rem;
}
restaurants-body
{
  span:hover:after { content: attr(title) };
}
div.restaurants-body {
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow*/
    /*display: inline-block;*/
    vertical-align: middle;

   /* display: flex;*/
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    padding: 1rem;
    position: relative;
    max-width:230px;
}
div.restaurants-root {
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow*/
    display: inline-block;
    vertical-align: middle;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 2px 2px 2px 2px;
    margin: 1% 2% 0 0;

    will-change: transform;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 0.325rem 0px, rgb(0 0 0 / 12%) 0px 0.325rem 0.325rem 0px;
    transition: box-shadow 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s, background 100ms ease-out 0s;

}
div.restaurants-header {
  z-index: 0;
    position: relative;
    -webkit-mask-image: -webkit-radial-gradient(center, rgb(255, 255, 255), rgb(32, 33, 37));
    border-radius: 0.5rem 0.5rem 0px 0px;
    overflow: hidden;
    margin: auto;
}
div.restaurants-footer {
    /*display: flex;*/
    -webkit-box-align: center;
    align-items: center;
    
    border-top: 0.0625rem dashed rgba(32, 33, 37, 0.12);
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.75rem;
    line-height: 1rem;
    font-style: normal;
    font-stretch: normal;
    text-transform: none;
    font-weight: 400;
    color: rgba(32, 33, 37, 0.64);
    padding: 3px ;
    margin: 3px ;
    min-height: 4rem;
    max-height:4rem;    
    max-width:230px;
}

.restaurant-name {
  min-height: 13px;
}
.restaurant-city {
  min-height: 10px;
  }
.restaurant-license{
  min-height: 8px;
  }
  
html {
    direction: rtl;
}

html, body {
   /* max-width: 100%;
    overflow-x: hidden;*/
}

body {
    /*position: relative; */
    /*background:url() center center no-repeat;*/
}

canvas.field-form {
    background-color: rgba(0, 0, 0, 0.1);
}


#form-wrapper {
    position: relative;
    user-select: none;
}

    #form-wrapper img {
        position: absolute;
    }

    #form-wrapper input.field-form {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        letter-spacing: 2px;
        border: none;
        outline: none;
        font-family: 'GveretLevin', 'Pangolin', sans-serif;
    }

    #form-wrapper canvas.field-form {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        cursor: hand;
    }

    #form-wrapper div.field-form {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

        #form-wrapper div.field-form div {
            position: absolute;
            display: inline-block;
            pointer-events: none;
            cursor: pointer;
            margin-left: -8px;
        }


#save-button {
    padding: 10px 50px;
    font-size: 24px;
}

/*.single-and-double-form {
    display: none;
    max-width: 280px;
}*/

.help-block {
    display: none;
}

.datepicker {
    direction: rtl;
}
.mat-input-element{
  text-align:right;
}
.mat-form-field-infix{
  width: 100%;
}
.btn-blue {
  width: 200px;
  height: 45px;
  background-color: rgb(15, 117, 189);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  justify-content: center;
  margin: 7px;
}

.btn-secondary {
  width: 200px;
  height: 45px;
  background-color: #545b62;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  justify-content: center;
  margin: 7px;
}

.btn-clean {
  width: 100px;
  height: 35px;
  background-color: rgb(15, 117, 189);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  justify-content: center;
  margin: 7px;
}


.disabled {
  cursor: not-allowed;
  background-color: gray;
}
.white-space-normal
{
  white-space: normal;
}


header div.menu-links a, header div.menu-links a:hover, header div.menu-links a:visited {
    color: #192841;
}
header div.menu-links a {
    margin-right: 20px;
    cursor: pointer;
}

header div.menu-links {

    white-space: nowrap;
    display: -webkit-box;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-flow: row-reverse;
    -webkit-box-pack: left;
    justify-content: left;

}
header {
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow*/
    display: flex;
    vertical-align: middle;
    align-items: center;
}

header div.logo a {
    width: 100%;
    height: 100%;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

header div.logo {
    width: 40px;
    height: 40px;
    padding: 2px 2px 2px 32px;
    margin-right: 2% ;
}

header div.search {
    min-width: 110px;
    width: 45%;
    display: flex;
    justify-content: center;
}




`
  ]
})

export class orestaurantsListComponent {

  public theme = DEFAULT_THEME.ORESTAURANT_NG2_COMPONENTS_THEME;

  //@Input() searchTerm: string;
  @Input() searchValue: string;
  @Input() isSearching: boolean;
  @Input() showSearchBar = false;
  @Output() search = new EventEmitter<string>();

  public showAuth = false;

  // if service has   searchValue filter by it throw name and city
  //searchValue : string;



  // constructor (@Inject(THEME_TOKEN) public theme: any,
  //              @Inject(LANG_TOKEN) public lang: any) {
  // this.showAuth = !theme.disableAuth;
  // }

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

  ngOnInit() {
    console.log("ngOnInit1->this.searchValue:" + this.searchValue);
    this.promiseRestaurants = this.service.getRestaurantsWithPromise();
    this.promiseRestaurants.then(
      //https://stackoverflow.com/questions/51194830/sort-array-of-object-by-object-field-in-angular-6
      restaurants => this.restaurants = restaurants.sort((a,b) => a.name != null && a.name.localeCompare(b.name)),
      error => this.errorMessage = error);
    console.log("ngOnInit2->this.searchValue:" + this.searchValue);
  }

  reportSummaryIsGood(reportSummary: string)
  {
    if(reportSummary == 'טובה')
      return true;
    if(reportSummary == 'טובה מאוד')
      return true;      
    if(reportSummary == 'תקין')
      return true;
    if(reportSummary == 'ליקוים תוקנו')
      return true;
      


    return false;
  }
  searchTermChanged(term: string) {
    console.log('STC', term);
    this.searchValue = term;
    //this.href = term;
  }

  public ngAfterViewInit() {
    //this.beResponsive();

  }

}
