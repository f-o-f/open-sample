import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
class GoodsListElement extends Goods {
  hovered: boolean;
}

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  goodsListElement: GoodsListElement[] = null;
  //goodsList:Goods[] = null;
  constructor(private router: Router,private goodsService: GoodsService,) {   }

  ngOnInit(): void {
    this.goodsService.list()
     .subscribe((goodsList:Goods[])=> {

       this.goodsListElement = goodsList.map((goods: Goods) => {
        return { // <= 変更
          ... goods,
          hovered: false,
        };
      }); 
        //this.goodsList = goodsList;

      }
    ) 
/*       this.goodsListElement = this.goodsList.map((goods:Goods) => {
        return {
          ... goods,
          hovered: false,
        };
      });  */
    
  }

  hovered(goods: GoodsListElement): void { goods.hovered = true; } 
  unhovered(goods: GoodsListElement): void { goods.hovered = false; } 
 
  saveGoods(id:string): void {
    //this.goodsService.keep(id);
    this.router.navigate(['/goods/details']);
  }  
}