import {Component} from '@angular/core';

import 'rxjs/add/operator/switchMap';
import {MdTabsModule} from "@angular/material";
import {BodyComponent} from "../body.component";


@Component({
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.css'],
})


export class ReviewsComponent extends BodyComponent {
    //
    // addDocument(name: string, url: string, type: string): void {
    //     if (!name || !url || !type) { return; }
    //
    //     let document = {
    //         id: Date.now(),
    //         name: name,
    //         url: url,
    //         relevance: 0,
    //         checked_times: 0,
    //         type: type,
    //     };
    //
    //     this.reviewService.create(document)
    //         .then(doc => {
    //             this.reviewList.push(doc);
    //             this.updateLists();
    //         });
    // }
    //

}
