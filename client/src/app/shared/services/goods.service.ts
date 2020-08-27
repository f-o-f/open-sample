import { Injectable } from '@angular/core';
import { Goods } from '../models/goods';
import { Observable, of } from 'rxjs/index';
import { stringify } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  goodslist = [
    new Goods('Angular入門書1', 'A0001',1,1,'最初の商品'),
    new Goods('Angular入門書2', 'A0002',2,2,'二番目の商品'),
    new Goods('Angular入門書3', 'A0003',3,3,'三番目の商品')
  ];
  goods = new Goods(null,null,null,null,null);
  constructor() { }
  
  list(): Observable<Goods[]> {
    return of(this.goodslist);
  }
  getgoods():Observable<Goods>{
    for(var i=0;i<this.goodslist.length;i++){
      if(this.goods.goods_id==this.goodslist[i].goods_id){
        return of (this.goodslist[i]); 
       }
    }
  }
  get(id:string):Observable<Goods>{
    for(var i=0;i<this.goodslist.length;i++){
      if(id==this.goodslist[i].goods_id){
        return of (this.goodslist[i]); 
       }
    }
    this.goodslist.push(this.goods);
    return of (this.goodslist[this.goodslist.length-1]);
  }
  set(goods:Goods):void{
    this.goodslist[this.goodslist.length-1] = goods;
  }

  keep(id:string){
    this.goods.goods_id = id;
  }
}
