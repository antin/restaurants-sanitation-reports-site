import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  theme_siteUrl ='https://antin.github.io/restaurants-sanitation-reports-site/';//'https//www.orestaurant.org/';
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
