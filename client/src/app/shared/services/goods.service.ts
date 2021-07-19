import { Injectable } from '@angular/core';
import { Goods } from '../models/goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  goodsList:Goods[] = [
    new Goods("OOTP","1",100,20,"baseball simulation game"),
    new Goods("FM","2",70,50,"football simulation game"),
    new Goods("Cites","3",120,120,"Create original city game"),
    new Goods("EU4","4",75,85,"King in the middle age game"),
    new Goods("HoI4","5",62,115,"President in the WW2 game"),
  ];

  constructor(){}

  getGoodsList(): Goods[] {
    return this.goodsList;
  }

  getGoods(id: string): Goods {
    return <Goods>this.goodsList.find(goodsList => goodsList.goods_id === id);
  }

  addGoods(goods:Goods):void{
    this.goodsList.push(goods);
    console.log(goods);
  }

  setGoods(goods:Goods):void {
    console.log("setGoods");
    for (let i = 0; i < this.goodsList.length; i++) {
      if (this.goodsList[i].goods_id == goods.goods_id) {
        this.goodsList[i] = goods;
      }
    }
  }
}
