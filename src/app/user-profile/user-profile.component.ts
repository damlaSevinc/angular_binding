import { Component } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
/*
 class User {
  constructor(
    public namee: string,
    public firstName : string,
    public age : number,
    public quote : string,
    public photo : string
  ){}
  
  constructor(namee: string, firstName: string, age: number, quote: string, photo: string){
    this.namee = namee;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}
  */


export class UserProfileComponent {
user: User;
constructor(){
  this.user = new User('Doe','John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg' )
}

/*
user = {
name : 'Doe',
firstName : 'John',
age : 25,
quote : '',
photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
};

isPartVisible = true;

hideAge() {
  this.isPartVisible = false
}
*/

isAgeHidden = false;

hideAge() {
  this.isAgeHidden = !this.isAgeHidden
}
}
