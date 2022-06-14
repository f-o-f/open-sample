import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';

@Component({
  selector: 'app-goods-update',
  templateUrl: './goods-update.component.html',
  styleUrls: ['./goods-update.component.css']
})
export class GoodsUpdateComponent implements OnInit {
  result='';
  goods: Goods = new Goods("","",0,0,"");

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GoodsService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id !== null){
      this.service.getGoods(id).subscribe(res => {
        this.goods = res;
      });
    }
  }

  onSubmit(form:any): void {
    let newgoods:Goods = new Goods(form.name,form.goods_id,form.size,form.amount,form.note);
    this.service.setGoods(newgoods).subscribe(() => {
      this.router.navigate(["/goods"]);
    });
  }
}
