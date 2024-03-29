import {Component,
  Inject,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener} from '@angular/core';
import { DEFAULT_THEME } from './theme.orestaurant.he';

//import {THEME_TOKEN, LANG_TOKEN} from '../constants';

@Component({
    selector: 'app-orestaurant-header',
    template: `
          <header aria-label='homepage' >
  <div class="logo">
    <a [href]="theme.siteUrl" [style.background-image]='"url(" + theme.siteUrl + theme.siteLogo + ")"'>
    </a>  
  </div>
  <div  *ngIf='showSearchBar'  data-test-id="divRestaurantsSearch" class="search"  >    
    <input id="insRestaurantsSearch" [(ngModel)]="searchValue"
    (keyup)="doSearch(searchValue)"
          (keyup.backspace)="doSearch(searchValue)"
    type="text" placeholder="חיפוש לפי עיר או שם מסעדה?"   >
  </div>
 <div class="menu-links">
  <ng-container *ngFor="let link of theme.headerLinks">
    <a [href]="link.href" [innerHtml]='link.title' target='_blank'></a>
  </ng-container>
</div>
</header>
    `,
styles: [`
html {
    direction: rtl;
}

html, body {
   /* max-width: 100%;
    overflow-x: hidden;*/
}

body {
/*    position: relative; */
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
    margin-right: 40px;
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
    /*min-width: 240px;    */
    width: 25%;
    display: flex;
    justify-content: center;
}

div.restaurants-details {
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow*/
    display: inline-block;
    vertical-align: middle;
    align-items: center;
}
div.restaurants {
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow*/
    display: inline-block;
    vertical-align: middle;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 2px 22px 2px 22px;
    margin-right: 2% ;
}
`
]
})

export class orestaurantHeaderComponent {

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
   
    doSearch(term: string) {
      

      this.searchValue = term;
      //this.calcExternalUrl();

      this.search.emit(term);
  }


    switchLang(lang) {
      const param = 'lang=' + lang;
      let search = window.location.search;
      search = search.replace(RegExp('lang=[a-z]{2}'), param);
      if (search.indexOf(param) < 0) {
        if (search[0] === '?') {
          search += '&' + param;
        } else {
          search = '?' + param;
        }
      }
      window.location.search = search;
    }

    doNavigate(href: string) {
        window.open(href, '_blank');
    }
}
