import { Component, OnInit } from '@angular/core';
import { DEFAULT_THEME } from '../../restaurants-list/components/theme.orestaurant.he';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

/**
 * base on https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjhlMGFjZjg5MWUwOTAwOTFlZjFhNWU3ZTY0YmFiMjgwZmQxNDQ3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzI1NjkxOTIsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzgyNTY5NDczODE5MzE1MzUxMCIsImVtYWlsIjoiYWxvbi5hbnRpbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6ImFsb24gYW50aW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNUxsaFZ4a2NzTUllRVptZEhPd2ltQmMyYnhIdkVocmM5UmFmNndybkk9czk2LWMiLCJnaXZlbl9uYW1lIjoiYWxvbiIsImZhbWlseV9uYW1lIjoiYW50aW4iLCJpYXQiOjE2NzI1Njk0OTIsImV4cCI6MTY3MjU3MzA5MiwianRpIjoiYTMwYWU1MThjMjU0ZTRjMzQxNjk2MTU0ZmNiOGMzZDlhOTNmNWY0MSJ9.lde2TYd7L7SE2JQjkxDlWP7Bsf0tQF2WLVi-MRN4fG7sdILOYRYXbOQWQox_Q4OmDReCxusBo_khbuStWi971clWY5GvdIpZ-uIytlUHPm9mmWyvM_RplMydvHzhb9R-0Nqge978hVYWbk3eROk1cTuBEcSaY5xYU5_TVRgJM53ObRFS8rKpYTPd_mIV-ijQ94xEfLtShe-2P4os1S0Xt7GXbBT3SDRMidkO3gTxcirnwaCil1fw2-V3xd9i21NqL7YQh2hQAEyxsyTkXgCEUIb5wBAU3UnnynMINXr4g4733sg-d9Y0jOXUTvLq699Hlr3O7_PG5EzAmU0J8rHekg
 * https://angular.io/guide/styleguide#file-tree
 */
export class AboutComponent implements OnInit {

  public theme = DEFAULT_THEME.ORESTAURANT_NG2_COMPONENTS_THEME;
    
  theme_siteUrl ='';//'https//www.orestaurant.org/';
  theme_siteLogo ='assets/35_Hotel_Icon_Has_Restaurant.gif';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
