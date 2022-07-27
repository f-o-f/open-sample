import { Injectable } from '@angular/core';
import { Goods } from './goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  goodsList: Goods[] = [];
  constructor() {
    this.goodsList = [
      {
        name: '商品a',
        goods_id: '0000',
        size: 1,
        amount: 1,
        note: '説明',
      }
    ];
  }

  getGoodsList(): Goods[] {
    return this.goodsList;
  }

  getGoods(id: string): Goods | undefined {
    return this.goodsList.find(goods => goods.goods_id === id);
  }

  updateGoods(goods: Goods): void {
    for (let i = 0; i < this.goodsList.length; i++) {
      if (this.goodsList[i].goods_id === goods.goods_id) {
        this.goodsList[i] = goods;
      }
    }
  }

  createGoods(goods: Goods): void {
    this.goodsList.push(goods);
  }
}
