import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams }    from '@angular/common/http';
import {  restaurant } from '../models/restaurant.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import RestaurantJson from '../../../../data/restaurant.json';


@Injectable({
  providedIn: 'root'
})

export class RestaurantsListService {

  private url  = "https://restaurant-sanitation-2a8da-default-rtdb.europe-west1.firebasedatabase.app/restaurant.json";

    // if service has Errors
    public serviceHasError  = false;

  public re : restaurant ;
  private searchValue : string

constructor(private http: HttpClient) {
  this.re = new restaurant();
}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 //  https://www.concretepage.com/angular-2/angular-2-http-get-example
public getRestaurantsWithPromise() : restaurant[] {    
    /*return this.http.get(this.url).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
        */
        //src\data\restaurant.json
        //console.log("RestaurantJson:" + RestaurantJson);
        return this.filterRestaurantData(RestaurantJson);
}

public filterRestaurantData(dataRestaurant: restaurant[]) : restaurant[]
{
	return dataRestaurant.filter(object => {
		return object.id != null && object.name != null && object.name.length > 1;
	});
}

// https://codingbootcamps.io/resources/observables-vs-promises-whats-the-difference/
public getRestaurantsWithObservable() {
  return this.http.get(this.url).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
  )
}

  private extractData(res: any) {
    const body = res;
    // filter json by searchValue
    return body;
}
private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
}
private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
}

  postData(formData,step){
    //https://stackoverflow.com/questions/60508242/pass-the-data-to-next-step-in-component-based-mat-stepper

   
  }
}


