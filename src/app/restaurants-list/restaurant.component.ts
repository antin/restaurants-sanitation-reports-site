import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// i used this cool tool https://jsontodart.com/
export class restaurant   {
  
    address : string;
    category: string;
    city : string;
    id : number;
    lastupdate : string;
    mahuiot : string;
    name : string;        
    taarichKabalatRishayon : number;
    taarichTashlum : number;
    taarichTokef : number;
    restaurant_sanitation : restaurantSanitation;
};

// https://www.airpair.com/firebase/posts/structuring-your-firebase-data
export class restaurantSanitation {
  problems: string[];
  reportDate : string;
  reportPdfUrl : string;
  restaurantsId : number;
  sanitationStatus : string;
};