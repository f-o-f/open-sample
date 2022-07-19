import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { goods } from '../../goods/goods';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss']
})
export class GoodsDetailsComponent implements OnInit {
  goods: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.goods = goods[+params.get("goodsId")!]
    })
  }
}