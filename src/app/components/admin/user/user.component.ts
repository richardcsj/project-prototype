import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


adminId:string;
  users:any;
  admin:any;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
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
  	this.userService.findAllUsers()
  		.subscribe(
  			(users:any)=>{
  				this.users = users;
  			},
  			(error:any)=>{
  				console.log(error);
  			}
  			)
  		}
  	);
	
  }
  details(userId:string){
  	this.router.navigate([userId],{relativeTo:this.activatedRoute});
  }
  activate(user:any){
  	user.valid = true;
  	user.validatedBy = this.admin;
  	this.userService.updateUser(user._id,user)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = user.username+'\'s account is validated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot validate user';

          }
        );
	    
  }
  deactivate(user:any){
  	user.valid = false;
    user.validatedBy = {};
  	this.userService.updateUser(user._id,user)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = user.username+'\'s account is deactivated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot validate user';

          }
        );
	    
  }
  back(){
    this._location.back();
  }
}
