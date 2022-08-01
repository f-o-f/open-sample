import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Goods } from '../goods';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  goods: Goods = { name: "", goods_id: "", size: 0, amount: 0, note: "" }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GoodsService
    ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    var goods = this.service.getGoods(id);
    if (goods) {
      this.goods = goods;
    }
  }

}
