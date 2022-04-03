import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {

  @Input() names:any;

  constructor() { }
  ngOnInit(): void {
  }

}
