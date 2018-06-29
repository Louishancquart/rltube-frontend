import {Component, Input, OnInit} from "@angular/core";

// import "rxjs/add/operator/switchMap";
import {Review} from "../../../services/data";
import {ReviewService} from "../../../services/review.service";

@Component({
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css'],
})


export class ReviewsComponent implements OnInit {

  reviewList: Review[];

  positiveReviewList: Review[];
  negativeReviewList: Review[];
  controversialReviewList: Review[];

  positiveRelevancePercentage: number;
  negativeRelevancePercentage: number;
  controversialRelevancePercentage: number;

   constructor( private reviewService: ReviewService ) { }

  ngOnInit(): void {

    console.log("INIT ");
   this.reviewService.getReviewsByReviewedMediaUrl("L3cpFYNPYz8").then(res => {
        this.reviewList = res as Review[];

      console.log(" list: " + this.reviewList.toString() );




     // this.reviewList = this.reviewService.fetchReviewList();

    this.positiveReviewList = this.reviewService.positiveReviewList;
    this.negativeReviewList = this.reviewService.negativeReviewList;
    this.controversialReviewList = this.reviewService.controversialReviewList;

    this.positiveRelevancePercentage = this.reviewService.positiveRelevancePercentage;
    this.negativeRelevancePercentage = this.reviewService.negativeRelevancePercentage;
    this.controversialRelevancePercentage = this.reviewService.controversialRelevancePercentage;

    console.log( "positive % " + this.positiveRelevancePercentage);
    console.log( "negative % " + this.negativeRelevancePercentage);
    console.log( "contro % " + this.controversialRelevancePercentage);
  })

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

         // const obj = { "review": review};

        // console.log(JSON.stringify(obj));

        this.reviewService.creates(review);


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
