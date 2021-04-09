import { Injectable } from '@angular/core';
import { Goods } from '@shared/models/goods';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class GoodsService {
  goods_id: string;
  goods: Goods;
  private url = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }
  //一覧
  list(): Observable<any> {
    return this.http.post(this.url + '/goods/search', {'Content-Type': 'application/json'})
      .pipe(
        map((response: any) => {
          if (response) {
            return Object.keys(response).map((key: string) => {
              const gd = response[key];
              return new Goods(gd.name, gd.goods_id, gd.size, gd.amount, gd.note);
            });
          } else {
            return [];
          }
        }),
        catchError(this.handleError())
      )
  }

  //明細
  get(): Observable<any> {
    return this.http.get(this.url + '/goods/' + this.goods_id)
      .pipe(
        map((response: any) => {
          return new Goods(response.name, response.goods_id, response.size, response.amount, response.note);
        }),
        catchError(this.handleError())
      )
  }

  //登録
  set(goods: Goods): Observable<any> {
    return this.http.post(this.url + '/goods', goods)
      .pipe(
        map((response: any) => { }
        ),
        catchError(this.handleError())
      )
  }

  setId(goods_id: string): void {
    this.goods_id = goods_id;
  }

  update(goods: Goods): Observable<any> {
    return this.http.put(this.url + '/goods/' + goods.goods_id, goods)
    .pipe(
      map((response: any) => { }
      ),
      catchError(this.handleError())
    )
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
