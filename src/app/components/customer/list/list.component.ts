import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {ReviewService} from "../../../services/review.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
customerId:string;
  properties:any;
  property:any;
  users:any;
  customer:any;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  type:string;
  constructor(private userService: UserService,private propertyService: PropertyService,private reviewService: ReviewService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.customerId = params['customerId'];
		this.type = params['type'];
		this.userService.findUserById(this.customerId)
		  .subscribe(
		    (user:any)=>{
		      this.customer = user;
		      if(this.customer.role!='customer'){
		      	this.router.navigate(['profile',this.customerId,'menu']);
		      }
		    },
		    (error:any)=>{
		      console.log(error);

		    }
		    );
		this.propertyService.findAllProperties()
			.subscribe(
				(properties:any)=>{
					this.properties = properties;
					this.userService.findAllUsers()
						.subscribe(
								(users:any)=>{
									this.users = users;
									for(let i = 0;i<this.properties.length;i++){
										for(let j =0;j<this.users.length;j++){
											if(this.properties[i].owner._id === this.users[j]._id){
												this.properties[i].owner = this.users[j];
											}
											if(this.properties[i].customer._id === this.users[j]._id){
												this.properties[i].customer = this.users[j];
											}
										 }
										 if(this.type !=undefined && properties[i].type!=this.type){
											this.properties.splice(i,1);
											i--;
										 }
										}
									},
								(error:any)=>{
									console.log(error);
								}
							)
				},
				(error:any)=>{
					console.log(error);
				}
				)
  		});

  }
  details(property:any){
  	this.property = property;
  	this.reviewService.findReviewsForProperty(property._id)
  		.subscribe(
  			(reviews:any)=>{
  				this.property.reviews = reviews;
  			}
  			)
  }
  rent(property:any){
  	property.customer = {_id:this.customerId};
  	property.available = false;
  	this.propertyService.updateProperty(property._id,property)
  		.subscribe(
  			(res:any) => {           
            this.messageFlag = true;
            this.message = 'You rented property with ID '+property._id;

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot rent property';

          }
  			)

  }
  back(){
    this._location.back();
  }

}
