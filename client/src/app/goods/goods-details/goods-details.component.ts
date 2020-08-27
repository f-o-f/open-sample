import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss']
})
export class GoodsDetailsComponent implements OnInit {
  goods:Goods;
  constructor(private goodsService: GoodsService,private router: Router) { }

  ngOnInit(): void {
    this.goodsService.getgoods().subscribe((goods: Goods) => {
      this.goods = goods;
    });
  
  }

  saveGoods(id:string): void {
    this.goodsService.keep(id);
    this.router.navigate(['/goods/update']);
  }
}
