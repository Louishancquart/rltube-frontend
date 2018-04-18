import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Review} from './data';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {current} from "codelyzer/util/syntaxKind";


@Injectable()
export class ReviewService {


    private _currentVideo: string;

    reviewList: Review[];

    positiveReviewList: Review[];
    negativeReviewList: Review[];
    controversialReviewList: Review[];

    positiveRelevance = 0;
    negativeRelevance = 0;
    controversialRelevance = 0;

    totalRelevance = 0;

    positiveRelevancePercentage = 0;
    negativeRelevancePercentage = 0;
    controversialRelevancePercentage = 0;

    private restUrl = ' http://localhost:8080/reviews';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    get currentVideo(): string {
      return this._currentVideo;
    }

    set currentVideo(value: string) {
      console.log("video ID is now :" + value);
       this._currentVideo = value;
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

    public getReviewsByReviewedMediaUrl(mediaUrl: string): Promise<Review[]> {
      return this.http.get(this.restUrl + '/' + mediaUrl)
        .toPromise()
        .then( response =>
          response.json() as Review[])
        .catch(this.handleError);
    }

    public creates(r: Review): Promise<Review> {
      console.log("review: \n", JSON.stringify(r));
        return this.http
            .post(this.restUrl, JSON.stringify(r), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Review)
            .then(res => {
              this.reviewList.push(res);
              this.updateLists();
            })
            .catch(this.handleError);
    }




  /**
   * Get the list of reviews related to a video Id ( hash ). it will be used to display reviews as a list in the the review component.
   * updateList is calle d on the end to cut the list into 3 according to their review type (positive, negative, controversial)
   * @param mediaUrl
   */
  getReviewList(mediaUrl: string ): void {
    if (mediaUrl === this._currentVideo) {
      return; // already updated so nothing to do
      // TODO: this if is uselesss and prevent updating the list with the new input as I think to check.
    }
    this.currentVideo = mediaUrl;

    this.getReviewsByReviewedMediaUrl(mediaUrl).then( reviews => {
      this.reviewList = reviews;
      this.updateLists();
    });

  }

    /**
     * updateList cut the list into 3 according to their review type (positive, negative, controversial)
     * then statistics of relevance are used
     */
    updateLists(): void {
      this.positiveReviewList = Array.from(this.reviewList).filter(review => review.type === 'POSITIVE');
      this.controversialReviewList = Array.from(this.reviewList).filter(review => review.type === 'CONTROVERSIAL');
      this.negativeReviewList = Array.from(this.reviewList).filter(review => review.type === 'NEGATIVE');
      this.calculateProgress();
    }

    /**
     * calculate statistics about weight of the 3 review lists to be displayed in progress bars
     */
    calculateProgress(): void {
      this.totalRelevance = this.positiveRelevance = this.negativeRelevance = this.controversialRelevance = 0;

      for ( const r of (this.reviewList as Review[])) {
        this.totalRelevance += r.reviewedTimes;
        switch (r.type) {
          case 'POSITIVE': {
            this.positiveRelevance += r.reviewedTimes;
            break;
          }
          case 'NEGATIVE': {
            this.negativeRelevance += r.reviewedTimes;
            break;
          }
          case 'CONTROVERSIAL': {
            this.controversialRelevance += r.reviewedTimes;
            break;
          }
          default: {
            console.log('rel: ', r.reviewedTimes, 'type:', r.type, 'total:', this.totalRelevance );
          }
        }
      }

      // set results on component variables
      this.positiveRelevancePercentage = Math.round((this.positiveRelevance / this.totalRelevance) * 1000) / 10;
      this.negativeRelevancePercentage = Math.round((this.negativeRelevance / this.totalRelevance) * 1000) / 10;
      this.controversialRelevancePercentage = Math.round((this.controversialRelevance / this.totalRelevance) * 1000) / 10;
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
