import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-text',
  templateUrl: './circle-text.component.html',
  styleUrls: ['./circle-text.component.scss']
})
export class CircleTextComponent implements OnInit {

  constructor() { }

  isGood: number = 1;

  @Input() cirtitle: string = "";
  @Input() circontent: string = "";
  @Input() cirlien: string = "";

  ngOnInit(): void {
  }

}
