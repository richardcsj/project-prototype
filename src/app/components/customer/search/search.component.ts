import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
customerId:string;
customer:any;
	type:string;
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private userService:UserService,private _location: Location) { }

  ngOnInit() {
  	this.activatedRoute.params
  	.subscribe(
  		(params: any) => {
  		this.customerId = params['customerId'];
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
  		})
  }

  searchByType() {
  	this.router.navigate(['../type',this.type],{relativeTo:this.activatedRoute});
  }
  back(){
    this._location.back();
  }
 

}
