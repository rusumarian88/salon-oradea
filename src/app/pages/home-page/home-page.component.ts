import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/services/prices.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public priceServices:PricesService,


  ) { }

  ngOnInit(): void {
  }

}
