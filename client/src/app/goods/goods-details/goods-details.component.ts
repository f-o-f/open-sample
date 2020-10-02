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

  async ngOnInit() {
    await this.goodsService.get()
    .then((goods:Goods)=>{
    this.goods = goods;
    })
    .catch((msg:String)=>{
      console.log(msg);
    })
  }

  saveGoods() {
    var id = this.goods.goods_id; 
    this.goodsService.setId(id);
    this.router.navigate(['/goods/update']);
  }
}
