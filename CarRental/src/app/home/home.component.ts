import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  name = new FormControl('');

  info = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email:new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
    }
  }
}
