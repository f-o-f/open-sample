import { Component, OnInit } from '@angular/core';
import { Goods } from '@shared/models/goods';
import { GoodsService } from '@shared/services/goods.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.scss']
})
export class GoodsCreateComponent implements OnInit {
  public goodsForm!: FormGroup;

  constructor(
    private router: Router,
    private goodsService: GoodsService,
  ) { }

  ngOnInit(): void {
    this.goodsForm = new FormGroup({
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
      amount: new FormControl(['']),
      note: new FormControl(['']),
    });
  }


  saveGoods() {
    const { name, goods_id, size, amount, note } = this.goodsForm.getRawValue();
    this.goodsService.set(new Goods(name, goods_id, size, amount, note))
      .subscribe((res) => {
        if (res != Error) {
          this.router.navigate(['/goods']);
        }
      });
  }

}
