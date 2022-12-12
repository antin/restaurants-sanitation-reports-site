// https://github.com/mzuccaroli/angular-google-tag-manager/blob/master/demo-application/src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
//import { CanonicalService } from './canonical.service';


//import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private meta:Meta,
    //private canonical: CanonicalService
    //private gtmService: GoogleTagManagerService,
  ) {
  }

  title = 'angular-google-tag-manager demo application';
  

  customEvent() {

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'button-click',
      data: 'my-custom-event',
    };
    //this.gtmService.pushTag(gtmTag);

    alert('this is a custom event');
  }

  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

       // this.gtmService.pushTag(gtmTag);
      }
    });
    this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2022-12-05', scheme: 'YYYY-MM-DD' },
      { name: 'keywords', content: 'מיזם מסעדה פתוחה מנגיש את נתוני דוחות התברואה שבוצעו לבתי אוכל בישראל' },
      { name: 'author', content: 'Alon Antin' },
      { name: 'robots', content: 'index, follow' }
    ]);     
  }
}
