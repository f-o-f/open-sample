import { Component, OnInit } from '@angular/core';
import { Goods } from '@shared/models/goods';
import { GoodsService } from '@shared/services/goods.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  goods_id: string;
  size: number;
  amount: number;
  note: string;
}
@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = [];
  goods: Goods;
  private ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['goods_id', 'name', 'size', 'detail'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  constructor(private router: Router, private goodsService: GoodsService,) {
  }

  ngOnInit() {
    this.goodsService.list()
      .subscribe((goodsList: Goods[]) => {
        this.ELEMENT_DATA = goodsList;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      })
  }
  getGoods(id: string) {
    this.goodsService.setId(id);
    this.router.navigate(['/goods/details']);
  }
}