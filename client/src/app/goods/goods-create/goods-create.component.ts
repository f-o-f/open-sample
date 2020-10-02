import { Component, OnInit } from '@angular/core';
import { Goods } from '../../shared/models/goods';
import { GoodsService } from '../../shared/services/goods.service';
import { Router } from '@angular/router';
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
  }


  async saveGoods() {
    const { name, goods_id, size,amount,note } = this.goodsForm.getRawValue();
    await this.goodsService.set(new Goods(name, goods_id,size,amount,note))
    .then(()=>{
      
      this.router.navigate(['/goods']);
    }
    )
    .catch((msg:String)=>{
      console.log(msg);
    })
  }

}
