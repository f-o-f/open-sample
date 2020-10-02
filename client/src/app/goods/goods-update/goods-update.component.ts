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
  goods:Goods;
  goodsForm = new FormGroup({
    name: new FormControl(''),
    goods_id: new FormControl(''),
    size: new FormControl(''),
    amount: new FormControl(''),
    note: new FormControl(''),
  });
  constructor(
    private router: Router,
    private goodsService: GoodsService,
    //private fb: FormBuilder,
    ) { }

    async ngOnInit() {
      await this.goodsService.get()
      .then((goods:Goods)=>{
        this.goodsForm.setValue({
          goods_id: goods.goods_id,
          name: goods.name,
          size: goods.size,
          amount: goods.amount,
          note: goods.note,
      })
    })
      .catch((msg:String)=>{
        console.log(msg);
      })
    }
  saveGoods(): void {
    const { name, goods_id, size,amount,note } = this.goodsForm.getRawValue(); // <= 追加
    this.goodsService.update(new Goods(name, goods_id,size,amount,note)); 
    this.router.navigate(['/goods']);
  }

}
