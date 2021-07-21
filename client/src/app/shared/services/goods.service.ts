import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Goods } from '../models/goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private url = 'http://localhost.8888';
  /*
  goodsList:Goods[] = [
    new Goods("OOTP","1",100,20,"baseball simulation game"),
    new Goods("FM","2",70,50,"football simulation game"),
    new Goods("Cites","3",120,120,"Create original city game"),
    new Goods("EU4","4",75,85,"King in the middle age game"),
    new Goods("HoI4","5",62,115,"President in the WW2 game"),
  ];*/
  goodsList :Goods[] = [];

  constructor(
    private http: HttpClient
  ){}

  getGoodsList(): Observable<Goods[]> {
    return this.http.post<Goods[]>(`${this.url}/goods/search`, this.goodsList)
      .pipe(
        catchError(this.handleError('getGoodsList',[]))
      );
  }

  getGoods(id: string): Observable<Goods> {
    return this.http.get<Goods>(`${this.url}/goods/${id}`)
      .pipe(
        catchError(this.handleError<Goods>(`getGoods id=${id}`))
      );
  }

  setGoods(goods: Goods): Observable<Goods> {
    const id = goods.goods_id;
    return this.http.put<Goods>(`${this.url}/goods/${id}`, goods)
      .pipe(
        catchError(this.handleError<Goods>(`setGoods id=${id}`))
      );
  }

  addGoods(goods: Goods):Observable<Goods> {
    this.goodsList.push(goods);
    return this.http.post<Goods>(`${this.url}/goods/`, goods)
      .pipe(
        catchError(this.handleError<Goods>(`addGoods`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /*
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
  }*/
}
