export class Goods {
    name: string;
    goods_id: string;
    size: number;
    amount: number
    note: string;
  
    constructor(name, goods_id, size, amount, note) {
      this.name = name;
      this.goods_id = goods_id;
      this.size = size;
      this.amount = amount;
      this.note = note;
    }
  }