import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../services/data';
import {ReviewService} from '../../services/review.service';

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

  constructor( protected reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getReviewList();
  }

  getReviewList(): void {
      this.reviewService.getReview().then( reviews => {
        this.reviewList = reviews;
      this.updateLists();
    });
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
