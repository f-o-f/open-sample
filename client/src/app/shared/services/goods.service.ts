import { Injectable } from '@angular/core';
import { Goods } from '../models/product';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  goods = [
    new Goods("カフェオレ","A1",6,180,"眠気を覚ますならこれ一本！"),
    new Goods("アクエリアス","A2",8,300,"風邪ひいたときの最強救世主"),
    new Goods("ビタミンウォーター","A3",15,500,"毎日飲んでも絶対に飽きない奇跡の水"),
  ];

  constructor() { }

  list(): Observable<Goods[]> {
    return of(this.goods);
  }

  get(id: number): Observable<Goods> {
    return of(this.goods[id - 1]);
  }

}
