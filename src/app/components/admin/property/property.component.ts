import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {Location} from '@angular/common';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
adminId:string;
  properties:any;
  users:any;
  admin:any;
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

  details(propertyId:string){
  	this.router.navigate([propertyId],{relativeTo:this.activatedRoute});
  }
  activate(property:any){
  	property.valid = true;
  	property.validatedBy = this.admin;
  	this.propertyService.updateProperty(property._id,property)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = 'property is validated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot validate property';

          }
        );
	    
  }
  deactivate(property:any){
  	property.valid = false;
    property.validatedBy = {};
  	this.propertyService.updateProperty(property._id,property)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = 'property is deactivated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot deactivate property';

          }
        );    
  }
  back(){
    this._location.back();
  }

}
