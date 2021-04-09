import { Component, OnInit } from '@angular/core';
import { Goods } from '@shared/models/goods';
import { GoodsService } from '@shared/services/goods.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-goods-update',
  templateUrl: './goods-update.component.html',
  styleUrls: ['./goods-update.component.scss']
})
export class GoodsUpdateComponent implements OnInit {
  goods: Goods;
  goodsForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,   
      Validators.maxLength(30)
    ]),
    goods_id: new FormControl('', [
      Validators.required,  
      Validators.minLength(5), 
      Validators.maxLength(5),  
      Validators.pattern('^[A]+[0-9]{4}')
    ]),
    size: new FormControl('', [
      Validators.required
    ]),
    amount: new FormControl(''),
    note: new FormControl(''),
  });
  constructor(
    private router: Router,
    private goodsService: GoodsService
  ) { }

  ngOnInit() {
    this.goodsService.get()
      .subscribe((goods: Goods) => {
        this.goodsForm.setValue({
          goods_id: goods.goods_id,
          name: goods.name,
          size: goods.size,
          amount: goods.amount,
          note: goods.note,
        })
      })
  }
  updateGoods(): void {
    const { name, goods_id, size, amount, note } = this.goodsForm.getRawValue(); // <= 追加
    this.goods = new Goods(name, goods_id, size, amount, note);
    console.log(this.goods);
    this.goodsService.update(this.goods);
    this.router.navigate(['/goods']);
  }

}
