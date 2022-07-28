import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodsService } from 'src/app/service/goods.service';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss']
})
export class GoodsDetailsComponent implements OnInit {
  goods: any;

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    // this.goods = this.goodsService.getGoodsById(params.get('goodsId')!)
    const goodsObservable = this.goodsService.getGoodsById(params.get('goodsId')!)

    goodsObservable.subscribe(
      (data) => { 
        this.goods = data
      },
      (err) => {}
    )
    })
  }
}