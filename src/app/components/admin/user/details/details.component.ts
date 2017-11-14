import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {Location} from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId:string;
  adminId:string;
  user:any;
  admin:any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router, private _location: Location) { }


  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.userId = params['userId'];
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
	this.userService.findUserById(this.userId)
	  .subscribe(
	    (user:any)=>{
	      this.user = user;
	    },
	    (error:any)=>{
	      console.log(error);

	    }
	    );
		}
	);
	
  }
  deleteUser(userId:string){
  	this.userService.deleteUser(this.userId)
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
