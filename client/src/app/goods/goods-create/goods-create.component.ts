import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';

@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.css']
})
export class GoodsCreateComponent implements OnInit {

  goods:Goods = new Goods('example','0',0,0,"please write desciption");

  constructor(
    private router: Router,
    private service: GoodsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.goods = new Goods(form.name, form.goods_id, form.size, form.amount, form.note);
    this.service.addGoods(this.goods).subscribe(() => {
      this.router.navigate(["/goods"]);
    });
  }
}
