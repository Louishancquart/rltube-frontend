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



  constructor( protected reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviewList('L3cpFYNPYz8');
  }




}
