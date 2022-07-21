import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { goods } from '../../goods/goods';


@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.scss']
})
export class GoodsCreateComponent implements OnInit {
  goods: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    // private goods: Goods,
  ) { }

  ngOnInit(): void {
    // this.goods.get(2).subscribe((goods: Goods) => {
    //   this.goods = goods;
    // });
    this.route.paramMap.subscribe(params => {
      this.goods = goods[+params.get("goodsId")!]
      })
  }

  saveGoods(): void {
    console.log(this.goods);
    this.router.navigate(["/goods"]);
  }
}
