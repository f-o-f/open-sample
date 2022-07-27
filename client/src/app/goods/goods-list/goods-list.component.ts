import { Component, OnInit } from '@angular/core';
import { Goods } from '../goods';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = [];
  constructor(
    private service: GoodsService
  ) { }

  ngOnInit(): void {
    this.goodsList = this.service.getGoodsList();
  }

}
