import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Review} from './data';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class ReviewService {

    private restUrl = 'http://localhost:8080/rely-api/';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});


    public reviewList: Review;
    public reviewSTR: string;

    constructor(private http: Http) {
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    public getReview(): Promise<Review[]> {
      return this.http.get(this.restUrl)
        .toPromise()
        .then( response =>
          response.json() as Review[])
        .catch(this.handleError);
    }

    public create(r: Review): Promise<Review> {
        return this.http
            .post(this.restUrl, JSON.stringify(r), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Review)
            .catch(this.handleError);
    }





    // getReviews(): Observable<Review[]> {
    //   return this.http.get(this.restUrl)
    //     .map(res => {
    //       return res.json().results.map(item => {
    //         return new Review(
    //           item.id,
    //           item.type,
    //           item.reviewedMediaUrl,
    //           item.referenceUrl,
    //           item.reviewedTimes,
    //           item.description
    //         );
    //       });
    //     });
    // }


    // getDocuments(): Promise<RDocument[]> {
    //     return this.http.get(this.documentsUrl)
    //         .toPromise()
    //         .then(response => response.json().data as RDocument [])
    //         .catch(this.handleError);
    // }

    // getDocumentsByType(type: string): Promise<RDocument[]> {
    //         return this.getDocuments().then(docs => docs.filter(doc => doc.type === type) as RDocument[]);
    //     }



}
