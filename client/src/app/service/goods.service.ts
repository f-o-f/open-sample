import { Injectable } from '@angular/core';
import { goods } from '../goods/goods';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GoodsService {

  constructor(private http: HttpClient) { }

  getGoods(): Observable<any>{
    // return goods
    return this.http.get('/api/v1/goods')
  }

  getGoodsById(goodsId: string): Observable<any>{
    // return goods[goodsId]
    return this.http.get('/api/v1/goods' + goodsId)
  }

}
