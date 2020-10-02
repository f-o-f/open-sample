import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoodsService} from '../shared/services/goods.service'
import { Goods } from '../shared/models/goods';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  goods:Goods;
  goodsForm = new FormGroup({
    goods_id: new FormControl(''),
  });
  constructor(private router: Router,
    private goodsService: GoodsService
    ) { }

  ngOnInit(): void {
  }
  async saveGoods() {
    const {goods_id} = this.goodsForm.getRawValue();
    await this.goodsService.set(goods_id)
    await this.goodsService.get()
    .then((goods:Goods)=>{
      this.goods = goods;
     }
    )
    .catch((msg:String)=>{
      console.log(msg);
    })
  }
}
