import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
//import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';
/* class GoodsListElement extends Goods {
  hovered: boolean;
  constructor(name, goods_id,size, amount,note,hovered) {
    super(name,goods_id,size,amount,note);
    this.hovered = hovered;
  }
} */

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  goodsList:Goods[]=[]; 
  constructor(private router: Router,private goodsService: GoodsService,) {}

async ngOnInit(){
  await this.goodsService.list()
    .then((goodsList:Goods[])=>{
      this.goodsList = goodsList;
     }) 
    .catch((msg:String)=>{
     console.log(msg);
   })
  }

  //hovered(goods: GoodsListElement): void { goods.hovered = true; } 
  //unhovered(goods: GoodsListElement): void { goods.hovered = false; } 
 
  saveGoods(id:string){
    this.goodsService.setId(id);
    this.router.navigate(['/goods/details']);
  }  
}