import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  count: number = 0; 

   clickCount(): void{
        this.count+=10
        }

  constructor() { }

  ngOnInit(): void {
  }

}
