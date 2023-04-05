import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies-card',
  templateUrl: './technologies-card.component.html',
  styleUrls: ['./technologies-card.component.scss']
})
export class TechnologiesCardComponent implements OnInit {

  @Input() photo:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
