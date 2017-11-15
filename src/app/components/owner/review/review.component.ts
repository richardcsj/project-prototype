import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {ReviewService} from "../../../services/review.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class OwnerReviewComponent implements OnInit {

  ownerId:string;
  reviews:any;
  owner:any;
  constructor(private userService: UserService,private reviewService: ReviewService,private propertyService: PropertyService,
  	 private activatedRoute: ActivatedRoute, private router: Router,private _location: Location) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.ownerId = params['ownerId'];
		this.userService.findUserById(this.ownerId)
		  .subscribe(
		    (user:any)=>{
		      this.owner = user;
		      if(this.owner.role!='owner'){
		      	this.router.navigate(['profile',this.ownerId,'menu']);
		      }
		    },
		    (error:any)=>{
		      console.log(error);

		    }
		    );
		this.reviewService.findAllReviews()
			.subscribe(
				(reviews:any)=>{
					this.reviews = [];
					this.propertyService.findPropertiesByOwner(this.ownerId)
						.subscribe(
								(properties:any)=>{
									for(let i=0;i<reviews.length;i++){
										for(let j=0;j<properties.length;j++){
											if(reviews[i].property==properties[j]._id){
												this.reviews.push(reviews[i]);
											}
										}
									}
								}
							)
				},
				(error:any)=>{
					console.log(error);
				}
				)
  		});
  }
  back(){
    this._location.back();
  }

}
