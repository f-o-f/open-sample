import { Injectable } from '@angular/core';
import { Goods } from '../models/goods';
import { Observable, of } from 'rxjs/index';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
//import {Http, Response} from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Injectable({providedIn: 'root'})
export class GoodsService {
  goodslist = [
    new Goods('Angular入門1','1',1,1, 'Angularが出来た。'),
    new Goods('Angular入門2','2',2,2, 'Angularが出来た。'),
    new Goods('Angular入門3','3',3,3, 'Angularが出来た。'),
  ];
  private httpOptions: any = {
    // ヘッダ情報
   /*  headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), */
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    //body: null
  };

  //goodslist :Goods[] ;
  private url = 'http://localhost:3000';//要変更
  constructor(
    private http: HttpClient
  ) { }
  
  list(): Observable<Goods[]> {
    //return this.goodslist; 
    return this.http.post(this.url + '/goods/search', this.httpOptions)
     .pipe(
      map((response: any) =>
        Object.keys(response).map((key: string) => {
          const gds = response[key];
          return new Goods(gds.name,gds.goods_id, gds.size, gds.amount, gds.note);
        })
      )
    ); 
  } 
  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } */
 /*  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  } */

  /* getgoods():Observable<Goods>{
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
  }*/
  set(goods:Goods):Observable<any>{
    return this.http.post(this.url + '/goods', this.httpOptions)
    .pipe((response: any) =>{
    const result = response;
     return result;
    })
      
  } 
/*
  keep(id:string){
    this.goods.goods_id = id;
  }
  update(goods: Goods): void { 
    const index = this.goodslist.findIndex((gds:Goods) => gds.goods_id === goods.goods_id);
    this.goodslist[index] = goods;
  }*/
}
 