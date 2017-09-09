import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../services/data';
import {ReviewService} from '../../services/review.service';


import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AppComponent} from "../app.component";



@Component({
  selector: 'app-body',
  providers: [ ReviewService],
  templateUrl: 'body.component.html'
})
export class BodyComponent implements OnInit {



  @Input() videoList;


  reviewList: Review[];
  positiveReviewList: Review[];
  negativeReviewList: Review[];

  controversialReviewList: Review[];
  positiveRelevance: number;
  negativeRelevance: number;
  controversialRelevance: number;

  totalRelevance: number;
  positiveRelevancePercentage: number;
  negativeRelevancePercentage: number;
  controversialRelevancePercentage: number;

  reviewString: string;

  //
  // review: Observable<Review>;
  // private searchTerms = new Subject<string>();


  // private _video = '';
  //
  // @Input()
  // set video(video: string) {
  //   this._video = (video && video.trim()) || '<no video set>';
  // }
  //
  // get video(): string { return this._video; }



  constructor( protected reviewService: ReviewService) {
    // super();
  }





  ngOnInit(): void {
    // this.currentVideoUrl = "https://www.youtube.com/embed/L3cpFYNPYz8";
    this.getReviewList();
    // this.reviewService.getReview().then( review => {
    //
    // this.review = review;
    // // this.updateLists();
  // });


  }


  // handleNewSelectedVideo(videoID: string): void {
  //   console.log("videoID:" + videoID);
  //    this.currentVideoUrl = 'https://www.youtube.com/embed/' + videoID;
  //   console.log("video URL:" + this.currentVideoUrl );
  // }

  getReviewList(): void {
      this.reviewService.getReview().then( reviews => {
        this.reviewList = reviews;

          // for ( const r of  reviews ){
          //     this.reviewList.push(r as Review);
        // }

      console.log("reviews:" + (reviews as Review[]).toString());
      this.updateLists();
    });

      // const r1: Review = new Review();
      // r1.id = 1;
      // r1.referenceUrl = 'reg';
      // r1.description = "desc";
      // r1.reviewedTimes = 21;
      // r1.reviewedMediaUrl = "referenceUrl";
      // r1.type = "totottype";
      //
      // this.reviewList[0] = r1;

  }


  updateLists(): void {
    this.positiveReviewList = this.reviewList.filter(review => review.type === 'POSITIVE');
    this.controversialReviewList = this.reviewList.filter(review => review.type === 'CONTROVERSIAL');
    this.negativeReviewList = this.reviewList.filter(review => review.type === 'NEGATIVE');
    this.calculateProgress();
  }

  calculateProgress(): void {


    this.totalRelevance = this.positiveRelevance = this.negativeRelevance = this.controversialRelevance = 0;

    for ( const r of (this.reviewList as Review[])) {
      this.totalRelevance += r.reviewedTimes;
      switch (r.type) {
        case 'POSITIVE': {
          console.log( "typeof r.reviewedTimes: " + typeof r);
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



    this.positiveRelevancePercentage = Math.round((this.positiveRelevance / this.totalRelevance) * 1000) / 10;
    this.negativeRelevancePercentage = Math.round((this.negativeRelevance / this.totalRelevance) * 1000) / 10;
    this.controversialRelevancePercentage = Math.round((this.controversialRelevance / this.totalRelevance) * 1000) / 10;

  }


}
