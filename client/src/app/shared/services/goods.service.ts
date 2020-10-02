import { Injectable } from '@angular/core';
import { Goods } from '../models/goods';
import { HttpClient ,HttpHeaders, } from '@angular/common/http';
import { JsonPipe } from '@angular/common';


@Injectable({providedIn: 'root'})

export class GoodsService {
  private httpOptions: any = {

     headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), 
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    //body: null
  };
  goods_id:string;
  //goods:Goods;
  //goodsList :Goods[] =null;
  private url = 'http://localhost:3000';//要変更
  constructor(
    private http: HttpClient,
  ) { }

  async list(): Promise<any> {
    return await this.http.post(this.url + '/goods/search', this.httpOptions)
    .toPromise()
      .then(this.handleDataList)
      .catch(this.handleFailure);
  }
  
  async get():Promise<any>{
    return await this.http.get(this.url + '/goods/'+this.goods_id, this.httpOptions)
    .toPromise()
      .then(this.filterGoodsDocument)
        .then(this.handleData)
      .catch(this.handleFailure);
  }
  async set(goods:Goods):Promise<any>{
    await this.http.post(this.url + '/goods',goods, this.httpOptions)
    .toPromise()
      .then()
      .catch(this.handleFailure);
  }

  setId(goods_id:string):void{
    this.goods_id = goods_id;
  }

  async update(goods: Goods): Promise<any>{ 
    return await this.http.put(this.url + '/goods/'+goods.goods_id, goods,this.httpOptions)
    .toPromise()
      .then()
      .catch(this.handleFailure);
  }
  handleDataSet(response: Response) : Promise<string> {
    let msg : string;
    return Promise.resolve("error");
  }
 filterGoodsDocument(doc: object) {
    const denied = ['_bsontype','_id'];
    return Object.keys(doc)
        .filter(key => denied.indexOf(key) === -1)
        .reduce((obj, key) => {
            obj[key] = doc[key];
            return obj;
        }, {});
}
  handleData(doc: Object) : Promise<Goods> {
    var goods: Goods;
    var docs
    docs = JSON.stringify(doc);
    var obj = JSON.parse(docs);
    var name = obj.name
    var goods_id = obj.goods_id;
    var size = obj.size;
    var amount = obj.amount;
    var note = obj.note;
    goods = new Goods(name,goods_id,size, amount,note); 
    return Promise.resolve(goods);
  }

  handleDataList(response: Response) : Promise<Goods[]> {
    var num =  Object.keys(response).length
    var goodsList =[];
    var goods: Goods;
    for(var i = 0;i<num;i++){
    var name = response[i].name;
    var goods_id = response[i].goods_id;
    var size = response[i].size;
    var amount = response[i].amount;
    var note = response[i].note;
    
    goods = new Goods(name,goods_id,size, amount,note);
    goodsList.push(goods); 

   } 
    return Promise.resolve(goodsList);
  }

  handleFailure(response: Response) : Promise<string> {
    let msg : string;
    return Promise.reject("error");
  }


/*
  update(goods: Goods): void { 
    const index = this.goodslist.findIndex((gds:Goods) => gds.goods_id === goods.goods_id);
    this.goodslist[index] = goods;
  }*/
}
 