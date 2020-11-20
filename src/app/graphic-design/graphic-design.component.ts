import { Component, OnInit } from "@angular/core";

import { Lightbox } from "ngx-lightbox";

import { CartService } from "../cart.service";

@Component({
  selector: "app-graphic-design",
  templateUrl: "./graphic-design.component.html",
  styleUrls: ["./graphic-design.component.css"]
})
export class GraphicDesignComponent implements OnInit {
  portfolioItems;
  _albums: any = [];
  impHeight = 357;

  constructor(private cartService: CartService, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getGraphicDesignPortfolio();
    this.cartService.getGraphicDesignPortfolio().subscribe(data => {
      console.log(data);
      this._albums = data;
    });
  }

  open(index: number): void {
    //open Lightbox

    this._lightbox.open(this._albums, index);
  }

  close(): void {
    //close Lightbox
    this._lightbox.close();
  }
}
