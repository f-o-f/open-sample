import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  //goods :Goods[] = [];
  //goodslist :Goods[] = [];
  goods :Goods = new Goods("","",0,0,"");

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.goods = this.goodsService.getGoods(params['id']);
    });
  }

}
