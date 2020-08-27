import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-update',
  templateUrl: './goods-update.component.html',
  styleUrls: ['./goods-update.component.scss']
})
export class GoodsUpdateComponent implements OnInit {
  goods:Goods;
  constructor(
    private router: Router,
    private goodsService: GoodsService,) { }

  ngOnInit(): void {
    this.goodsService.getgoods().subscribe((goods: Goods) => {
      this.goods = goods;
    }); 
  }
  saveGoods(): void {
    console.log(this.goods);
    this.router.navigate(['/goods']);
  }

}
