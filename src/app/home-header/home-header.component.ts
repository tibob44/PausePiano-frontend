import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
let scrollTop: number = document.body.scrollTop;
let windowHeight: number = window.innerHeight;
let scrollHeight: number = document.body.scrollHeight;
 
let scrollPercent: number = (scrollTop / (scrollHeight - windowHeight)) * 100;
