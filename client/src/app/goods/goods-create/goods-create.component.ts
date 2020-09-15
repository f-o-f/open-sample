import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
import { formatCurrency } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.scss']
})
export class GoodsCreateComponent implements OnInit {
  goodsForm = new FormGroup({
    name: new FormControl(''),
    goods_id: new FormControl(''),
    size: new FormControl(''),
    amount: new FormControl(''),
    note: new FormControl(''),
  });
  //goods:Goods;
  constructor(private router: Router,
    private goodsService: GoodsService) { }

  ngOnInit(): void {
    //this.goodsService.get('00000').subscribe((goods: Goods) => {
      //this.goods = goods;
    //}); 
  }


  saveGoods(): void {
    const { name, goods_id, size,amount,note } = this.goodsForm.getRawValue();
    this.goodsService.set(new Goods(name, goods_id,size,amount,note)); 
    this.router.navigate(['/goods']);
  }

}
