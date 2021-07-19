import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  goodsList :Goods[] = [];

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService
  ) { }

  ngOnInit(): void {
    this.goodsList = this.goodsService.getGoodsList();
  }

}
