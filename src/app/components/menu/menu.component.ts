import { Component, OnInit } from '@angular/core';
import  {UserService} from '../../services/user.service';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userId:string;
	user:any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,private router : Router) { }

  ngOnInit() {
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.userId = params['userId'];
		this.userService.findUserById(this.userId)
		    .subscribe(
		      (user:any)=>{
		        this.user = user;
		      },
		      (error:any)=>{
		        console.log(error);
		      }
		    )
		} 
	);
	
  }

}
