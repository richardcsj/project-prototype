import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class OwnerPropertyComponent implements OnInit {
  @ViewChild('f') propertyForm: NgForm;
  //form properties
  propertyId:string;
  type:string;
  description:string;
  size:string;
  price:string;
  latitude:string;
  longitude:string;
  customer:any;
  //other properties
  ownerId:string;
  properties:any;
  users:any;
  owner:any;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  constructor(private userService: UserService,private propertyService: PropertyService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location) { }

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
		this.propertyService.findPropertiesByOwner(this.ownerId)
			.subscribe(
				(properties:any)=>{
					this.properties = properties;
					this.userService.findAllUsers()
						.subscribe(
								(users:any)=>{
									this.users = users;
									for(let i = 0;i<this.properties.length;i++){
										for(let j =0;j<this.users.length;j++){
											if(this.properties[i].customer._id === this.users[j]._id){
												this.properties[i].customer = this.users[j];
											}
										}
                    this.propertyService.updateProperty(this.properties[i]._id,this.properties[i])
                      .subscribe(
                        (res:any) => {           

                        },
                        (error:any) => {
                          
                        }
                      );
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
  save(){
  	let property = {type:this.type,description:this.description,
  					valid:false,available:true,size:this.size,price:this.price,
  					owner:{_id:this.ownerId},customer:{_id:""},latitude:this.latitude,longitude:this.longitude,validatedBy:""}
  	this.propertyService.createProperty(this.ownerId,property)
  		.subscribe(
  				(res:any) => {           
		            this.messageFlag = true;
		            this.message = 'Property created Successfully';

		          },
		          (error:any) => {
		            this.errorFlag = true;
		            this.errorMsg = 'cannot create property';

		          }
  			);
  }
  update(){
  	let property = {_id:this.propertyId,type:this.type,description:this.description,
  					valid:false,available:true,size:this.size,price:this.price,
  					owner:{_id:this.ownerId},customer:this.customer,latitude:this.latitude,longitude:this.longitude,validatedBy:""}
  	this.propertyService.updateProperty(property._id,property)
  		.subscribe(
  				(res:any) => {           
		            this.messageFlag = true;
		            this.message = 'Property Updated Successfully';

		          },
		          (error:any) => {
		            this.errorFlag = true;
		            this.errorMsg = 'cannot update property';

		          }
  			);
  }
  edit(property:any){
  	this.propertyId = property._id ;
  	this.type = property.type;
    this.description = property.description;
  	this.size = property.size;
  	this.price = property.price;
  	this.latitude = property.latitude;
  	this.longitude = property.longitude;
  	this.customer = property.customer;
  }
  back(){
  	this._location.back();
  }

}
