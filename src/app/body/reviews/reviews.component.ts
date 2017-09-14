import {Component, Input, OnInit} from "@angular/core";

import "rxjs/add/operator/switchMap";
import {Review} from "../../../services/data";
import {ReviewService} from "../../../services/review.service";


@Component({
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    providers: [ ReviewService],
    styleUrls: ['reviews.component.css'],
})


export class ReviewsComponent {

  @Input() reviewService;
  //
  // private currentVideoUrl= "okokokokok";
  //
  //
  // reviewList: Review[];
  //
  // positiveReviewList: Review[];
  // negativeReviewList: Review[];
  // controversialReviewList: Review[];
  //
  // positiveRelevancePercentage: number;
  // negativeRelevancePercentage: number;
  // controversialRelevancePercentage: number;
  //
  //  // constructor( protected reviewService: ReviewService) {}
  //
  // ngOnInit(): void {
  //
  //   // if ( !this.reviewService.reviewList ) {
  //   //   this.reviewService.getReviewList("L3cpFYNPYz8");
  //   // }
  //
  //   this.reviewList = this.reviewService.reviewList;
  //
  //   this.positiveReviewList = this.reviewService.positiveReviewList;
  //   this.negativeReviewList = this.reviewService.negativeReviewList;
  //   this.controversialReviewList = this.reviewService.controversialReviewList;
  //
  //   this.positiveRelevancePercentage = this.reviewService.positiveRelevancePercentage;
  //   this.negativeRelevancePercentage = this.reviewService.negativeRelevancePercentage;
  //   this.controversialRelevancePercentage = this.reviewService.controversialRelevancePercentage;
  // }





    addReview(type: string, referenceUrl: string, description: string ): void {
        if ( !referenceUrl || !type) { return; }
        if ( !description ) { description = ''; }

        const review: Review = new Review();


        review.type = 'POSITIVE';
        review.referenceUrl = referenceUrl;
        review.reviewedMediaUrl = this.reviewService.currentVideo;
        review.reviewedTimes = 1; // the new review is counted as reviewed already once by the contributor
        review.description = description;

        console.log(JSON.stringify(review));

        this.reviewService.create(review);


        //
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
