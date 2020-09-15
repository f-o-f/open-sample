import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-goods-update',
  templateUrl: './goods-update.component.html',
  styleUrls: ['./goods-update.component.scss']
})
export class GoodsUpdateComponent implements OnInit {
  goodsForm = new FormGroup({
    name: new FormControl(''),
    goods_id: new FormControl(''),
    size: new FormControl(''),
    amount: new FormControl(''),
    note: new FormControl(''),
  });
  
  //goods:Goods;
  constructor(
    private router: Router,
    private goodsService: GoodsService,
    //private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    //this.goodsService.getgoods().subscribe((goods: Goods) => {
      //this.goodsForm.setValue({ // <= 変更
        //name: goods.name,
        //goods_id: goods.goods_id,
        //size: goods.size,
        //amount:goods.amount,
        //note: goods.note
      //});
    //}); 
  }
  saveGoods(): void {
    const { name, goods_id, size,amount,note } = this.goodsForm.getRawValue(); // <= 追加
    //this.goodsService.update(new Goods(name, goods_id,size,amount,note)); 
    this.router.navigate(['/goods']);
  }

}
