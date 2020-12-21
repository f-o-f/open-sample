import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/product';
import { GoodsService } from '../../shared/services/goods.service';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  products: Goods;

  constructor(
    private goodsService: GoodsService, 
  ) { }

  ngOnInit() {
    this.goodsService.get(1).subscribe((products: Goods) => {
      this.products = products;
    });
  }

}
