import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {

  portfolioItems;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.portfolioItems = this.cartService.getGraphicDesignPortfolio();
  }

}