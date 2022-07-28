import { Component, OnInit } from '@angular/core';
import { GoodsService } from 'src/app/service/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  goods: any[] =[]

  constructor(private goodsService: GoodsService
  ) { }

  ngOnInit(): void {
    // this.goods = this.goodsService.getGoods()
    const goodsObservable = this.goodsService.getGoods()
    goodsObservable.subscribe(
      (data) => { 
        this.goods = data
      },
      (err) => { console.error('次のエラーが発生しました: ' + err) }
    )    
  }
}
