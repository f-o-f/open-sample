import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoodsService} from '../shared/services/goods.service'
import { Goods } from '../shared/models/goods';
class GoodsListElement extends Goods {
  hovered: boolean;
} 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  goodsListElement: GoodsListElement[] = null;
  goodslist:Goods[] = null;
  constructor(private router: Router,private goodsService: GoodsService) { }

  ngOnInit(): void {
  }

  saveGoods(): void {
     /* this.goodsService.list()
        .subscribe(res => {
          this.goodslist = res;
        });

      this.goodsListElement = this.goodslist.map((goods:Goods) => {
        return {
          ... goods,
          hovered: false,
        };
      }); */

    //this.goodsService.keep(id); 
    this.router.navigate(['/goods/list']);
  } 

}
