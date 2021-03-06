import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']
})
export class OwnerMenuComponent implements OnInit {

   userId:string;
  user:any;
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
    },
    (error:any)=>{
      console.log(error);

    }
    );
  }

}
