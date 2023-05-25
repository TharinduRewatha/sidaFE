import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService, userData } from '../../../services/apicalls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  user:string = "";
  name:string = "";
  phone:string = "";

  userData:userData = {
    username:"",
    name:"",
    phone:""
  }

  constructor(
    public router:Router,
    public apicalls:ApicallsService
  ) { }

  getInputUser(val:string)
  {
    this.user = val;
  }

  getInputName(val:string)
  {
    this.name = val;
  }

  getInputPhone(val:string)
  {
    this.phone = val;
  }

  checkInput(){
    if(this.user == "" || this.name == "" || this.phone == ""){
      return true;
    }else{
      return false;
    }
  }

  createUser(){
    this.userData.name = this.name;
    this.userData.username = this.user;
    this.userData.phone = this.phone;

    this.apicalls.createUser(this.userData);
    this.enter();
  }

  enter(){
    //create user on db and then redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}
