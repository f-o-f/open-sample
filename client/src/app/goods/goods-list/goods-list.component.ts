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
  goodslist: GoodsListElement[] = null;

  constructor(private goodsService: GoodsService,private router: Router,) {   }

  ngOnInit(): void {
    this.goodsService.list().subscribe((goodslist:Goods[])=>{
      this.goodslist = goodslist.map((goods: Goods) => {
        return { // <= 変更
          ... goods,
          hovered: false,
        };
      });
    });
  }

  hovered(goods: GoodsListElement): void { goods.hovered = true; } // <= 変更
  unhovered(goods: GoodsListElement): void { goods.hovered = false; } // <= 変更

  saveGoods(id:string): void {
    this.goodsService.keep(id);
    this.router.navigate(['/goods/details']);
  }
}
