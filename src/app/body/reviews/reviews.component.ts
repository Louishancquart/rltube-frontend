import {Component, Input, OnInit} from "@angular/core";

import "rxjs/add/operator/switchMap";
import {Review} from "../../../services/data";
import {ReviewService} from "../../../services/review.service";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";


@Component({
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    providers: [ ReviewService],
    styleUrls: ['reviews.component.css'],
})


export class ReviewsComponent implements OnInit {

  @Input() reviewService;

  reviewList: Review[];

  positiveReviewList: Review[];
  negativeReviewList: Review[];
  controversialReviewList: Review[];

  positiveRelevancePercentage: number;
  negativeRelevancePercentage: number;
  controversialRelevancePercentage: number;

   constructor( ) {

   }

  ngOnInit(): void {

    if ( !this.reviewService.reviewList ) {
      this.reviewService.getReviewList("L3cpFYNPYz8");
      console.log(" list: " + JSON.stringify(this.reviewService.reviewList));
    }

    this.reviewList = this.reviewService.fetchReviewList();

    this.positiveReviewList = this.reviewService.positiveReviewList;
    this.negativeReviewList = this.reviewService.negativeReviewList;
    this.controversialReviewList = this.reviewService.controversialReviewList;

    this.positiveRelevancePercentage = this.reviewService.positiveRelevancePercentage;
    this.negativeRelevancePercentage = this.reviewService.negativeRelevancePercentage;
    this.controversialRelevancePercentage = this.reviewService.controversialRelevancePercentage;
    console.log( "REVIEW LIST " + Array.from(this.reviewList).length);
    console.log( "positive % " + this.positiveRelevancePercentage);
    console.log( "negative % " + this.negativeRelevancePercentage);
    console.log( "contro % " + this.controversialRelevancePercentage);

  }




    addReview(type: string, referenceUrl: string, description: string ): void {
        if ( !referenceUrl || !type) { return; }
        if ( !description ) { description = ''; }

        const review: Review = new Review();

        review.videoId = referenceUrl;
        review.type = type;
        review.referenceUrl = referenceUrl;
        review.reviewedMediaUrl = this.reviewService.currentVideo;
        review.reviewedTimes = 1; // the new review is counted as reviewed already once by the contributor
        review.description = description;

         const obj = { "review": review};

        console.log(JSON.stringify(obj));

        this.reviewService.creates(obj);


        // {
        //   "review": {
        //     "videoId": "L3cpFYNPYz8",
        //       "type": "CONTROVERSIAL",
        //       "reviewedMediaUrl": "666",
        //       "referenceUrl": "https://google.com"
        //   }
        // }

     // {"review":{
      // "videoId":"TOTOTOTO",
      // "type":"POSITIVE","referenceUrl":"TOTOTOTO","reviewedMediaUrl":"L3cpFYNPYz8","reviewedTimes":1,"description":"COCOCOCO"}}


        //   {
        //     id: Date.now(),
        //     type: type.toUpperCase,
        //     referenceUrl: referenceUrl,
        //     reviewedMediaUrl: "L3cpFYNPYz8",
        //     reviewedTimes: 0,
        //     description: description,
        // };


    }


}
// id: number;
// type: string;
// referenceUrl: string;
// reviewedMediaUrl: string;
// reviewedTimes: number;
// description: string;
