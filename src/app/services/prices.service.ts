import { Injectable } from '@angular/core';

export interface price{
  photo?:string;
}

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  prices=[
    {
      photo:"/assets/price1.jpg",
    },
    {
      photo:"/assets/price2.jpg",
    },
    {
      photo:"/assets/price3.jpg",
    },
    {
      photo:"/assets/price4.jpg",
    },
    {
      photo:"/assets/price5.jpg",
    },
    {
      photo:"/assets/price6.jpg",
    }

  ]

  constructor() { }
}
