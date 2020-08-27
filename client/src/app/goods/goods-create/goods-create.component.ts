import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.scss']
})
export class GoodsCreateComponent implements OnInit {
  goods:Goods;
  constructor(private router: Router,
    private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.goodsService.get('00000').subscribe((goods: Goods) => {
      this.goods = goods;
    }); 
  }


  saveGoods(): void {
    
    this.goodsService.set(this.goods);
    this.router.navigate(['/goods']);
  }

}
