import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {PropertyService} from "../../../../services/property.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

propertyId:string;
  adminId:string;
  property:any;
  admin:any;
  constructor(private userService: UserService, private propertyService: PropertyService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.propertyId = params['propertyId'];
		this.adminId = params['adminId'];
		this.userService.findUserById(this.adminId)
	  .subscribe(
	    (admin:any)=>{
	      this.admin = admin;
	      if(this.admin.role!='admin'){
	      	this.router.navigate(['profile',this.adminId,'menu']);
	      }
	    },
	    (error:any)=>{
	      console.log(error);

	    }
	    );
	this.propertyService.findPropertyById(this.propertyId)
	  .subscribe(
	    (property:any)=>{
	      this.property = property;
	    },
	    (error:any)=>{
	      console.log(error);

	    }
	    );
		}
	);
  }
  deleteProperty(propertyId:string){
  	this.propertyService.deleteProperty(this.propertyId)
	  .subscribe(
	    (done:any)=>{
	      this.router.navigate(['..'],{relativeTo:this.activatedRoute});
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
