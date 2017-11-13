import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId:string;
  user:any;
  username:string;
  email:string;
  valid:boolean;
  firstName:string;
  lastName:string;
  phone:string;
  dob:string;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.userId = params['userId'];
		}
	);
	this.userService.findUserById(this.userId)
  .subscribe(
    (user:any)=>{
      this.user = user;
      this.username = this.user['username'];
      this.email = this.user['email'];
      this.firstName = this.user['firstName'];
      this.lastName = this.user['lastName'];
      this.valid = this.user['valid'];
      this.phone = this.user['phone'];
      this.dob = this.user['dob'];
    },
    (error:any)=>{
      console.log(error);

    }
    );
	
	}
  update(){
    this.errorFlag = false;
    this.messageFlag = false;
    
      this.user['email'] = this.email;
      this.user['firstName'] = this.firstName;
      this.user['lastName'] = this.lastName;
	  this.user['phone'] = this.phone;
      this.user['dob'] = this.dob;      
      
      this.userService.updateUser(this.userId,this.user)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = 'informations are updated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot update informations';

          }
        );
  	}
  	goToMenu(){
      //redirect to menu
        this.router.navigate(['menu'],{relativeTo:this.activatedRoute});
  	}
  	logout(){
  		//redirect to home
        this.router.navigate(['/']);
  	}
}