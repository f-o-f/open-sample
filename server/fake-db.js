const Goods = require('./model/goods')

class FakeDb {

    constructor(){
        this.goods = [
            {
                name: 'Phone XL',
                goods_id: 1,
                size: 10,
                amount: 1,
            },
            {
                name: 'Phone Mini',
                goods_id: 2,
                size: 13,
                amount: 3,
            },
            {
                name: 'Phone Standard',
                goods_id: 3,
                size: 15,
                amount: 5,
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushGoodsToDb()
    }
    
    async cleanDb() {
    await Goods.deleteMany({})
    }

    pushGoodsToDb(){
        this.goods.forEach(
            (goods) => {
                const newGoods = new Goods(goods)
                newGoods.save()
            }
        )
    }

    // seeDb() {
    //     this.pushGoodsToDb()
    // }
}

module.exports = FakeDb