import {Component, Inject, Input, OnInit} from '@angular/core';
import { DEFAULT_THEME } from './theme.orestaurant.he';
//import {THEME_TOKEN} from '../constants';
// const Smooch: any = require('smooch');
declare const Smooch: any;

@Component({
    selector: 'orestaurant-footer',
    template: `
        <footer class="footer">
            <div class='top-line'>
                <div class="link" *ngFor="let link of theme.footerLinks">
                    <a [href]="link.href" [innerHtml]="link.title"></a>
                </div>
                <div class="hasadna" >
                    <img class='hasadna-logo' src='assets/img/hasadna-logo.svg' alt='hasadna logo'>
                    <a class='hasadna-link' href="{{hasadnaUrl}}">הסדנא לידע ציבורי</a>
                </div>
            </div>
            <div class="bottom-line">
                <p>
                    <a href="https://github.com/antin/restaurants-sanitation-reports-site/">קוד האתר</a>
                    <span>זמין תחת רשיון MIT.</span>
                </p>
                <p>
                    <img src='assets/img/cc-by-sa.svg' alt='cc-by-sa logo'>
                    <span>על רוב תוכן האתר חל רישיון</span>
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 של Creative Commons</a>
                    <span>, אלא אם כן
                    <a [href]='about("licenses")'>צויין אחרת</a>
                    .</span>
                </p>
                <p>
                   <!-- <span *ngIf='theme.footerText' [innerHtml]='theme.footerText'></span>-->
                    <span >
                        {{theme.siteName}} הוא פרויקט של 
                        <a href="https://www.hasadna.org.il">הסדנא לידע ציבורי</a>
                        בהובלת <a href='https://www.linkedin.com/in/alonantin/'>אלון אנתין</a>                        
                    </span>
                </p>
            </div>
        </footer>
    `,
styles: [`
html {
    direction: rtl;
}

html, body {
  /*  max-width: 100%;
    overflow-x: hidden;*/
}

body {
    /*position: relative;*/
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
    min-width: 240px;    
    width: 60%;
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
export class orestaurantFooterComponent implements OnInit {
    public hasadnaUrl = 'http://www.hasadna.org.il/';
    public theme = DEFAULT_THEME.ORESTAURANT_NG2_COMPONENTS_THEME;

    @Input() helpWidget = true;

    //constructor (@Inject(THEME_TOKEN) public theme: any) { }

    about(hash: string) {
        let ret = '/about';
        //if (this.theme.themeId) {
        //    ret += '?theme=' + this.theme.themeId;
        //}
        if (hash) {
            ret += '#' + hash;
        }
        return ret;
    }

    ngOnInit() {
        // if (Smooch && this.helpWidget) {
        //     Smooch.init({
        //         appId: '579deb5e8975e33e008f7067',
        //         displayStyle: 'button',
        //         customText: {
        //           headerText: '?אפשר לעזור',
        //           inputPlaceholder: 'כתבו לנו הודעה...',
        //           sendButtonText: 'לשלוח',
        //           introductionText: 'אתם מוזמנים לשאול אותנו הכל ומישהו' +
        //             ' מצוות המתנדבים שלנו ישתדל לענות כמה שיותר מהר. ' +
        //             'מכיוון שאנו לא תמיד זמינים, אתם מוזמנים להשאיר לנו ' +
        //             'גם כתובת מייל בכדי שנוכל לחזור אליכם כשנראה את ההודעה.',
        //         },
        //     }).then(() => {
        //         console.log('Smooch init');
        //     });
        // }
    }
}
