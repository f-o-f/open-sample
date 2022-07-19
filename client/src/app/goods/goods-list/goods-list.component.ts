import { Component, OnInit } from '@angular/core';
import { goods } from '../../goods/goods';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  goods: any;

  constructor(
    // private goods: Goods
  ) { }

  ngOnInit(): void {
    this.goods = goods
  }

}
