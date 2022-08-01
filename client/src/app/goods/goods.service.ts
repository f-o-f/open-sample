import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { Goods } from './goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  goodsList: Goods[] = [];
  constructor(
    // private http: HttpClient
  ) {
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

  // private url = 'http://127.0.0.1:8888';     // 適切に変更してください

  // getGoodsList(): Observable<Goods[]> {
  //   return this.http.get<Goods[]>(`${this.url}/goods/list`)
  //     .pipe(
  //       catchError(this.handleError('getGoodsList', []))
  //     );
  // }

  // getGoods(id: string): Observable<Goods> {
  //   return this.http.get<Goods>(`${this.url}/goods/${id}`)
  //     .pipe(
  //       catchError(this.handleError<Goods>(`getGoods id=${id}`))
  //     );
  // }

  // createGoods(goods: Goods): Observable<Goods> {
  //   return this.http.post<Goods>(`${this.url}/goods/`, goods)
  //     .pipe(
  //       catchError(this.handleError('createGoods', goods))
  //     );
  // }

  // updateGoods(goods: Goods): Observable<Goods> {
  //   const id = goods.goods_id;
  //   return this.http.put<Goods>(`${this.url}/goods/${id}`, goods)
  //     .pipe(
  //       catchError(this.handleError<Goods>(`updateGoods id=${id}`))
  //     );
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
