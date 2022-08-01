import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Goods } from '../goods';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-update',
  templateUrl: './goods-update.component.html',
  styleUrls: ['./goods-update.component.css']
})
export class GoodsUpdateComponent implements OnInit {
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
  onSubmit(form: any): void {
    let goods = {
      name: form.name,
      goods_id: form.id,
      size: form.size,
      amount: form.amount,
      note: form.note
    };
    this.service.updateGoods(goods);
    this.router.navigate(["/goods"]);
  }

}
