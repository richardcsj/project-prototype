import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ReviewService} from "../../../services/review.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

adminId:string;
  reviews:any;
  admin:any;
  constructor(private userService: UserService,private reviewService: ReviewService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.adminId = params['adminId'];
		this.userService.findUserById(this.adminId)
		  .subscribe(
		    (user:any)=>{
		      this.admin = user;
		      if(this.admin.role!='admin'){
		      	this.router.navigate(['profile',this.adminId,'menu']);
		      }
		    },
		    (error:any)=>{
		      console.log(error);

		    }
		    );
		this.reviewService.findAllReviews()
			.subscribe(
				(reviews:any)=>{
					this.reviews = reviews;
				},
				(error:any)=>{
					console.log(error);
				}
				)
  		});
  }
  remove(reviewId:string){
  	this.reviewService.deleteReview(reviewId)
	  .subscribe(
	    (done:any)=>{
	      this.router.navigate(['.'],{relativeTo:this.activatedRoute});
	    },
	    (error:any)=>{
	      console.log(error);

	    }
	    );

  }
  back(){
    this._location.back();
  }

}
